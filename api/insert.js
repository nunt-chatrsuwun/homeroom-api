const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const moment = require('moment')

module.exports = router

//     /api/student/save
router.post('/save', async (req, res) => {
  try {
    //TODO: check
    // 1. INSERT
    let id = await req.db('hrsave').insert({
      id: req.body.id || '',
      date: req.body.date || '',
      time: req.body.time || '',     
      grp: req.body.grp || '',
      hrdetail: req.body.hrdetail || '',
      img: '',
    }).then(ids => ids[0])

    let tmp = req.body.img.split(',')
    let today = moment().format('YYYYMMDD')
    let fname = 'hr_' + today + '_' + id + '.png'
    let filename = path.resolve('./public/files/images', fname)
    fs.writeFileSync(filename, Buffer.from(tmp[1], 'base64'))

    await req.db('hrsave').where('id', '=', id).update({img: fname})

    res.send({
      ok: true,
      id,
    })
  } catch (e) {
    res.send({ ok: false, error: e.message })
  }
})

//   /api/student/save
router.post('/save', async (req, res) => {
  let db = req.db
  // UPDATE student SET first_name=?, last_name=? WHERE id=7
  await db('hrsave').where({id: req.body.id}).update({
    date: req.body.date,
    time: req.body.time,
    grp: req.body.grp,
    hrdetail: req.body.hrdetail,
    img: req.body.img,
  })
  res.send({ok: true})
})
