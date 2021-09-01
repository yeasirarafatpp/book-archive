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
                            <h5 class="card-title">${book.title}</h5>
                            <p>By ${book.author_name}</p>
                            <p>First Publish ${book.publish_date}</p>
                            <p>Publisher: ${book.publisher}</p>
                        </div>
                    </div>
            `;
        booksCard.appendChild(div);
    });
}
