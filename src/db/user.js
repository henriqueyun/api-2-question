const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    question: {
        type: String,
        required: [
            true,
            "question is required"
        ]
    },
    answer: {
        type: String,
        required: [
            true,
            "answer is required"
        ]
    }
});

const UserModel = mongoose.model("User", userSchema);

module.exports =  UserModel;