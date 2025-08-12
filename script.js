document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const genreSelectorDropdown = document.getElementById('genre-selector-dropdown');
    const recommendButton = document.getElementById('recommend-button');
    const recommendationsContainer = document.getElementById('recommendations');

    let allBooks = [];

    // Función para cargar los libros del archivo JSON
    async function loadBooks() {
        try {
            const response = await fetch('books.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            allBooks = await response.json();
            createGenreCheckboxes();
        } catch (error) {
            console.error("No se pudo cargar el archivo de libros:", error);
            recommendationsContainer.innerHTML = '<p>Lo sentimos, no pudimos cargar las recomendaciones. Por favor, inténtalo de nuevo más tarde.</p>';
        }
    }

    // --- Lógica para cargar y procesar los géneros ---
    function createGenreCheckboxes() {
        const allGenres = [...new Set(allBooks.flatMap(book => book.genero.split('-')))];
        genreSelectorDropdown.innerHTML = '';
        allGenres.forEach(genre => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="genre" value="${genre}"> ${genre.charAt(0).toUpperCase() + genre.slice(1).replace('-', ' ')}`;
            genreSelectorDropdown.appendChild(label);
        });
    }

    // --- Lógica de eventos ---
    dropdownButton.addEventListener('click', () => {
        genreSelectorDropdown.classList.toggle('show');
    });

    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#dropdown-button') && !event.target.closest('.genre-selector-dropdown')) {
            genreSelectorDropdown.classList.remove('show');
        }
    });

    recommendButton.addEventListener('click', () => {
        const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(checkbox => checkbox.value);
        
        if (selectedGenres.length === 0) {
            recommendationsContainer.innerHTML = '<p>Por favor, selecciona al menos un género.</p>';
            return;
        }

        const filteredBooks = allBooks.filter(book => {
            const bookGenres = book.genero.split('-').filter(g => g);
            return selectedGenres.some(genre => bookGenres.includes(genre));
        });

        displayRecommendations(filteredBooks);
    });

    function displayRecommendations(books) {
        recommendationsContainer.innerHTML = '';
        if (books.length === 0) {
            recommendationsContainer.innerHTML = '<p>No se encontraron libros que coincidan con los géneros seleccionados.</p>';
            return;
        }

        const randomBooks = books.sort(() => 0.5 - Math.random()).slice(0, 5);
        
        randomBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <h3>${book.titulo}</h3>
                <p><strong>Autor:</strong> ${book.autor}</p>
                <p><strong>Género:</strong> ${book.genero.split('-').filter(g => g).map(g => g.charAt(0).toUpperCase() + g.slice(1).replace('-', ' ')).join(', ')}</p>
                <p>${book.sinopsis}</p>
            `;
            recommendationsContainer.appendChild(bookCard);
        });
    }

    // Cargar los libros al iniciar la página
    loadBooks();
});
