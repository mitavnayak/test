let posts = [];

function submitPost() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value.trim();

    if (postText !== '') {
        posts.push(postText);
        postInput.value = '';
        displayPosts();
    }
}

function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((post) => {
        const listItem = document.createElement('li');
        listItem.textContent = post;
        postList.appendChild(listItem);
    });
}
