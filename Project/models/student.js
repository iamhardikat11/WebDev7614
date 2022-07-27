const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    FoodItem: {
        type: String,
    },
    Meal: {
        type: String,
        // required: [true, 'Roll field is required']
    },
    User: {
        type: Boolean,
        deafult: true
    }
});


const Student = mongoose.model('student',StudentSchema);

module.exports = Student;