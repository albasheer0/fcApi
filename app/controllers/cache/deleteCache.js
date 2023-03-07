const { deleteCacheByKey } = require('./helpers/deleteCacheByKey')
const { deleteAllCache } = require('./helpers/deleteAllCache')



    /**
    * delete cache by function called by route
    * @param {Object} req - request object
    * @param {Object} res - response object
    */
    const deleteCache = async(req, res) => {
    try {
        const key = req.query.key;
        if(key){
        await deleteCacheByKey(key)
            res.send(`deleted ${key}`);
        }
        await deleteAllCache
        res.send("droped everything");
    } catch (error) {
        console.log(error)

    }
}

module.exports = deleteCache