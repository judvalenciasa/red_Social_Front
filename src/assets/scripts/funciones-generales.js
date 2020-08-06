  
function ShowNotificationMessage(message) {
    document.querySelector("#messageText").innerHTML = message;
    $('#messageModal').modal()
}

function toggleSideBar()
{
    $("#wrapper").toggleClass("toggled");
}