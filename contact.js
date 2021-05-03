nameInfo = document.getElementById("name");
emailInfo = document.getElementById("email");
commentInfo = document.getElementById("comments")

function formfunction() {
    console.log(nameInfo.value);
    document.write("Thank you! Your comments and info were received.");
    
    console.log(emailInfo.value);

    console.log(commentInfo.value);
}