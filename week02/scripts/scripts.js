const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('___________');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', function () {
    if (input.value.trim() !=='') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(li);
    }
    input.focus();
    input.value = '';
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = '';
})
