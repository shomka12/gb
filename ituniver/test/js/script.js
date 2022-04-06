const FORM = document.getElementById('question');
const message = {
    loading: 'Загрузка',
    success: 'Успешно передано',
    failure: 'Что-то пошло не так'
}

postData(FORM);

function postData(form) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);
        const request = new XMLHttpRequest();
        request.open('POST', 'https://60376bfd5435040017722533.mockapi.io/form');
        request.setRequestHeader('Content-type', 'multipart/form-data');
        const formData = new FormData(form);
        request.send(formData);
        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                statusMessage.textContent = message.success;
            } else {
                statusMessage.textContent = message.failure;
            }
        })
    })
}
