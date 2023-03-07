const { createCache } = require('./helpers/createCache')
const { findCacheByKey } = require('./helpers/findCacheByKey')


    /**
    * Get all cache by function called by route
    * @param {Object} req - request object
    * @param {Object} res - response object
    */
    const createAndUpdate = async(req, res) => {
    try {
        const key = req.query.key;
        if(key){

        const cache = await findCacheByKey(key)
       // If cache data found, update value and last accessed time
  if (cache) {
    cache.value = req.query.value;
    cache.lastAccessed = Date.now();
    cache.save()
      res.send(cache)
  } else{
        // Create new cache data for given key

        await createCache({key,value:req.query.value})

      res.send( await createCache({key,value:req.query.value}));
  }
            res.status(400)
        }
    } catch (error) {
        console.log(error)

    }
}

module.exports = createAndUpdate