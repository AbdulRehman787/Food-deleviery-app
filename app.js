function signup() {
    var user_name = document.getElementById("name").value;
    localStorage.setItem("name", user_name);
    location.href = "signup Foam.html"


    var user_resturant = document.getElementById("resturant").value;
    var user_name = document.getElementById("name").value;
    var user_email = document.getElementById("email").value;
    var user_phone = document.getElementById("phone").value;
    var user_city = document.getElementById("city").value;
    var user_pass = document.getElementById("password").value;

    localStorage.setItem("resturant", user_resturant)
    localStorage.setItem("name", user_name)
    localStorage.setItem("email", user_email)
    localStorage.setItem("phone", user_phone)
    localStorage.setItem("city", user_city)
    localStorage.setItem("password", user_pass)



}