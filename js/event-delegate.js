/* const items = document.getElementsByClassName('item');
// console.log(items);
for(const item of items) {
    // console.log(item);
    item.addEventListener('click', function(event) {
        // console.log(item);
        // console.log(event.target);
        // console.log(event.target.parentNode);

        // event.target.remove();
        event.target.parentNode.removeChild(event.target);
    });
} */


document.getElementById('list-container').addEventListener('click', function(event) {
    // console.log(event.target);
    event.target.parentNode.removeChild(event.target);
});

document.querySelector('#btn-add-item').addEventListener('click', function() {
    const listContainer = document.querySelector('#list-container');

    const li = document.createElement('li');
    li.innerText = 'New item is added.';
    // li.className();
    li.classList.add('item');
    listContainer.appendChild(li);
});