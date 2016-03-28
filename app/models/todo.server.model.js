'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

/**
 * Article Schema
 */
var TodoSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'Name cannot be blank'
    },
    place: {
        type: String,
        default: '',
        trim: true,
        required: 'Place cannot be blank'
    },
},{ versionKey: false });

mongoose.model('Todo', TodoSchema);
