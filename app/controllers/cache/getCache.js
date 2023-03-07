const { createCache } = require('./helpers/createCache')
const { findCacheByKey } = require('./helpers/findCacheByKey')
const { getAllKeys } = require('./helpers/getAllKeys')

    /**
    * Get all cache by function called by route
    * @param {Object} req - request object
    * @param {Object} res - response object
    */
    const getCache = async(req, res) => {

    try {
        const key = req.query.key;
        if(key){
            const cache = await findCacheByKey(key)
            if (cache) {
                // If cache data found, update last accessed time
                cache.lastAccessed = Date.now();
                await cache.save();
                console.log('Cache hit');

                // Return cached value
                res.send(cache.value);
            }{
                console.log(key)
            console.log('Cache miss');



                // Create new cache data for given key
            const newCache = await createCache({key:key})

            res.send(newCache.key);
            }
        }

        res.json(await getAllKeys())
    } catch (error) {
       console.log(error)
    }
}

module.exports =  getCache