const mongoose = require("mongoose");

const winnerSchema = mongoose.Schema(
    {
        winner: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        fecha: {
            type: String,
            required: true
        }
    },
    {
        versionKey:false
    }
)

module.exports = mongoose.model('Winner', winnerSchema)