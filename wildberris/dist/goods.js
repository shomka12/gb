(()=>{"use strict";var __webpack_modules__={220:()=>{eval('\n;// CONCATENATED MODULE: ./src/modules/search.js\nconst search = function () {\r\n    const btnSearch = document.querySelector(\'.search-block > button\');\r\n    const inputSearch = document.querySelector(\'.search-block > input\');\r\n\r\n    const renderGoods = (goods) => {\r\n        const goodsContainer = document.querySelector(\'.long-goods-list\')\r\n\r\n        goodsContainer.innerHTML =""\r\n\r\n        goods.forEach(good => {\r\n            const goodBlock = document.createElement(\'div\')\r\n            goodBlock.classList.add(\'col-lg-3\')\r\n            goodBlock.classList.add(\'col-sm-6\')\r\n\r\n            goodBlock.innerHTML = `\r\n                <div class="goods-card">\r\n                    <span class="label ${good.label ? null : \'d-none\'}">${good.label}</span>\r\n                    <img src="${\'db/\' + good.img}" alt=${good.name} class="goods-image">\r\n                    <h3 class="goods-title">${good.name}</h3>                    \r\n                    <p class="goods-description">${good.description}</p>                    \r\n                    <button class="button goods-card-btn add-to-cart" data-id="${good.id}">\r\n                        <span class="button-price">$${good.price}</span>\r\n                    </button>\r\n                </div>\r\n            `\r\n            goodsContainer.append(goodBlock)\r\n        })\r\n    }\r\n    const getData = (value) => {\r\n        fetch(\'https://test-1c072-default-rtdb.firebaseio.com/db.json\')\r\n        .then((res) => res.json())\r\n        .then((data) => {\r\n\r\n            const array = data.filter(good =>\r\n              good.name.toLowerCase().includes(value.toLowerCase())\r\n            );\r\n            \r\n            localStorage.setItem(\'goods\', JSON.stringify(array))\r\n\r\n            if (window.location.pathname !== "/wildberris/goods.html") {\r\n                window.location.href = \'/wildberris/goods.html\'\r\n            } else {\r\n                renderGoods(array)\r\n            }\r\n            \r\n            })\r\n    }\r\n    \r\n\r\n    btnSearch.addEventListener(\'click\',  () => {\r\n        getData(inputSearch.value)\r\n    });\r\n}\r\n\r\nsearch()\r\n\r\n\r\n\n;// CONCATENATED MODULE: ./src/modules/cart.js\nconst cart = function () {\r\n    const cartBtn = document.querySelector(".button-cart"); // Кнопка для активации модального окна\r\n    const cart = document.getElementById("modal-cart"); // Модальное окно\r\n    const closebtn = cart.querySelector(".modal-close"); // Кнопака закрытия модального окна\r\n    const goodsContainer = document.querySelector(".long-goods-list"); // Окно с товаром\r\n    const cartTable = document.querySelector(".cart-table__goods"); // Окно корзины\r\n    const modalform = document.querySelector(".modal-form"); // Форма в модальном окне\r\n    const totalPriceEl = document.querySelector(".card-table__total"); // Сумма все корзины\r\n  \r\n    const formInputName = document.querySelector(\'[name="nameCustomer"]\'); // input имени из модальной формы\r\n    const formInputPhone = document.querySelector("[name=\'phoneCustomer\']"); // input телефона из модальной формы\r\n  \r\n    // функция удвления товара из корзины\r\n    const deleteCartItem = (id) => {\r\n      const cart = JSON.parse(localStorage.getItem("cart"));\r\n  \r\n      const newCart = cart.filter((good) => {\r\n        return good.id !== id;\r\n      });\r\n  \r\n      localStorage.setItem("cart", JSON.stringify(newCart));\r\n      renderCartGoods(JSON.parse(localStorage.getItem("cart")));\r\n    };\r\n  \r\n    // Функция увеличения колличества товара в корзине\r\n    const plusCartItem = (id) => {\r\n      const cart = JSON.parse(localStorage.getItem("cart"));\r\n  \r\n      const newCart = cart.map((good) => {\r\n        if (good.id === id) {\r\n          good.count++;\r\n        }\r\n        return good;\r\n      });\r\n  \r\n      localStorage.setItem("cart", JSON.stringify(newCart));\r\n      renderCartGoods(JSON.parse(localStorage.getItem("cart")));\r\n    };\r\n  \r\n    // Функция уменьшения колличества товара в корзине\r\n    const minusCartItem = (id) => {\r\n      const cart = JSON.parse(localStorage.getItem("cart"));\r\n  \r\n      const newCart = cart.map((good) => {\r\n        if (good.id === id) {\r\n          if (good.count > 0) {\r\n            good.count--;\r\n          }\r\n        }\r\n        return good;\r\n      });\r\n  \r\n      localStorage.setItem("cart", JSON.stringify(newCart));\r\n      renderCartGoods(JSON.parse(localStorage.getItem("cart")));\r\n    };\r\n  \r\n    // Сохранения товара в localStorage\r\n    const addToCart = (id) => {\r\n      const goods = JSON.parse(localStorage.getItem("goods")); // База с товарами\r\n      const clickedGood = goods.find((good) => good.id === id); // id товара\r\n      // localStorage корзины\r\n      const cart = localStorage.getItem("cart")\r\n        ? JSON.parse(localStorage.getItem("cart"))\r\n        : [];\r\n  \r\n      // Увеличеть количество товара или добавления его в корзину\r\n      if (cart.some((good) => good.id === clickedGood.id)) {\r\n        cart.map((good) => {\r\n          if (good.id === clickedGood.id) {\r\n            good.count++;\r\n          }\r\n          return good;\r\n        });\r\n      } else {\r\n        clickedGood.count = 1;\r\n        cart.push(clickedGood);\r\n      }\r\n  \r\n      // Готовая база товара в корзине\r\n      localStorage.setItem("cart", JSON.stringify(cart));\r\n    };\r\n  \r\n    // Отрисовка товара в корзине\r\n    const renderCartGoods = (goods) => {\r\n      cartTable.innerHTML = ``;\r\n  \r\n      goods.forEach((good) => {\r\n        const tr = document.createElement("tr");\r\n        tr.innerHTML = `\r\n                          <td>${good.name}</td>\r\n                          <td>${good.price}$</td>\r\n                          <td><button class="cart-btn-minus"">-</button></td>\r\n                          <td>${good.count}</td>\r\n                          <td><button class=" cart-btn-plus"">+</button></td>\r\n                          <td data-totalPrice="">${+good.price * +good.count}$</td>\r\n                          <td><button class="cart-btn-delete"">x</button></td>\r\n              `;\r\n        cartTable.append(tr);\r\n  \r\n        // Оживляем кнопки корзины\r\n        tr.addEventListener("click", (event) => {\r\n          if (event.target.classList.contains("cart-btn-minus")) {\r\n            minusCartItem(good.id);\r\n          } else if (event.target.classList.contains("cart-btn-plus")) {\r\n            plusCartItem(good.id);\r\n          } else if (event.target.classList.contains("cart-btn-delete")) {\r\n            deleteCartItem(good.id);\r\n          }\r\n        });\r\n      });\r\n      // Функция посчета суммы корзины\r\n      let totalPrice = 0;\r\n      goods.forEach((item) => {\r\n        const priceEl = item.price * item.count;\r\n        console.log(priceEl);\r\n        totalPrice += priceEl;\r\n        console.log(totalPrice);\r\n      });\r\n      totalPriceEl.innerText = totalPrice + "$";\r\n    };\r\n  \r\n    const sendForm = (nameInput, phoneInput) => {\r\n      const cartArray = localStorage.getItem("cart")\r\n        ? JSON.parse(localStorage.getItem("cart"))\r\n        : [];\r\n  \r\n      fetch("https://jsonplaceholder.typicode.com/posts", {\r\n        method: "POST",\r\n        body: JSON.stringify({\r\n          cart: cartArray,\r\n          name: nameInput,\r\n          phone: phoneInput,\r\n        }),\r\n      }).then(() => {\r\n        formInputName.value = "";\r\n        formInputPhone.value = "";\r\n        localStorage.removeItem("cart");\r\n        cart.style.display = "";\r\n      });\r\n    };\r\n  \r\n    modalform.addEventListener("submit", (e) => {\r\n      e.preventDefault();\r\n  \r\n      const nameInput = formInputName.value;\r\n      const phoneInput = formInputPhone.value;\r\n  \r\n      sendForm(nameInput, phoneInput);\r\n    });\r\n  \r\n    // Функция вызова модального окна\r\n    cartBtn.addEventListener("click", () => {\r\n      const cartArray = localStorage.getItem("cart")\r\n        ? JSON.parse(localStorage.getItem("cart"))\r\n        : [];\r\n  \r\n      renderCartGoods(cartArray);\r\n  \r\n      cart.style.display = "flex";\r\n    });\r\n  \r\n    // Функция закрытия модальног окна\r\n    closebtn.addEventListener("click", () => {\r\n      cart.style.display = "";\r\n    });\r\n  \r\n    // Функция закрытия окна по нажатию вне его\r\n    cart.addEventListener("click", (e) => {\r\n      if (!e.target.closest(".modal") && e.target.classList.contains("overlay")) {\r\n        cart.style.display = "";\r\n      }\r\n    });\r\n  \r\n    // Функция закрытия окна при нажатии на Escape\r\n    window.addEventListener("keydown", (e) => {\r\n      if (e.key === "Escape") {\r\n        cart.style.display = "";\r\n      }\r\n    });\r\n  \r\n    // Функция добавления товара в корзину при нажатии на кнопку с ценой\r\n    if (goodsContainer) {\r\n      goodsContainer.addEventListener("click", (event) => {\r\n        if (event.target.closest(".add-to-cart")) {\r\n          const buttonToCart = event.target.closest(".add-to-cart");\r\n          const goodId = buttonToCart.dataset.id;\r\n  \r\n          addToCart(goodId);\r\n        }\r\n      });\r\n    }\r\n  };\r\n  \n;// CONCATENATED MODULE: ./src/modules/getGoods.js\nconst getGoods = () => {\r\n    const links = document.querySelectorAll(\'.navigation-link\') \r\n    const more = document.querySelector(\'.more\')\r\n\r\n    const renderGoods = (goods) => {\r\n        const goodsContainer = document.querySelector(\'.long-goods-list\')\r\n\r\n        goodsContainer.innerHTML =""\r\n\r\n        goods.forEach(good => {\r\n            const goodBlock = document.createElement(\'div\')\r\n            goodBlock.classList.add(\'col-lg-3\')\r\n            goodBlock.classList.add(\'col-sm-6\')\r\n\r\n            goodBlock.innerHTML = `\r\n                <div class="goods-card">\r\n                    <span class="label ${good.label ? null : \'d-none\'}">${good.label}</span>\r\n                    <img src="${\'db/\' + good.img}" alt=${good.name} class="goods-image">\r\n                    <h3 class="goods-title">${good.name}</h3>                    \r\n                    <p class="goods-description">${good.description}</p>                    \r\n                    <button class="button goods-card-btn add-to-cart" data-id="${good.id}">\r\n                        <span class="button-price">$${good.price}</span>\r\n                    </button>\r\n                </div>\r\n            `\r\n            goodsContainer.append(goodBlock)\r\n        })\r\n    }\r\n    const getData = (value, category) => {\r\n        fetch(\'https://test-1c072-default-rtdb.firebaseio.com/db.json\')\r\n        .then((res) => res.json())\r\n        .then((data) => {\r\n            const array = category?data.filter((item) => item[category] === value):data\r\n            localStorage.setItem(\'goods\', JSON.stringify(array))\r\n\r\n            if (window.location.pathname !== "/wildberris/goods.html") {\r\n                window.location.href = \'/wildberris/goods.html\'\r\n            } else {\r\n                renderGoods(array)\r\n            }\r\n            \r\n            })\r\n    }\r\n\r\n    links.forEach((link) => {\r\n        link.addEventListener(\'click\', (event) => {\r\n            event.preventDefault()\r\n            const linkValue = link.textContent;\r\n            const category = link.dataset.field;\r\n            // console.log(category)\r\n            getData(linkValue, category)\r\n        })\r\n    })\r\n\r\n    if ((localStorage.getItem(\'goods\')) && (window.location.pathname === "/wildberris/goods.html")) {\r\n        renderGoods(JSON.parse(localStorage.getItem(\'goods\')))\r\n    }\r\n\r\n    if (more) {\r\n        more.addEventListener(\'click\', (event) => {\r\n            event.preventDefault()\r\n            getData()\r\n        })\r\n    } else {\r\n\r\n    }\r\n\r\n}\r\n\r\ngetGoods()\n;// CONCATENATED MODULE: ./src/goods.js\n\r\n\r\n\r\n\r\nsearch();\r\ncart();\r\ngetGoods();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDcEUsOENBQThDLFVBQVU7QUFDeEQsbURBQW1ELGlCQUFpQjtBQUNwRSxpRkFBaUYsUUFBUTtBQUN6RixzREFBc0QsV0FBVztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVOztBQ3JFMEM7QUFDSjtBQUNRO0FBQzlDO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lsZGJlcnJpcy8uL3NyYy9tb2R1bGVzL3NlYXJjaC5qcz9lMDc1Iiwid2VicGFjazovL3dpbGRiZXJyaXMvLi9zcmMvbW9kdWxlcy9jYXJ0LmpzP2FjMGUiLCJ3ZWJwYWNrOi8vd2lsZGJlcnJpcy8uL3NyYy9tb2R1bGVzL2dldEdvb2RzLmpzP2Q1OWEiLCJ3ZWJwYWNrOi8vd2lsZGJlcnJpcy8uL3NyYy9nb29kcy5qcz83YmRhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBidG5TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gYnV0dG9uJyk7XHJcbiAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmxvY2sgPiBpbnB1dCcpO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckdvb2RzID0gKGdvb2RzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ29vZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9uZy1nb29kcy1saXN0JylcclxuXHJcbiAgICAgICAgZ29vZHNDb250YWluZXIuaW5uZXJIVE1MID1cIlwiXHJcblxyXG4gICAgICAgIGdvb2RzLmZvckVhY2goZ29vZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGdvb2RCbG9jay5jbGFzc0xpc3QuYWRkKCdjb2wtbGctMycpXHJcbiAgICAgICAgICAgIGdvb2RCbG9jay5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpXHJcblxyXG4gICAgICAgICAgICBnb29kQmxvY2suaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsICR7Z29vZC5sYWJlbCA/IG51bGwgOiAnZC1ub25lJ31cIj4ke2dvb2QubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHsnZGIvJyArIGdvb2QuaW1nfVwiIGFsdD0ke2dvb2QubmFtZX0gY2xhc3M9XCJnb29kcy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImdvb2RzLXRpdGxlXCI+JHtnb29kLm5hbWV9PC9oMz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ29vZHMtZGVzY3JpcHRpb25cIj4ke2dvb2QuZGVzY3JpcHRpb259PC9wPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBnb29kcy1jYXJkLWJ0biBhZGQtdG8tY2FydFwiIGRhdGEtaWQ9XCIke2dvb2QuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLXByaWNlXCI+JCR7Z29vZC5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBnb29kc0NvbnRhaW5lci5hcHBlbmQoZ29vZEJsb2NrKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXREYXRhID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vdGVzdC0xYzA3Mi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIuanNvbicpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBkYXRhLmZpbHRlcihnb29kID0+XHJcbiAgICAgICAgICAgICAgZ29vZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnb29kcycsIEpTT04uc3RyaW5naWZ5KGFycmF5KSlcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL3dpbGRiZXJyaXMvZ29vZHMuaHRtbFwiKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvd2lsZGJlcnJpcy9nb29kcy5odG1sJ1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyR29vZHMoYXJyYXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBidG5TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoaW5wdXRTZWFyY2gudmFsdWUpXHJcbiAgICB9KTtcclxufVxyXG5cclxuc2VhcmNoKClcclxuXHJcblxyXG4iLCJleHBvcnQgY29uc3QgY2FydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jYXJ0XCIpOyAvLyDQmtC90L7Qv9C60LAg0LTQu9GPINCw0LrRgtC40LLQsNGG0LjQuCDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG4gICAgY29uc3QgY2FydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY2FydFwiKTsgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XHJcbiAgICBjb25zdCBjbG9zZWJ0biA9IGNhcnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jbG9zZVwiKTsgLy8g0JrQvdC+0L/QsNC60LAg0LfQsNC60YDRi9GC0LjRjyDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG4gICAgY29uc3QgZ29vZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvbmctZ29vZHMtbGlzdFwiKTsgLy8g0J7QutC90L4g0YEg0YLQvtCy0LDRgNC+0LxcclxuICAgIGNvbnN0IGNhcnRUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC10YWJsZV9fZ29vZHNcIik7IC8vINCe0LrQvdC+INC60L7RgNC30LjQvdGLXHJcbiAgICBjb25zdCBtb2RhbGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWZvcm1cIik7IC8vINCk0L7RgNC80LAg0LIg0LzQvtC00LDQu9GM0L3QvtC8INC+0LrQvdC1XHJcbiAgICBjb25zdCB0b3RhbFByaWNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtdGFibGVfX3RvdGFsXCIpOyAvLyDQodGD0LzQvNCwINCy0YHQtSDQutC+0YDQt9C40L3Ri1xyXG4gIFxyXG4gICAgY29uc3QgZm9ybUlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibmFtZUN1c3RvbWVyXCJdJyk7IC8vIGlucHV0INC40LzQtdC90Lgg0LjQtyDQvNC+0LTQsNC70YzQvdC+0Lkg0YTQvtGA0LzRi1xyXG4gICAgY29uc3QgZm9ybUlucHV0UGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW25hbWU9J3Bob25lQ3VzdG9tZXInXVwiKTsgLy8gaW5wdXQg0YLQtdC70LXRhNC+0L3QsCDQuNC3INC80L7QtNCw0LvRjNC90L7QuSDRhNC+0YDQvNGLXHJcbiAgXHJcbiAgICAvLyDRhNGD0L3QutGG0LjRjyDRg9C00LLQu9C10L3QuNGPINGC0L7QstCw0YDQsCDQuNC3INC60L7RgNC30LjQvdGLXHJcbiAgICBjb25zdCBkZWxldGVDYXJ0SXRlbSA9IChpZCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpO1xyXG4gIFxyXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gY2FydC5maWx0ZXIoKGdvb2QpID0+IHtcclxuICAgICAgICByZXR1cm4gZ29vZC5pZCAhPT0gaWQ7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkobmV3Q2FydCkpO1xyXG4gICAgICByZW5kZXJDYXJ0R29vZHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjyDRg9Cy0LXQu9C40YfQtdC90LjRjyDQutC+0LvQu9C40YfQtdGB0YLQstCwINGC0L7QstCw0YDQsCDQsiDQutC+0YDQt9C40L3QtVxyXG4gICAgY29uc3QgcGx1c0NhcnRJdGVtID0gKGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBjYXJ0Lm1hcCgoZ29vZCkgPT4ge1xyXG4gICAgICAgIGlmIChnb29kLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgZ29vZC5jb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ29vZDtcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSk7XHJcbiAgICAgIHJlbmRlckNhcnRHb29kcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSkpO1xyXG4gICAgfTtcclxuICBcclxuICAgIC8vINCk0YPQvdC60YbQuNGPINGD0LzQtdC90YzRiNC10L3QuNGPINC60L7Qu9C70LjRh9C10YHRgtCy0LAg0YLQvtCy0LDRgNCwINCyINC60L7RgNC30LjQvdC1XHJcbiAgICBjb25zdCBtaW51c0NhcnRJdGVtID0gKGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBjYXJ0Lm1hcCgoZ29vZCkgPT4ge1xyXG4gICAgICAgIGlmIChnb29kLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgaWYgKGdvb2QuY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGdvb2QuY291bnQtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdvb2Q7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkobmV3Q2FydCkpO1xyXG4gICAgICByZW5kZXJDYXJ0R29vZHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICAvLyDQodC+0YXRgNCw0L3QtdC90LjRjyDRgtC+0LLQsNGA0LAg0LIgbG9jYWxTdG9yYWdlXHJcbiAgICBjb25zdCBhZGRUb0NhcnQgPSAoaWQpID0+IHtcclxuICAgICAgY29uc3QgZ29vZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ29vZHNcIikpOyAvLyDQkdCw0LfQsCDRgSDRgtC+0LLQsNGA0LDQvNC4XHJcbiAgICAgIGNvbnN0IGNsaWNrZWRHb29kID0gZ29vZHMuZmluZCgoZ29vZCkgPT4gZ29vZC5pZCA9PT0gaWQpOyAvLyBpZCDRgtC+0LLQsNGA0LBcclxuICAgICAgLy8gbG9jYWxTdG9yYWdlINC60L7RgNC30LjQvdGLXHJcbiAgICAgIGNvbnN0IGNhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIilcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKVxyXG4gICAgICAgIDogW107XHJcbiAgXHJcbiAgICAgIC8vINCj0LLQtdC70LjRh9C10YLRjCDQutC+0LvQuNGH0LXRgdGC0LLQviDRgtC+0LLQsNGA0LAg0LjQu9C4INC00L7QsdCw0LLQu9C10L3QuNGPINC10LPQviDQsiDQutC+0YDQt9C40L3Rg1xyXG4gICAgICBpZiAoY2FydC5zb21lKChnb29kKSA9PiBnb29kLmlkID09PSBjbGlja2VkR29vZC5pZCkpIHtcclxuICAgICAgICBjYXJ0Lm1hcCgoZ29vZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGdvb2QuaWQgPT09IGNsaWNrZWRHb29kLmlkKSB7XHJcbiAgICAgICAgICAgIGdvb2QuY291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBnb29kO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsaWNrZWRHb29kLmNvdW50ID0gMTtcclxuICAgICAgICBjYXJ0LnB1c2goY2xpY2tlZEdvb2QpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vINCT0L7RgtC+0LLQsNGPINCx0LDQt9CwINGC0L7QstCw0YDQsCDQsiDQutC+0YDQt9C40L3QtVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gICAgfTtcclxuICBcclxuICAgIC8vINCe0YLRgNC40YHQvtCy0LrQsCDRgtC+0LLQsNGA0LAg0LIg0LrQvtGA0LfQuNC90LVcclxuICAgIGNvbnN0IHJlbmRlckNhcnRHb29kcyA9IChnb29kcykgPT4ge1xyXG4gICAgICBjYXJ0VGFibGUuaW5uZXJIVE1MID0gYGA7XHJcbiAgXHJcbiAgICAgIGdvb2RzLmZvckVhY2goKGdvb2QpID0+IHtcclxuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICB0ci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Z29vZC5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Z29vZC5wcmljZX0kPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImNhcnQtYnRuLW1pbnVzXCJcIj4tPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtnb29kLmNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCIgY2FydC1idG4tcGx1c1wiXCI+KzwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtdG90YWxQcmljZT1cIlwiPiR7K2dvb2QucHJpY2UgKiArZ29vZC5jb3VudH0kPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImNhcnQtYnRuLWRlbGV0ZVwiXCI+eDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgYDtcclxuICAgICAgICBjYXJ0VGFibGUuYXBwZW5kKHRyKTtcclxuICBcclxuICAgICAgICAvLyDQntC20LjQstC70Y/QtdC8INC60L3QvtC/0LrQuCDQutC+0YDQt9C40L3Ri1xyXG4gICAgICAgIHRyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FydC1idG4tbWludXNcIikpIHtcclxuICAgICAgICAgICAgbWludXNDYXJ0SXRlbShnb29kLmlkKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhcnQtYnRuLXBsdXNcIikpIHtcclxuICAgICAgICAgICAgcGx1c0NhcnRJdGVtKGdvb2QuaWQpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FydC1idG4tZGVsZXRlXCIpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNhcnRJdGVtKGdvb2QuaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8g0KTRg9C90LrRhtC40Y8g0L/QvtGB0YfQtdGC0LAg0YHRg9C80LzRiyDQutC+0YDQt9C40L3Ri1xyXG4gICAgICBsZXQgdG90YWxQcmljZSA9IDA7XHJcbiAgICAgIGdvb2RzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBwcmljZUVsID0gaXRlbS5wcmljZSAqIGl0ZW0uY291bnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2VFbCk7XHJcbiAgICAgICAgdG90YWxQcmljZSArPSBwcmljZUVsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsUHJpY2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgdG90YWxQcmljZUVsLmlubmVyVGV4dCA9IHRvdGFsUHJpY2UgKyBcIiRcIjtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzZW5kRm9ybSA9IChuYW1lSW5wdXQsIHBob25lSW5wdXQpID0+IHtcclxuICAgICAgY29uc3QgY2FydEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpXHJcbiAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSlcclxuICAgICAgICA6IFtdO1xyXG4gIFxyXG4gICAgICBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBjYXJ0OiBjYXJ0QXJyYXksXHJcbiAgICAgICAgICBuYW1lOiBuYW1lSW5wdXQsXHJcbiAgICAgICAgICBwaG9uZTogcGhvbmVJbnB1dCxcclxuICAgICAgICB9KSxcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZm9ybUlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZm9ybUlucHV0UGhvbmUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydFwiKTtcclxuICAgICAgICBjYXJ0LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBtb2RhbGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGZvcm1JbnB1dE5hbWUudmFsdWU7XHJcbiAgICAgIGNvbnN0IHBob25lSW5wdXQgPSBmb3JtSW5wdXRQaG9uZS52YWx1ZTtcclxuICBcclxuICAgICAgc2VuZEZvcm0obmFtZUlucHV0LCBwaG9uZUlucHV0KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8g0LLRi9C30L7QstCwINC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXHJcbiAgICBjYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcnRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKVxyXG4gICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpXHJcbiAgICAgICAgOiBbXTtcclxuICBcclxuICAgICAgcmVuZGVyQ2FydEdvb2RzKGNhcnRBcnJheSk7XHJcbiAgXHJcbiAgICAgIGNhcnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC80L7QtNCw0LvRjNC90L7QsyDQvtC60L3QsFxyXG4gICAgY2xvc2VidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY2FydC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8g0LfQsNC60YDRi9GC0LjRjyDQvtC60L3QsCDQv9C+INC90LDQttCw0YLQuNGOINCy0L3QtSDQtdCz0L5cclxuICAgIGNhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmICghZS50YXJnZXQuY2xvc2VzdChcIi5tb2RhbFwiKSAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJvdmVybGF5XCIpKSB7XHJcbiAgICAgICAgY2FydC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC+0LrQvdCwINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIEVzY2FwZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgIGNhcnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0YLQvtCy0LDRgNCwINCyINC60L7RgNC30LjQvdGDINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyDRgSDRhtC10L3QvtC5XHJcbiAgICBpZiAoZ29vZHNDb250YWluZXIpIHtcclxuICAgICAgZ29vZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChcIi5hZGQtdG8tY2FydFwiKSkge1xyXG4gICAgICAgICAgY29uc3QgYnV0dG9uVG9DYXJ0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuYWRkLXRvLWNhcnRcIik7XHJcbiAgICAgICAgICBjb25zdCBnb29kSWQgPSBidXR0b25Ub0NhcnQuZGF0YXNldC5pZDtcclxuICBcclxuICAgICAgICAgIGFkZFRvQ2FydChnb29kSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgZ2V0R29vZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWxpbmsnKSBcclxuICAgIGNvbnN0IG1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9yZScpXHJcblxyXG4gICAgY29uc3QgcmVuZGVyR29vZHMgPSAoZ29vZHMpID0+IHtcclxuICAgICAgICBjb25zdCBnb29kc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb25nLWdvb2RzLWxpc3QnKVxyXG5cclxuICAgICAgICBnb29kc0NvbnRhaW5lci5pbm5lckhUTUwgPVwiXCJcclxuXHJcbiAgICAgICAgZ29vZHMuZm9yRWFjaChnb29kID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ29vZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgZ29vZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbC1sZy0zJylcclxuICAgICAgICAgICAgZ29vZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02JylcclxuXHJcbiAgICAgICAgICAgIGdvb2RCbG9jay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZHMtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgJHtnb29kLmxhYmVsID8gbnVsbCA6ICdkLW5vbmUnfVwiPiR7Z29vZC5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIkeydkYi8nICsgZ29vZC5pbWd9XCIgYWx0PSR7Z29vZC5uYW1lfSBjbGFzcz1cImdvb2RzLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZ29vZHMtdGl0bGVcIj4ke2dvb2QubmFtZX08L2gzPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJnb29kcy1kZXNjcmlwdGlvblwiPiR7Z29vZC5kZXNjcmlwdGlvbn08L3A+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGdvb2RzLWNhcmQtYnRuIGFkZC10by1jYXJ0XCIgZGF0YS1pZD1cIiR7Z29vZC5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tcHJpY2VcIj4kJHtnb29kLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGdvb2RzQ29udGFpbmVyLmFwcGVuZChnb29kQmxvY2spXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldERhdGEgPSAodmFsdWUsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vdGVzdC0xYzA3Mi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIuanNvbicpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IGNhdGVnb3J5P2RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtW2NhdGVnb3J5XSA9PT0gdmFsdWUpOmRhdGFcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dvb2RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKVxyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvd2lsZGJlcnJpcy9nb29kcy5odG1sXCIpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy93aWxkYmVycmlzL2dvb2RzLmh0bWwnXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJHb29kcyhhcnJheSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtWYWx1ZSA9IGxpbmsudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gbGluay5kYXRhc2V0LmZpZWxkO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yeSlcclxuICAgICAgICAgICAgZ2V0RGF0YShsaW5rVmFsdWUsIGNhdGVnb3J5KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICgobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvb2RzJykpICYmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dpbGRiZXJyaXMvZ29vZHMuaHRtbFwiKSkge1xyXG4gICAgICAgIHJlbmRlckdvb2RzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvb2RzJykpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3JlKSB7XHJcbiAgICAgICAgbW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmdldEdvb2RzKCkiLCJpbXBvcnQgeyBzZWFyY2ggfSBmcm9tICcuL21vZHVsZXMvc2VhcmNoJztcclxuaW1wb3J0IHsgY2FydCB9IGZyb20gJy4vbW9kdWxlcy9jYXJ0JztcclxuaW1wb3J0IHsgZ2V0R29vZHMgfSBmcm9tICcuL21vZHVsZXMvZ2V0R29vZHMnO1xyXG5cclxuc2VhcmNoKCk7XHJcbmNhcnQoKTtcclxuZ2V0R29vZHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///220\n')}},__webpack_exports__={};__webpack_modules__[220]()})();