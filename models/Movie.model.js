const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Iteration 1

const movieSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    director: String,
    stars: [String],
    image: {
        type: String,
        default: '/public/images/cinema.jpg',
    },
    description: String,
    showtimes: [String],
});

const MovieModel = mongoose.model("movies", movieSchema);

module.exports = MovieModel;