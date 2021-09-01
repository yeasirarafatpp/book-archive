// Load The API                    
const loadBook = async () => {
    loadCounter();
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayBook(data.docs);
}
// Display Book
const displayBook = books => {
    const booksCard = document.getElementById('books');
    booksCard.textContent = '';
    if (books.length === 0 || !books) {
        const notFound = document.getElementById('not-found');
        notFound.style.display = 'block';
    }
    else {
        books.forEach(book => {
            // console.log(book);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p>By ${book.author_name}</p>
                            <p>First Publish ${book.first_publish_year}</p>
                            <p>Publisher: ${book.publisher}</p>
                        </div>
                    </div>
            `;
            booksCard.appendChild(div);
            const notFound = document.getElementById('not-found');
            notFound.style.display = 'none';
        });
    }

}
// Count for show counter
const loadCounter = async () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const counter = document.getElementById('counter');
    const p = document.createElement('p');
    p.classList.add('container', 'text-info');
    p.innerText = `Search Result ${data.numFound}`;
    counter.appendChild(p);
    displayBook(data.docs);
}