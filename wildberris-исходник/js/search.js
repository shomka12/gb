const search = function () {
    const btnSearch = document.querySelector('.search-block > button');
    const inputSearch = document.querySelector('.search-block > input');

    // inputSearch.addEventListener('input', (event) => {
    //     console.log(event.target.value)
// })

    btnSearch.addEventListener('click',  () => {
        console.log(inputSearch.value);
    });
}

search()


