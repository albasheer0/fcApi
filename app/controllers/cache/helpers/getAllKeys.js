const Cache = require('../../../models/cache')


/**
* gets all cache keys
*
*/
const getAllKeys = async () => {
    return await  Cache.find({})
}

module.exports = { getAllKeys }
