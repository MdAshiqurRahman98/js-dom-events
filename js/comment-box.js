// Step 1: Add event listener to the post button
document.getElementById('btn-post').addEventListener('click', function() {
    // Step 2: Get the comment
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    // console.log(newComment);

    // Step 3: Set the comment inside the comment container
    // 1. Get the comment container
    // 2. Make a new element (p tag)
    // 3. Set the text of the comment as innerText of the p tag
    // 4. Add the p tag using appendChild
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);

    // Step 4: Clear the text area
    commentBox.value = '';
});