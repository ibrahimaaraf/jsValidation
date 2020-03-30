var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" && password == "") {
        alert("username and password required");

        return false;
    } else if (username == "") {
        alert("username required");

        return false;
    } else if (password == "") {
        alert("password required");
        return false;
    } else if (username == "aaraf" && password == "12345") {
        alert("Login successfully");
        window.location = "home.html";
        return false;
    } else {
        attempt--;
        alert("You have " + attempt + " attempts left;");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}