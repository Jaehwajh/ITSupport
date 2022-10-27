const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    device: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

module.exports = mongoose.model("Post", PostSchema);