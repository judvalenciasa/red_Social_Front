  
function ShowNotificationMessage(message) {
    document.querySelector("#messageText").innerHTML = message;
    $('#messageModal').modal()
}
