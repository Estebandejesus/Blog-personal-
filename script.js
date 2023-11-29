script.js
function addBlogPost() {
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;
    var date = new Date().toISOString().split('T')[0];

    var newPost = document.createElement('article');
    newPost.innerHTML = `
        <h2>${title}</h2>
        <time>Fecha: ${date}</time>
        <p>${content}</p>
    `;

    document.getElementById('blog-posts').appendChild(newPost);

    // Limpiar el formulario
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
}