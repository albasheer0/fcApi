const mongoose = require('mongoose')
const CACHE_TTL= process.env.CACHE_TTL

const CacheSchema = new mongoose.Schema({
    key: { type: String, required: true , unique: true,},
    value: { type: String, default:Math.random().toString(36).substring(7) },
    ttl: { type: Number, default:CACHE_TTL },
    lastAccessed: {type: Date,default:Date.now()}
}, {
    versionKey: false,
    timestamps: true
})
module.exports = mongoose.model('cache', CacheSchema)