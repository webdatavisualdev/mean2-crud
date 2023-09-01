var mongoose = require('mongoose');

// Create a schema for snail log
var SnailLogSchema = new mongoose.Schema({
    createdAt: { type : Date, default: Date.now },
    h: Number,
    u: Number,
    d: Number,
    f: Number,
    result: String,
});

module.exports = mongoose.model('snail_log', SnailLogSchema);
