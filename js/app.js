// Load The API By Function                  
const loadBook = async () => {
    loadCounter();
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
        const notFound = document.getElementById('not-found');
        notFound.style.display = 'none';
        books.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                    <div onclick="loadImage(${book.cover_i});" class="card">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p>By ${book.author_name}</p>
                            <p>First Publish ${book.first_publish_year}</p>
                            <p>Publisher: ${book.publisher}</p>
                        </div>
                    </div>
            `;
            booksCard.appendChild(div);
        });
    }
}
// Count for show counter
const loadCounter = async () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    const counter = document.getElementById('counter');
    const p = document.createElement('p');
    p.classList.add('container', 'text-info');
    p.innerText = `Search Result ${data.numFound}`;
    counter.appendChild(p);
    displayBook(data.docs);
}
// Show Image on click Div
const loadImage = async (imageId) => {
    const url = `https://covers.openlibrary.org/b/id/${imageId}-M.jpg`;
    const showImage = document.getElementById('image');
    showImage.innerHTML = `
    <h3>Book Cover Image</h3>
    <img src="${url}">`;
}