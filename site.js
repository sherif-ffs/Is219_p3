
const vue_app = new Vue({
      el: '#vue_app',
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data: {
            movies: [],
            title: 'IMDB + Sherif\'s Favorite Movies',
            owner: 'Sherif Elmetwally',
            github: 'https://github.com/sherif-ffs',

      },
      methods: {
        debug (event) {
          console.log(movies)
        }
      },
      methods: {
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
              return movies.slice(middle);
            },
            leftSideMovies: function (movies) {
              let middle = movies.length / 2;
              return movies.slice(0,middle);
            }
      }
})
