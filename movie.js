const apiKey = '6e0fdb96';  // Replace with your actual API key
const movieResultsSection = document.getElementById('movieResults');
const loadingMessage = document.getElementById('loadingMessage');

async function searchMovies() {
    const query = document.getElementById('movieQuery').value;
    if (!query) {
        alert("Please enter a movie name!");
        return;
    }

    // Show loading message
    loadingMessage.classList.remove('hidden');
    movieResultsSection.innerHTML = '';

    try {
        // Fetch data from the movie API
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        // Hide loading message immediately after response is received
        loadingMessage.classList.add('hidden');

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            movieResultsSection.innerHTML = '<p>No movies found. Please try another search.</p>';
        }
    } catch (error) {
        loadingMessage.classList.add('hidden');
        alert("An error occurred. Please try again.");
        console.error(error);  // Log error for debugging
    }
}

function displayMovies(movies) {
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        movieCard.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/250x350'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <!-- Download Button -->
            <a href="https://www.imdb.com/title/${movie.imdbID}/" class="download-btn" target="_blank" title="Download from IMDb or other authorized platforms">Download</a>
        `;

        movieResultsSection.appendChild(movieCard);
    });
}
let currentPage = 1;
const resultsPerPage = 10;

async function searchMovies() {
    const query = document.getElementById('movieQuery').value;
    if (!query) {
        alert("Please enter a movie name!");
        return;
    }

    // Show loading message
    loadingMessage.classList.remove('hidden');
    movieResultsSection.innerHTML = '';

    try {
        // Fetch data from the movie API with pagination
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${currentPage}&apikey=${apiKey}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        loadingMessage.classList.add('hidden');
        
        if (data.Response === "True") {
            displayMovies(data.Search);
            updatePagination(data.totalResults);
        } else {
            movieResultsSection.innerHTML = '<p>No movies found. Please try another search.</p>';
            document.getElementById('pagination').style.display = 'none';  // Hide pagination if no results
        }
    } catch (error) {
        loadingMessage.classList.add('hidden');
        alert("An error occurred. Please try again.");
    }
}

function displayMovies(movies) {
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        movieCard.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/250x350'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <!-- Download Button -->
            <a href="https://www.imdb.com/title/${movie.imdbID}/" class="download-btn" target="_blank" title="Download from IMDb or other authorized platforms">Download</a>
        `;

        movieResultsSection.appendChild(movieCard);
    });
}

function updatePagination(totalResults) {
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    document.getElementById('pagination').style.display = 'block';

    if (currentPage <= 1) {
        document.getElementById('prevPage').disabled = true;
    } else {
        document.getElementById('prevPage').disabled = false;
    }

    if (currentPage >= totalPages) {
        document.getElementById('nextPage').disabled = true;
    } else {
        document.getElementById('nextPage').disabled = false;
    }
}

function changePage(direction) {
    currentPage += direction;
    searchMovies();
}

