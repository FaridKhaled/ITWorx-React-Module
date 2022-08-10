async function fetchMovies(page) {

    var link = 'https://api.themoviedb.org/3/movie/popular?api_key=88a056816176eb4b457314901d9457e0&language=en-US&page=' + page;

    var moviesToFetch =  await fetch(link)
        .then((response) => response.json()
    );

    console.log(moviesToFetch);

    return moviesToFetch;

}

var movies = await fetchMovies(1);

// STATS MODULE
var statsModule = {

    currentPage: movies.page,
    numberOfMovies: movies.results.length,
    topRated: (function getTopRated() {
        
        var topRatedMovie = movies.results[0];

        for (var i = 1; i < movies.results.length; i++) {

            if (movies.results[i].vote_average > topRatedMovie.vote_average) {
                
                topRatedMovie = movies.results[i];

            }

        }

        return topRatedMovie;

    })(),
    
    topRating: function () {
        
        return this.topRated.vote_average;

    },

    init: function () {
        
        this.cacheElements();
        this.render();
        eventsMediator.on('moviesChanged', this.render.bind(this));

    },

    cacheElements: function () {
        
        this.currentPageTemplate = document.querySelector('#currPage');
        this.numberOfMoviesTemplate = document.querySelector('#numOfMovies');
        this.topRatedTemplate = document.querySelector('#topRated');
        this.topRatingTemplate = document.querySelector('#topRating');

    },

    render: function () {

        this.currentPage = movies.page;
        this.numberOfMovies = movies.results.length;
        this.topRated = (function getTopRated() {
        
            var topRatedMovie = movies.results[0];

            for (var i = 1; i < movies.results.length; i++) {

                if (movies.results[i].vote_average > topRatedMovie.vote_average) {
                
                    topRatedMovie = movies.results[i];

                }

            }

            return topRatedMovie;

        })();
        this.topRating = function () {
        
            return this.topRated.vote_average;

        };
        
        this.currentPageTemplate.innerHTML = 'Current Page: ' + this.currentPage;
        this.numberOfMoviesTemplate.innerHTML = 'Number of movies:  ' + this.numberOfMovies;
        this.topRatedTemplate.innerHTML = 'Top rated movie:  ' + this.topRated.title;
        this.topRatingTemplate.innerHTML = 'Rating:  ' + this.topRating();

    }

};

// MOVIES MODULE
var moviesModule = {

    init: function () {
      
        this.cacheElements();
        this.render();
        eventsMediator.on('moviesChanged', this.render.bind(this));
        
    },

    cacheElements: function () {
        
        this.moviesDisplay = document.querySelector('#moviesDisplay');

        this.column1 = document.querySelector('#col1');
        this.column2 = document.querySelector('#col2');
        this.column3 = document.querySelector('#col3');
        this.column4 = document.querySelector('#col4');

        this.loadingSpinner = document.querySelector('#spinner');

        this.cardTemplate = `{{#results}}
                <div class="card my-5" data-id="{{id}}">

                    <img src="https://image.tmdb.org/t/p/w500{{poster_path}}" class="card-img-top">

                    <div class="card-body text-center">

                        <h5 class="card-text"> {{title}} </h5>

                        <p clas="card-text"> {{vote_average}} </p>

                    </div>
                </div>
                {{/results}}
        `;

        this.modal = new bootstrap.Modal(document.querySelector('#exampleModal'));
        this.modalBody = document.querySelector('#modalBody');
        
    },

    render: function () {

        this.loadingSpinner.style.visibility = 'visible';

        this.moviesDisplay.style.display = 'none';

        this.column1.innerHTML = Mustache.render(this.cardTemplate, { results: movies.results.slice(0, 5) } );
        this.column2.innerHTML = Mustache.render(this.cardTemplate, { results: movies.results.slice(5, 10) } );
        this.column3.innerHTML = Mustache.render(this.cardTemplate, { results: movies.results.slice(10, 15) } );
        this.column4.innerHTML = Mustache.render(this.cardTemplate, { results: movies.results.slice(15) });
        
        this.loadingSpinner.style.visibility = 'hidden';

        this.moviesDisplay.style.display = 'block';

        var cardsInDocument = Array.from(document.getElementsByClassName('card')).forEach(function (element) {

            element.addEventListener('click', function () {
               
                var currentMovie = movies.results.find(elem => elem.id == (element.dataset.id));

                var modalBodyTemplate =
                    `<img src="https://image.tmdb.org/t/p/w500${currentMovie.poster_path}">
                
                    <div class="container d-flex flex-column justify-content-around">

                        <h2> ${currentMovie.title} </h2>

                        <h3> IMDB Rating: ${currentMovie.vote_average}/10 (${currentMovie.vote_count} Votes) </h3>

                        <p> ${currentMovie.overview} </p>

                    </div>
            
                `;

                this.modalBody.innerHTML = modalBodyTemplate;
                this.modal.show();
                
            }.bind(this));
            
        }.bind(this));

    }

}

// PAGINATION MODULE
var paginationModule = {

    currentPage: 1,

    init: function () {
        
        this.cacheElements();
        this.render();
        this.bindEvents();
        eventsMediator.on('moviesChanged', this.render.bind(this));
        eventsMediator.on('moviesChanged', this.bindEvents.bind(this));

    },
    
    cacheElements: function () {
      
        this.paginationControl = document.querySelector('#paginationControl');
        
    },

    render: function (currPage) {
        
        var template =
            `<li class="page-item" id="previousFive">

                    <a class="page-link"> &lt;&lt; 5 </a>

                </li>

                <li class="page-item" id="previous">

                    <a class="page-link"> Previous </a>

                </li>

                <li class="page-item disabled">

                    <a class="page-link"> {{currentPage}} </a>

                </li>

                <li class="page-item" id="currentPagePlusOne">

                    <a class="page-link"> {{currentPagePlusOne}} </a>

                </li>

                <li class="page-item" id="currentPagePlusTwo">

                    <a class="page-link"> {{currentPagePlusTwo}} </a>

                </li>

                <li class="page-item" id="next">

                    <a class="page-link"> Next </a>

                </li>

                <li class="page-item" id="currentPagePlusFive">

                    <a class="page-link"> &gt;&gt; 5 </a>

                </li>
        `;
        
        var rendered = Mustache.render(template, {
            currentPage: this.currentPage,
            currentPagePlusOne: function () {
                return (this.currentPage + 1);
            },
            currentPagePlusTwo: function () {
                return (this.currentPage + 2);
            }
            },
            
        );

        this.paginationControl.innerHTML = rendered;

        if (this.currentPage === 1) {
            
            document.querySelector('#previousFive').classList.add('disabled');
            document.querySelector('#previous').classList.add('disabled');


        }
        else if (this.currentPage <= 5) {
            
            document.querySelector('#previousFive').classList.add('disabled');

        }

    },

    bindEvents: function () {
      
        document.querySelector('#previousFive').addEventListener('click', this.goToPage.bind(this, (this.currentPage - 5)));
        document.querySelector('#previous').addEventListener('click', this.goToPage.bind(this, (this.currentPage - 1)));
        document.querySelector('#currentPagePlusOne').addEventListener('click', this.goToPage.bind(this, (this.currentPage + 1)));
        document.querySelector('#currentPagePlusTwo').addEventListener('click', this.goToPage.bind(this, (this.currentPage + 2)));
        document.querySelector('#next').addEventListener('click', this.goToPage.bind(this, (this.currentPage + 1)));
        document.querySelector('#currentPagePlusFive').addEventListener('click', this.goToPage.bind(this, (this.currentPage + 5)));

    },
    
    async goToPage(pageNumber) {

        this.currentPage = pageNumber;

        movies = await fetchMovies(this.currentPage);

        eventsMediator.emit('moviesChanged');

    }

}

// EVENTS MEDIATOR
var eventsMediator = {

    events: {},

    on: function (eventName, callbackFunction) {
        
        this.events[eventName] = this.events[eventName] ? this.events[eventName] : [];

        this.events[eventName].push(callbackFunction);

    },

    emit: function (eventName) {
        
        if (this.events[eventName]) {
            
            this.events[eventName].forEach(function (callbackFunction) {
                
                callbackFunction();

            });

        }

    }

}

statsModule.init();
moviesModule.init();
paginationModule.init();