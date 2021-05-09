const express = require('express');
const router = express.Router();
const MovieModel = require("./../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs'));

router.get("/movies", (req, res, next) => {
    MovieModel.find().then((dbResult) => {
        const viewData = {
            title: "Movies",
            movies : dbResult,
        };
        res.render("movies.hbs", viewData);
    })
    .catch((dbErr) => next(dbErr));
});

router.get("/movies/:id", function (req, res, next) {
    MovieModel.findById(req.params.id)
      .then((dbResult) => {
        res.render("movie.hbs", {
          title: dbResult.title,
          movie: dbResult,
        });
      })
      .catch((dbErr) => next(dbErr));
  });
  
  router.get("/movies/delete/:id", function (req, res, next) {
    MovieModel.findByIdAndDelete(req.params.id)
      .then((dbResult) => {
        res.redirect("/movies");
      })
      .catch((dbErr) => next(dbErr));
  });

    

// router.get('/movies/:id', (req, res, next) => {
//     res.render('movieDetails.hbs') });

// router.get('/movies/delete/:id', (req, res, next) => {
//     res.redirect('/movies') });


module.exports = router;
