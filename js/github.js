document.getElementById('delete-confirm').addEventListener('keyup', function(event) {
    const text = event.target.value;
    // console.log(text);
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
});

document.getElementById('btn-delete').addEventListener('click', function() {
    const info = document.getElementById('my-info');
    info.style.display = 'none';
    // Clear the input field
    const inputField = document.getElementById('delete-confirm');
    inputField.value = '';
});