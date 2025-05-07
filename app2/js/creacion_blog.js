function toggleMenu() {
    const nav = document.querySelector('.nav ul');
    nav.classList.toggle('active');
}
  
function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = (profileMenu.style.display === 'block') ? 'none' : 'block';
}
  
document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profileMenu');
    const profileButton = document.querySelector('.profile-btn');
    
    if (!profileMenu.contains(event.target) && !profileButton.contains(event.target)) {
      profileMenu.style.display = 'none';
    }
});
  
function saveBlog(blogTitle, blogContent) {
    const blog = {
      title: blogTitle,
      content: blogContent,
      date: new Date().toLocaleString()
    };
  
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
}
  
function deleteBlog(index) {
  // Pregunta de confirmación antes de eliminar el blog
  const confirmacion = confirm("¿Estás seguro de que deseas eliminar este blog?");
  
  if (confirmacion) {
    // Si el usuario acepta, realiza la eliminación
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.splice(index, 1); // Elimina el blog en el índice especificado
    localStorage.setItem('blogs', JSON.stringify(blogs)); // Guarda los blogs actualizados
    displayBlogs(); // Actualiza la lista de blogs en la página
  }
}
  
function displayBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = '';
    
    blogs.forEach((blog, index) => {
      const blogDiv = document.createElement('div');
      blogDiv.classList.add('blog');
      blogDiv.innerHTML = `
        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
        <small>Creado el: ${blog.date}</small>
        <button class="delete-btn" onclick="deleteBlog(${index})">Eliminar</button>
        <button class="edit-btn" onclick="editBlog(${index})">Editar</button>
        <hr>
      `;
      blogList.appendChild(blogDiv);
    });
}
  
function editBlog(index) {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = blogs[index];
  
    document.getElementById('editTitle').value = blog.title;
    document.getElementById('editContent').value = blog.content;
  
    document.getElementById('editForm').style.display = 'block';
  
    window.currentEditIndex = index;
}
  
function saveEditedBlog() {
    const title = document.getElementById('editTitle').value;
    const content = document.getElementById('editContent').value;
  
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs[window.currentEditIndex] = {
      title: title,
      content: content,
      date: new Date().toLocaleString()
    };
  
    localStorage.setItem('blogs', JSON.stringify(blogs));
  
    displayBlogs();
    cancelEdit();
}
  
function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
}
  
window.onload = function() {
    displayBlogs();
};

function toggleProfileMenu() {
  var menu = document.getElementById("profileMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function toggleMenu() {
  var nav = document.querySelector('.header .nav ul');
  nav.classList.toggle('active');
}
