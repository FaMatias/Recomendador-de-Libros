document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommend-button');
    const recommendationsContainer = document.getElementById('recommendations');
    let allBooks = [];

    // Carga los datos de los libros desde el archivo JSON
    fetch('books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            allBooks = data;
        })
        .catch(error => {
            console.error('Error al cargar los libros:', error);
            recommendationsContainer.innerHTML = '<p class="no-books">No se pudieron cargar los libros. Por favor, intenta de nuevo más tarde.</p>';
        });

    recommendButton.addEventListener('click', () => {
        const selectedGenres = getSelectedGenres();
        
        if (selectedGenres.length === 0) {
            alert('Por favor, selecciona al menos un género.');
            return;
        }

        const recommendedBooks = filterBooksByGenres(selectedGenres);
        displayBooks(recommendedBooks);
    });

    /**
     * Obtiene los valores de los checkboxes seleccionados.
     * @returns {string[]} Un array con los géneros seleccionados.
     */
    function getSelectedGenres() {
        const checkboxes = document.querySelectorAll('input[name="genre"]:checked');
        return Array.from(checkboxes).map(checkbox => checkbox.value);
    }

    /**
     * Filtra la lista de libros basándose en los géneros seleccionados.
     * @param {string[]} genres - Los géneros a buscar.
     * @returns {object[]} Un array de objetos de libros que coinciden.
     */
    function filterBooksByGenres(genres) {
        return allBooks.filter(book => genres.includes(book.genero));
    }

    /**
     * Muestra los libros recomendados en la página.
     * @param {object[]} books - El array de libros a mostrar.
     */
    function displayBooks(books) {
        recommendationsContainer.innerHTML = ''; // Limpia el contenedor

        if (books.length === 0) {
            recommendationsContainer.innerHTML = '<p class="no-books">Lo sentimos, no tenemos libros para estos géneros.</p>';
            return;
        }

        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <h3>${book.titulo}</h3>
                <p><strong>Autor:</strong> ${book.autor}</p>
                <p>${book.sinopsis}</p>
            `;
            recommendationsContainer.appendChild(card);
        });
    }
});
