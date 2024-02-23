function fetchBookData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const outputContainer = document.getElementById('output');
            outputContainer.innerHTML = '';
            let row = document.createElement('div');
            row.classList.add('row');

            data.forEach((book, index) => {
                if (index % 3 === 0) {
                    row = document.createElement('div');
                    row.classList.add('row');
                }

                const bookElement = document.createElement('div');
                bookElement.classList.add('col-lg-4');
                bookElement.innerHTML = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4>${book.title}</h4>
                        <p>id: ${book.id}</p>
                        <p>User id: ${book.userId}</p>
                        <p>Published: ${book.completed}</p>
                    </div>
                </div>
                `;
                row.appendChild(bookElement);

                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    outputContainer.appendChild(row);
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('output').innerHTML = 'Error fetching book data';
        });
}

window.onload = fetchBookData;
