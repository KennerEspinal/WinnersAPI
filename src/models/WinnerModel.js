const mongoose = require("mongoose");

const winnerSchema = mongoose.Schema(
    {
        winner: {
            type: String,
            required: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model('Winner', winnerSchema)