const Campus = require('./campus.model.js');

// Create new user
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill the form correctlly"
        });
    }

    // Create user information
    const campus = new Campus({
        name: req.body.name, 
        stuent_id: req.body.stuent_id,
        session: req.body.session,
        department: req.body.department
    });

    // Save user inforamtion in the database
    campus.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the student information."
        });
    });
};

// Retrieve all user data from the database.
exports.findAll = (req, res) => {
    Campus.find()
    .then(student_info => {
        res.send(student_info);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving data."
        });
    });
};

// Find a single user information from the database
exports.findOne = (req, res) => {
    Campus.findById(req.params.usertId)
    .then(campus=> {
        if(!campus) {
            return res.status(404).send({
                message: "Information not found with id " + req.params.userId
            });            
        }
        res.send(campus);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Information not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving information with id " + req.params.userId
        });
    });
};

//update data
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Fill the form correctly"
        });
    }

    // Find and update information with the request body
    Campus.findByIdAndUpdate(req.params.userId, {
        name: req.body.name || "Empty name", 
        student_id: req.body.student_id,
        session: req.body.session,
        department: req.body.department
    }, {new: true})
    .then(campus => {
        if(!campus) {
            return res.status(404).send({
                message: "student information not found with id " + req.params.userId
            });
        }
        res.send(campus);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "information not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.userId
        });
    });
};

// Delete user data with the specified userId in the request
exports.delete = (req, res) => {
    Campus.findByIdAndRemove(req.params.userId)
    .then(campus => {
        if(!campus) {
            return res.status(404).send({
                message: "Student information not found with id " + req.params.userId
            });
        }
        res.send({message: "Student information deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Student information not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete data with id " + req.params.userId
        });
    });
};