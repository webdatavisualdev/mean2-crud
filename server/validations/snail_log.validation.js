var Joi = require('joi');

module.exports = {
    create: {
        body: {
            h: Joi.number().integer().required(),
            u: Joi.number().integer().required(),
            d: Joi.number().integer().required(),
            f: Joi.number().integer().required(),
        },
    },
};
