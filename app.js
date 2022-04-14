window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        al = document.querySelector('.al'),
        year = document.querySelector('#year'),
        btn = document.querySelector('.btn'),
        booklist = document.querySelector('#book-list');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        // basic validation
        if (title.value == '' && author.value == '' && year.value == '') {
            // alert('Please input your information.');
            al.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
				Please enter your information
				<button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="close"></button>
			</div>
            `
        } else {
            const newRow = document.createElement('tr');
            // Creating new title;
            const newTitle = document.createElement('th');
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);
            // Creating new author;
            const newAuthor = document.createElement('th');
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);
            // Creating new Year;
            const DataYear = document.createElement('th');
            DataYear.innerHTML = year.value;
            newRow.appendChild(DataYear);
            // Displaying in UI;
            booklist.appendChild(newRow);
            title.value = '';
            author.value = '';
            year.value = '';
        };
    });
});