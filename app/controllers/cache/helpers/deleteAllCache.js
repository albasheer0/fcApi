const Cache = require('../../../models/cache')


/**
* Delete all cache
*
*/
const deleteAllCache =async () => {
    return await Cache.deleteMany()
}

module.exports = { deleteAllCache }
