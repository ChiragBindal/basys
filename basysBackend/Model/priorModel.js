const mongoose = require('mongoose');

const priorSchema = new mongoose.Schema({
    status : {
        type : String,
        required : [true , 'A prior must have status']
    },
    prior_id : {
        type : Number,
        required : [true , 'A prior must have id']
    },
    dat : {
        type : String,
        required : [true , 'A prior must have date']
    },
    services : {
        type : Array,
        required : [true , 'A prior must have date']
    },
    requested : String

});

const Prior = mongoose.model('Prior' , priorSchema);

module.exports = Prior;