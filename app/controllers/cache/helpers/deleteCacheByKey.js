const Cache = require('../../../models/cache')


/**
* Delete cache by key
* @param {string} key - cache key
*/
const deleteCacheByKey = async  (key = '') => {
    return await Cache.deleteOne({ key });
}

module.exports = { deleteCacheByKey }
