const Location = document.getElementById("deliver");

function ShowLocation(){
    Location.style.display = "block"
}

function CloseLocation(){
    Location.style.display = "none"
}

const sidebar = document.getElementById("sidebar");

function showMenu(){
    sidebar.style.left = "0px"
}
function closeMenu(){
    sidebar.style.left = "-250px"
}