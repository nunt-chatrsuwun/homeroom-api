const express = require('express')
const router = express.Router()

module.exports = router
//     http://localhost:8000/api/student?class=1
router.get('/display', async (req, res) => {
  try {
    let rows = await req.db('hrsave')
    res.send({
      ok: true,
      hr: rows,
    })
  } catch (e) {
    res.send({ ok: false, error: e.message })
  }
})

//     /api/student/save
router.post('/save', async (req, res) => {
  try {
    //TODO: check

    //INSERT
    let id = await req.db('students').insert({
      stdcode: req.body.stdcode || '',
      firstName: req.body.firstName || '',
      lastName: req.body.lastName || '',     
      gender: req.body.gender || '',       
      grp: req.body.grp || '', 
    }).then(ids => ids[0])
    res.send({
      ok: true,
      id,
    })
  } catch (e) {
    res.send({ ok: false, error: e.message })
  }
})

// /api/student/id/555
router.get('/id/:id', async (req, res) => {
  let db = req.db
  let rows = await db('student')
    .where('id', '=', req.params.id)
  res.send({
    ok: true,
    student: rows[0] || {},
  })
})
//   /api/student/save
router.post('/save', async (req, res) => {
  let db = req.db
  // UPDATE student SET first_name=?, last_name=? WHERE id=7
  await db('student').where({id: req.body.id}).update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
  // let ids = await db('student').insert({
  //   code: '',
  //   first_name: '',
  //   last_name: '',
  // })
  // let id = ids[0]
  res.send({ok: true})
})

router.delete('/:id', function (req, res) {
  req.db('student').where({id: req.params.id}).delete().then(() =>{
    res.send({status: true})
  }).catch(e => res.send({status: false, error: e.message}))
})
router.post('/save2', (req, res) => {
  let db = req.db  
  db('t1').insert({}).then(ids => {
    let id = ids[0]
    Promise.all([
      db('t2').insert({}).catch(),
      db('t3').insert({}).catch(),
    ]).then(() => {
      res.send({status: true})
    }).catch(err => {
      res.send({status: false})
    })    
  })
  console.log('ok')
})
router.get('/save3', async (req, res) => {
  try {
    let db = req.db  
    let ids = await db('t1').insert({})
    await Promise.all([
      db('t2').insert({}),
      db('t3').insert({})
    ])
    res.send({status: true})
  } catch (e) {
    res.send({status: false})
  }
})
router.get('/about', function (req, res) {
  res.send('About birds')
})

