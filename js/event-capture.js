document.getElementById('item-3').addEventListener('click', function(event) {
    console.log('item-3 is clicked.');
    event.stopPropagation();
    // event.stopImmediatePropagation();
}, true);

document.getElementById('list-ul').addEventListener('click', function() {
    console.log('ul is clicked.');
}, true);

document.getElementById('list-container').addEventListener('click', function() {
    console.log('section container is clicked.');
}, true);

document.getElementById('body').addEventListener('click', function() {
    console.log('body of the html is clicked.');
}, true);