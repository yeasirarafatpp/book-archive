// Load The API
const loadBook = () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs));
}
// Display Book
const displayBook = books => {
    books.forEach(book => {
        console.log(book);
        const booksCard = document.getElementById('books');
        // booksCard.textContent = '';
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                        </div>
                    </div>
            `;
        booksCard.appendChild(div);
    });
}
