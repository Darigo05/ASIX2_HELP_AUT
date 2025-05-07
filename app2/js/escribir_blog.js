var app = angular.module('editorApp', []);
app.controller('editorCtrl', function($scope) {
    // Inicializamos el editor de CKEditor
    DecoupledEditor
        .create(document.querySelector('#editor'), {
            ckfinder: {
                uploadUrl: 'http://httpbin.org/post'
            }
        })
        .then(editor => {
            const toolbarContainer = document.querySelector('#toolbar-container');
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            $scope.editor = editor;
        })
        .catch(error => {
            console.error(error);
        });

    // Guardar borrador
    $scope.saveDraft = function() {
        var content = $scope.editor.getData(); // Usamos getData() para obtener el contenido
        var blogData = {
            title: $scope.title, // Incluimos el título en los datos del blog
            content: content,
            status: 'borrador',
            timestamp: new Date().getTime()
        };
        var blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        blogs.push(blogData);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        alert('Borrador guardado correctamente.');
    };

    // Previsualizar el blog
    $scope.previewBlog = function() {
        var content = $scope.editor.getData();
        var previewWindow = window.open();
        previewWindow.document.write('<h1>' + $scope.title + '</h1>' + content); // Mostramos el título y el contenido
    };

    // Enviar el blog para revisión
    $scope.submitBlog = function() {
        var content = $scope.editor.getData();
        if (content.trim() === '') {
            alert('No puedes enviar un blog vacío.');
            return;
        }
        alert('Tu blog se ha enviado para revisión. El proceso puede tardar hasta un mes y te contactaremos por correo.');
        var blogData = {
            title: $scope.title, // Incluimos el título en los datos del blog
            content: content,
            status: 'en revisión',
            timestamp: new Date().getTime()
        };
        var blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        blogs.push(blogData);
        localStorage.setItem('blogs', JSON.stringify(blogs));
    };

    // Eliminar el blog
    $scope.confirmDelete = function() {
        document.getElementById('deleteModal').style.display = 'block';
    };

    $scope.deleteBlog = function() {
        var blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        blogs.pop();  // Elimina el último blog
        localStorage.setItem('blogs', JSON.stringify(blogs));

        // Limpiar el contenido del editor y el campo de título
        if ($scope.editor) {
            $scope.editor.setData('');  // Reseteamos el contenido del editor de CKEditor
        }

        $scope.title = '';  // Limpiamos el campo de título

        alert('El blog ha sido eliminado.');
        document.getElementById('deleteModal').style.display = 'none';
    };

    // Cancelar la eliminación
    $scope.cancelDelete = function() {
        document.getElementById('deleteModal').style.display = 'none';
    };

    // Confirmar si se quiere guardar antes de salir
    $scope.confirmExit = function() {
        document.getElementById('exitModal').style.display = 'block';
    };

    // Guardar los cambios y salir
    $scope.saveDraftAndExit = function() {
        $scope.saveDraft(); // Guardamos el borrador
        window.location.href = "creacion_blog.html"; // Redirigimos a la página principal
    };

    // Salir sin guardar
    $scope.exitWithoutSaving = function() {
        window.location.href = "creacion_blog.html"; // Redirigimos a la página principal sin guardar
    };

    // Cancelar salida
    $scope.cancelExit = function() {
        document.getElementById('exitModal').style.display = 'none';
    };
});

// Mostrar los blogs en la página principal (index.html)
window.onload = function() {
    var blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    var blogList = document.getElementById('blogList');
    
    if (blogs.length === 0) {
        blogList.innerHTML = '<p>No tienes blogs creados.</p>';
    } else {
        blogs.forEach(function(blog, index) {
            var blogItem = document.createElement('div');
            blogItem.className = 'blog-item';
            blogItem.innerHTML = `
                <h3>Blog ${index + 1} - Estado: ${blog.status}</h3>
                <p>${blog.content.substring(0, 100)}...</p>
                <a href="creacion_blog.html">Editar</a>
            `;
            blogList.appendChild(blogItem);
        });
    }
};
