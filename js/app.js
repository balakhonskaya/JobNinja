

//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})


// Contact Form
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var company = document.forms["myForm"]["company"].value;
    var phone = document.forms["myForm"]["phone"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>Bitte geben Sie Ihren Namen ein</div>";
        fadeIn();
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>Bitte geben Sie Ihre E-Mail-Adresse ein</div>";
        fadeIn();
        return false;
    }
    if (company == "" || company == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>Bitte geben Sie Ihre Firme ein</div>";
        fadeIn();
        return false;
    }
    if (phone == "" || phone == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>Bitte geben Sie Ihr Telefon ein</div>";
        fadeIn();
        return false;
    }

}

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}