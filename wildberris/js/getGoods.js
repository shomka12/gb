const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link') 
    const getData = () => {
        fetch('https://test-1c072-default-rtdb.firebaseio.com/db.json')
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('goods', JSON.stringify(data))
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    });

    // localStorage.setItem('goods', JSON.stringify({name: 'All'}))
    // const goods = JSON.parse(localStorage.getItem('goods'))

    // localStorage.removeItem('goods')
    // console.log(localStorage)
}

getGoods()