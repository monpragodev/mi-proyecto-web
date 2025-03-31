document.getElementById('post-date').innerText = new Date().toLocaleDateString();

document.getElementById('submit-comment').addEventListener('click', function() {
  var commentText = document.getElementById('comment').value;
  if (commentText) {
    var commentList = document.getElementById('comments-list');
    var newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
    document.getElementById('comment').value = ''; // Limpiar el textarea
  } else {
    alert('Por favor, escribe un comentario antes de enviarlo.');
  }
});
