/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/

const vue_app = new Vue({
      el: '#vue_app',
      // This automatically imports your movies.json file and puts it into
      // the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data: {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: 'IMDB + Sherif\'s Favorite Movies',
          //  movieTitle: // movies[i].title
            owner: 'Sherif Elmetwally',
            github: 'https://github.com/sherif-ffs',

      },
      // console log to debug
      methods: {
        debug (event) {
          console.log(movies)
        }
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            timeText: function (movie) {
                let time = movie.runtime;
                return Math.floor(time / 60) + 'h ' + time % 60 + 'm';
              },
            makeTextDate: function (movie) {
              let monthNames = [
              "January", "February", "March",
              "April", "May", "June",
              "July", "August", "September",
               "October", "November",
                "December"
              ];
              let day = movie.released[2];
              let monthIndex = movie.released[1];
              var year = movie.released[0];
              return monthNames[monthIndex-1] + ' ' + day + ', ' + year;
            },
            addLike: function (movie) {
              return movie.likes++;
            },
            addDislike: function (movie) {
              return movie.dislikes--;
            },
            posterClick: function (movie) {
              if (movie.posterindex == movie.posters.length - 1) {
                movie.posterindex = 0;
              }
              else {
                movie.posterindex++;
              }
            },
            rightSideMovies: function (movies) {
              let middle = movies.length / 2;
              return movies.slice(3);
            },
            leftSideMovies: function (movies) {
              return movies.slice(0,3);
            }

      }
})
