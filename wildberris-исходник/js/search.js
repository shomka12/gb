const btnSearch = document.querySelector('.btn-outline-secondary');
const inputSearch = document.querySelector('.search-block > .form-control');

btnSearch.addEventListener('click',  function () {
    console.log(inputSearch.value);
});


