(async function () {
    const response = await fetch("./data.json");
    const movies = await response.json();

    const inputElement = document.getElementById("searchInput");
    const genreElement = document.getElementById("genre");
    const yearElement = document.getElementById("year");
    const langElement = document.getElementById("language");
    const ratElement = document.getElementById("rating");
    const btnElement = document.getElementById("searchButton");

    function search() {
        const query = inputElement.value;
        const genre = genreElement.value;
        const year = yearElement.value;
        const lang = langElement.value;
        const rate = ratElement.value;

        const results = movies.filter(function (movie) {
            let matchYear = true;
            if (year) {
                matchYear = new Date(year).getFullYear() === new Date(movie.release_date).getFullYear();
            }

            let matchRating = true;
            if (rate) {
                matchRating = parseFloat(movie.vote_average) >= parseFloat(rate);
            }

            return (movie.title.toLowerCase().includes(query) &&
                movie.genres.toString().includes(genre) &&
                matchYear &&
                matchRating &&
                movie.original_language.includes(lang) &&
                movie.id &&
                movie.poster_path
            )
        }).slice(0, 50);
        searchResults(results)
    }

    // listElements
    const serial = document.getElementById("serial_num");
    const movRank = document.getElementById("rank_num");
    const movList = document.getElementById("mov_list");
    const movYear = document.getElementById("mov_yr");
    const movRate = document.getElementById("mov_rt");

    function searchResults(results) {
        serial.innerHTML = "";
        movList.innerHTML = "";
        movRank.innerHTML = "";
        movYear.innerHTML = "";
        movRate.innerHTML = "";
        results.forEach(function (movie, i) {
            const serialNum = document.createElement("li");
            const liRank = document.createElement("li")
            const liName = document.createElement("li");
            const liYear = document.createElement("li");
            const liRate = document.createElement("li");

            serialNum.innerHTML = `
                <span>${i + 1}</span>
            `;

            liRank.innerHTML = `
                <span>
                    ${movie.id}
                </span>
            `;
            liName.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w45${movie.poster_path}" alt="" width="50px" height="80px">
                </span>
                <span>
                    ${movie.title}
                </span>    
            </li>
            `;
            liYear.innerHTML = `
                <span>
                    ${movie.release_date}
                </span>    
            `;
            liRate.innerHTML = `
                <span>
                    ${movie.vote_average}
                </span> 
            `;
            serial.appendChild(serialNum)
            movRank.appendChild(liRank);
            movList.appendChild(liName);
            movYear.appendChild(liYear);
            movRate.appendChild(liRate);
        });
    }
    btnElement.addEventListener("click", search);
})();