const mongoose = require('mongoose');

const StudentInfo = mongoose.Schema({
    name: String,
    student_id: String,
    session: String,
    department: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Campus', StudentInfo);
