import usuarios from "../../model/ModeloUsuario.js";


function showCreateForm() {
    hideAllForms();
    document.getElementById("create-form").style.display = "block";
}
function showList() {
    hideAllForms();
    document.getElementById("list").style.display = "block";
}
function hideAllForms() {
    document.getElementById("create-form").style.display = "none";
    document.getElementById("list").style.display = "none";
}

document.getElementById('backToPanel').onclick = backToPanel;
document.getElementById('backToPanel1').onclick = backToPanel;
function backToPanel() {
    hideAllForms();
    document.getElementById("login-panel").style.display = "block";
    document.getElementById("list").style.display = "none";
    console.log('Regresar al panel')
}


document.getElementById('logout').onclick = logout;

function logout() {
    window.location.href = './index.html';
    console.log('Sesión cerrada')
}
document.getElementById("btnCreateForm").addEventListener('click', showCreateForm)
document.getElementById("btnShowList").addEventListener('click', showList)


document.getElementById("btnShowList").onclick = mostrarUser;
function mostrarUser(){
    console.log(usuarios);
    for (let i = 0; i < usuarios.length; i++) {
        // Crear un nuevo elemento de lista
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item'; // Clase de Bootstrap para el estilo
        listItem.textContent = usuarios[i].usuario; // Establecer el texto del elemento
        usuarioList.appendChild(listItem);
        console.log(usuarios[i].usuario);
    }
}