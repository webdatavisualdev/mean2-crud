var SnailLog = require('../models/snail_log');
var distanceOfFirstDay = 0;

// Recursive function to calcuate the days of snail climbing
function getSuccessDay(h, u, d, f, height, day) {
    day ++;
    height += u;
    if (height > h) {
        return {
            success: true,
            day: day
        };
    } else {
        height -= d;
        u = u - distanceOfFirstDay * f / 100;
        
        if (height >= 0) {
            return getSuccessDay(h, u, d, f, height, day);
        } else {
            return {
                success: false,
                day: day
            }
        }
    }
}

// API to calculate the days of snail climbing
exports.create = async (req, res, next) => {
    distanceOfFirstDay = req.body.u;
    var result = getSuccessDay(req.body.h, req.body.u, req.body.d, req.body.f, 0, 0);
    if (result.success) {
        req.body.result = 'success on day ' + result.day;
    } else {
        req.body.result = 'failure on day ' + result.day;
    }
    await(new SnailLog(req.body)).save();
    return res.json(req.body.result);
}