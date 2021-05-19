var IDLinks = document.getElementById("IDLinks");

onload = function() {
    if (IDLinks === null)
        IDLinks = document.getElementById("IDLinks");

}

function showMenu() {
    IDLinks.style.display = 'block';

}

function hideMenu() {
    IDLinks.style.display = "none";
}