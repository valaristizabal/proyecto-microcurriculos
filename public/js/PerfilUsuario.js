// Código JavaScript para cargar el perfil y mostrar el contenido
function displayProfile() {
    const profileContent = `
        <div class="profile-container">
            <h2 class="h4">Perfil del Usuario</h2>
            <div class="profile-details">
                <div class="profile-image">
                    <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="Profile Image" class="img-fluid">
                </div>
                <div class="profile-info">
                    <p><strong>Nombre:</strong> Maicol García</p>
                    <p><strong>Correo:</strong> maicol.garcia@example.com</p>
                    <p><strong>Rol:</strong> Desarrollador</p>
                    <p><strong>Teléfono:</strong> +123 456 7890</p>
                    <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad Ejemplo</p>
                    <p><strong>Fecha de Nacimiento:</strong> 01 de Enero, 1990</p>
                </div>
            </div>
            <button class="btn btn-secondary" onclick="goBack()">Volver</button>
            <button class="btn btn-primary" onclick="editProfile()">Editar Perfil</button>
        </div>
    `;
    
    // Inserta el contenido en el contenedor correspondiente
    const contentContainer = document.getElementById('content-section');
    contentContainer.innerHTML = profileContent;
    
    // Aquí puedes agregar estilos adicionales si es necesario
    const style = `
        <style>
            .profile-container {
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background-color: #f9f9f9;
                max-width: 600px;
                margin: 0 auto;
            }
            .profile-details {
                display: flex;
                align-items: center;
                gap: 20px;
                margin-bottom: 20px;
            }
            .profile-image img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                object-fit: cover;
                border: 2px solid #ddd;
            }
            .profile-info p {
                margin: 8px 0;
                font-size: 16px;
            }
            .btn-secondary, .btn-primary {
                margin-top: 10px;
            }
        </style>
    `;
    
    // Inserta los estilos en el documento
    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
}

// Función para cargar el perfil cuando se hace clic
function loadProfile() {
    if (typeof displayProfile === 'function') {
        displayProfile();
    }
}

// Función para volver a la vista anterior
function goBack() {
    const contentContainer = document.getElementById('content-section');
    contentContainer.innerHTML = ''; // Limpiar el contenido del perfil
}

// Función para editar el perfil (puedes agregar más funcionalidad aquí)
function editProfile() {
    const contentContainer = document.getElementById('content-section');
    const editContent = `
        <div class="profile-container">
            <h2 class="h4">Editar Perfil</h2>
            <form id="edit-profile-form">
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" id="name" value="Maicol García">
                </div>
                <div class="form-group">
                    <label for="email">Correo</label>
                    <input type="email" class="form-control" id="email" value="maicol.garcia@example.com">
                </div>
                <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input type="text" class="form-control" id="phone" value="+123 456 7890">
                </div>
                <div class="form-group">
                    <label for="address">Dirección</label>
                    <input type="text" class="form-control" id="address" value="Calle Falsa 123, Ciudad Ejemplo">
                </div>
                <div class="form-group">
                    <label for="dob">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" id="dob" value="1990-01-01">
                </div>
                <button type="button" class="btn btn-secondary" onclick="goBack()">Cancelar</button>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
        </div>
    `;
    contentContainer.innerHTML = editContent;
}

// Esto simula el contenido inicial para la sección de perfil (solo para pruebas)
document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('.user-panel .info a');
    if (profileLink) {
        profileLink.addEventListener('click', function(event) {
            event.preventDefault();
            loadProfile();
        });
    }
});
