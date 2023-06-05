const UserModel = require("./db/user");

module.exports = {
    saveQuestion: async ({ id, question, answer }) => {
        return await UserModel.findOneAndUpdate({ _id: id }, { question, answer }, { new: true });
    }
};