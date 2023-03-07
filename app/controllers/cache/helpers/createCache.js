const Cache = require('../../../models/cache')


/**
* create new cache
*/
const MAX_CACHE_SIZE = process.env.MAX_CACHE_SIZE; // Maximum number of entries in the cache

const createCache = async ({ key, data }) => {
    // Check if cache already exists
    let cache = await Cache.findOne({ key });

    if (cache) {
        // Update existing cache data
        cache.data = data;
        cache.lastAccessed = new Date();
        await cache.save();
    } else {
        // Check if cache is full
        const count = await Cache.countDocuments();
        if (count >= MAX_CACHE_SIZE) {
            // Evict least recently used entry
            const oldestCache = await Cache.findOne().sort({ lastAccessed: 1 });
            await Cache.deleteOne({ _id: oldestCache._id });
        }

        // Create new cache data for given key
        cache = await Cache.create({ key, data });
    }

    return cache;
};

module.exports = { createCache }
