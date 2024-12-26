const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function fetchResults(query) {
    results.textContent = `Searching for "${query}"...`;
    setTimeout(() => {
        results.textContent = `Results for "${query}"`;
    }, 500); 
}

const debouncedSearch = debounce((query) => {
    if (query) {
        fetchResults(query);
    } else {
        results.textContent = "Start typing to see results...";
    }
}, 300);

searchInput.addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
});
