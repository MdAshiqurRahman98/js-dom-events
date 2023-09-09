document.getElementById('item-3').addEventListener('click', function(event) {
    console.log('item-3 is clicked.');
    // event.stopPropagation();
    event.stopImmediatePropagation();
});

document.getElementById('list-ul').addEventListener('click', function(event) {
    console.log('ul is clicked.');
});

document.getElementById('list-container').addEventListener('click', function(event) {
    console.log('section container is clicked.');
});

document.getElementById('body').addEventListener('click', function(event) {
    console.log('body of the html is clicked.');
});