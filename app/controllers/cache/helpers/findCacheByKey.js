const Cache = require('../../../models/cache')


/**
* Finds cach by key
* @param {string} key - cache key
*/
const findCacheByKey = async (key) => {
    const cache = await Cache.findOne({ key });

    // Check if cache exists
    if (!cache) return null;

    // Check if TTL has expired
    const now = Date.now();
    if (now > cache.lastAccessed.getTime() + cache.ttl * 1000) {
        // Delete cache if TTL has expired
        await Cache.deleteOne({ key });
        return null;
    }

    // Update last accessed time and return cache data
    cache.lastAccessed = now;
    await cache.save();
    return cache;
};

module.exports = { findCacheByKey }
