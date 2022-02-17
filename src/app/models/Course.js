const mongoose = require('mongoose');
const mongooseSlugPlugin = require('mongoose-slug-plugin');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema({
    _id: { type: Number,},
    name: { type: String, maxLength: 255, required: true },
    description: { type: String },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 255 },
}, {
    _id: false,
    timestamps: true,
});

//Add Plugin
Course.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    deletedAt: true, 
    overrideMethods: 'all', 
});

module.exports = mongoose.model('Course', Course);
