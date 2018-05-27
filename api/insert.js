const express = require('express')
const router = express.Router()

module.exports = router

//     /api/student/save
router.post('/save', async (req, res) => {
  try {
    //TODO: check

    //INSERT
    let id = await req.db('hrsave').insert({
      id: req.body.id || '',
      date: req.body.date || '',
      time: req.body.time || '',     
      grp: req.body.grp || '',
      hrdetail: req.body.hrdetail || '',
      img: req.body.img || '', 
    }).then(ids => ids[0])
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
