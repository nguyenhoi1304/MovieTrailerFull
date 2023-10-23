const express = require("express");

const MovieController = require("../controllers/movie");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", isAuth.getAuth, MovieController.getAllMovie);

router.get("/trending", isAuth.getAuth, MovieController.getAllMovieTrending);
router.get("/trending/:pageId", MovieController.getAllMovieTrending);

router.get("/top-rate", isAuth.getAuth, MovieController.getAllMovieRate);
router.get("/top-rate/:pageId", MovieController.getAllMovieRate);

router.get("/discover", isAuth.getAuth, MovieController.getAllMovieDiscover);

router.get("/discover/:GenreId", MovieController.getAllMovieDiscover);
router.get("/discover/:GenreId/:pageId", MovieController.getAllMovieDiscover);

router.post("/video", isAuth.getAuth, MovieController.postTrailer);
router.get("/video", isAuth.getAuth, MovieController.postTrailer);

router.get("/search", isAuth.getAuth, MovieController.postSearch);
router.post("/search", isAuth.getAuth, MovieController.postSearch);
router.post("/search/:pageId", MovieController.postSearch);

module.exports = router;
