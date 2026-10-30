
function sendMessage() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {

        document.getElementById("result").innerHTML =
        "Please fill all fields!";

    } else {

        document.getElementById("result").innerHTML =
        "Thank you " + name + "! Your message is ready.";

    }

}
