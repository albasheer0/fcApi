const express = require('express')
const router = express.Router()
const getCache = require('../controllers/cache/getCache')

const createAndUpdate = require('../controllers/cache/createAndUpdate')
const deleteCache = require('../controllers/cache/deleteCache')


// endpoint to get cached data for a given key or to get all stored keys in the cache
router.get('/', getCache);


// endpoint to create and update data for a given key
router.post('/',createAndUpdate)

// endpoint to remove a given key from the cache or remove all keys from the cache
router.delete('/',deleteCache)



module.exports = router