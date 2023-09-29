// JavaScript to handle the search bar
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const searchInput = searchBar.querySelector("input[type='text']");
    const searchButton = searchBar.querySelector("button[type='submit']");

    // Add an event listener to the search button
    searchButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get the user's search query
        const query = searchInput.value.trim();

        // Perform your search or redirection here
        // For example, you can redirect to a search results page with the query
        if (query !== "") {
            window.location.href = `/search.html?query=${encodeURIComponent(query)}`;
        }
    });
});
