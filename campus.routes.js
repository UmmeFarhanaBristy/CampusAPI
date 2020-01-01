module.exports = (app) => {
    const student_info = require('./campus.controller.js');

    // Create a new student database
    app.post('/campus/user', student_info.create);

    // Retrieve all student information
    app.get('/campus/user', student_info.findAll);

    // Retrieve a single student infromation with userId
    app.get('/campus/user/:userId', student_info.findOne);

    // Update student information wit userId
    app.put('/campus/user/:userId', student_info.update);

    // Delete a Note with productId
    app.delete('/campus/user/:userId', student_info.delete);
}