const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const assert = require('assert')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const btoa = require('btoa')

const app = express()
const url = 'mongodb://share-db:27017/share'
let db

// const origin = process.env.REACT_APP_DILYRICS_URL
// const optionsSuccessStatus = 200
// app.use(cors({ origin, optionsSuccessStatus }))
app.use(cors())
app.use(bodyParser.json())

MongoClient.connect(url, function (err, dbConnected) {
  assert.equal(null, err)
  db = dbConnected
})

const renderPage = doc => `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Песни хвалы ${doc.date}. Яблоновский.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${doc.description}">
    <meta property="og:title" content="Песни хвалы ${doc.date}. Яблоновский">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:description" content="${doc.description}">
  </head>
  <body><p></p><pre>${doc.text}</pre><p></p></body>
</html>`

// getCount
app.get('/pt/count', async function (req, res, next) {
  try {
    const count = await db.collection('plaintext').count()
    res.json(count)
  } catch (err) {
    next(err)
  }
})

// getPlain html
app.get('/pt/:token', async function (req, res, next) {
  const token = req.params.token
  try {
    const doc = await db.collection('plaintext').findOne({ token })
    if (!doc) {
      return next({ status: 404, message: 'Token not found', token })
    }
    res.type('html').send(renderPage(doc))
  } catch (err) {
    next(err)
  }
})

// getPlain json
app.get('/pt/json/:id', async function (req, res, next) {
  const id = req.params.id
  try {
    const doc = await db.collection('plaintext').findOne({ _id: new ObjectID(id) })
    if (!doc) {
      return next({ status: 404, message: 'Document with such id not found', id })
    }
    res.json(doc)
  } catch (err) {
    next(err)
  }
})

// getPlain list
app.get('/pt/json/last/:count/:earlierThan', async function (req, res, next) {
  const count = req.params.count | 0
  const earlierThan = new Date(req.params.earlierThan)
  try {
    const docs = await db.collection('plaintext')
      .find({ created: { $lt: earlierThan } })
      .sort({ created: -1 })
      .limit(count)
      .toArray()
    res.json(docs)
  } catch (err) {
    next(err)
  }
})

// addPlain
app.post('/pt', async function (req, res, next) {
  const doc = req.body
  doc.token = btoa(Date.now() / 1000 | 0).replace(/=+$/, '')
  doc.created = new Date()
  try {
    const result = await db.collection('plaintext').insertOne(doc)
    if (!result.result.ok || !result.ops[0]) {
      return next(new Error('Couldn\'t add document'))
    }
    res.json(result.ops[0])
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
