/* searchBook-onclick-Arrow-function*/

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
  
    /* clear--Input-Search-Field-Text-After-Search*/
  
    searchField.value = "";
  
    /* Dynamic-Fetch-URL*/
  
    const url = `http://openlibrary.org/search.json?q=${searchText}`
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const totalResult = document.getElementById('total-result');
        totalResult.innerText = `Showing Result : ${data.docs.length} of ${data.numFound}`;
        if (data.docs.length === 0) {
          totalResult.innerText = 'Sorry! No Result Found';
        }
  
        /* searcDisplay-Result-Function-call */
  
        searcDisplayhResult(data.docs);
      })
  
  }
  
  /* Book-Display-Result-By-Arrow-Function*/
  
  const searcDisplayhResult = (docs) => {
    const searchResult = document.getElementById('search-result');
  
    /* clear-Before-Search-Result-when-To-search*/
  
    searchResult.innerHTML = "";
    docs.forEach(book => {
      const div = document.createElement('div');
      div.classList.add('col');
  
      /* Creat-Dynamic-content-Card-Body*/
  
      div.innerHTML = `
          <div class="card m-5 mb-3 shadow">
              <div class ="card-body text-center">
              <img class = "border border-dark" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="..."></div>
              <div class="card-body">
                <h6 class="card-title fw-bold "> Book Name:  ${book.title}</h6>
                <p class="card-text"> Author Name:  ${book.author_name}</p>
                <p class="card-text"> Published Date:  ${Array.isArray(book.publish_date) ? book.publish_date[0] : ''}</p>
                <p class="card-text"> First Published Year:  ${book.first_publish_year}</p>
                <p class="card-text"> Published Year:  ${Array.isArray(book.publish_year) ? book.publish_year[0] : ''}</p>
                <p class="card-text"> Publisher:  ${Array.isArray(book.publisher) ? book.publisher[0] : ''}</p>
              </div>
            </div>
          `;
      searchResult.appendChild(div);
    });
  
  }
  