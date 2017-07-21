const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const assert = require('assert')
const express = require('express')
const bodyParser = require('body-parser')
const btoa = require('btoa')

const app = express()
const url = 'mongodb://share-db:27017/share'
let db

const siteUrl = process.env.REACT_APP_DILYRICS_URL

MongoClient.connect(url, function (err, dbConnected) {
  assert.equal(null, err)
  db = dbConnected
})

app.use(bodyParser.json())

// http page
app.get('/pt/:token', async function (req, res, next) {
  const token = req.params.token
  console.log('token', token)
  try {
    const doc = await db.collection('plaintext').findOne({ token })
    console.log('doc', doc)
    if (!doc) {
      return next({ status: 404, message: 'Token not found', token })
    }
    res.json(doc)
  } catch (err) {
    next(err)
  }
})

// addClan
app.post('/pt', async function (req, res, next) {
  const doc = req.body
  console.log('POST /pt method: ', req.method)
  console.log('POST /pt doc: ', doc)
  console.log('POST /pt Content-Type: ', req.headers['content-type'])
  doc.token = btoa(Date.now() / 1000 | 0).replace(/=+$/, '')
  doc.created = new Date()
  try {
    const result = await db.collection('plaintext').insertOne(doc)
    if (!result.result.ok || !result.ops[0]) {
      return next(new Error('Couldn\'t add document'))
    }
    res.json(result.ops[0])
    console.log('result: ', result.ops[0])
  } catch (err) {
    next(err)
  }
})

// 404 if no matches
app.use(function (req, res) {
  res.status(404).send('404 Not found')
})

// error middleware for errors that occurred in middleware
// declared before this
app.use(function onerror (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  console.error('error middleware fired! err:', err, 'stack', err.stack)
  if (err.status && err.message) {
    res.status(err.status).send(err.message)
    return
  }
  res.status(500).send('500 Internal error')
})

app.listen(process.env.PORT || 3000)
