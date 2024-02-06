const content = [
    { title: "Page 1", url: "page1.html", content: "This is the content of page 1." },
    { title: "Page 2", url: "page2.html", content: "This is the content of page 2." },
    { title: "Page 3", url: "page3.html", content: "This is the content of page 3." }
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

function search(query) {
    const filteredResults = content.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
        const contentMatch = item.content.toLowerCase().includes(query.toLowerCase());
        return titleMatch || contentMatch;
    });

    displayResults(filteredResults);
}

function displayResults(results) {
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
        resultsContainer.innerHTML = '<li>No results found.</li>';
    } else {
        results.forEach(result => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = result.url;
            link.textContent = result.title;
            listItem.appendChild(link);
            resultsContainer.appendChild(listItem);
        });
    }
}

searchInput.addEventListener('input', function() {
    const query = this.value;
    search(query);
});