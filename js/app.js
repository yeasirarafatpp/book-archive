const loadBook = () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    // console.log(searchText);
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs[0]));
}

const displayBook = books => {
    console.log(books.author_name);
}
