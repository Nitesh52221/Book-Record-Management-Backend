const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            require: true,
        },
        genre: {
            type: String,
            require: true,
        },
        price: {
            type: String,
            required: true,
        },
        publisher: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

// Collections will have a name "books".
module.exports = mongoose.model("Book", bookSchema);