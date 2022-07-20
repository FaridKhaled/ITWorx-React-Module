setTimeout(bindData, 500);

function bindData() {
    var profileName1 = '<i class="fas fa-arrow-left"></i> &nbsp; John Doe';
    var profileName2 = 'John Doe <i class="fas fa-check-circle verified"></i>';
    var photo = "john-doe.jpg";
    var profileLocation = "Cairo";

    document.getElementById("profileName").innerHTML = profileName1;
    document.getElementById("profilePicture1").src = photo;
    document.getElementById("profileName2").innerHTML = profileName2;
    document.getElementById("profilePicture2").src = photo;
    document.getElementById("profileName3").innerHTML = profileName2;
    document.getElementById("Location").innerHTML = profileLocation;
}

var darkTheme = false;

var toggle = document.getElementById("toggle");

toggle.addEventListener("click", function(e) {

    if( darkTheme ) {

        document.getElementById("profileName").style.color = "black";
        document.getElementById("themeName").style.color = "gray";
        document.getElementById("themeName").innerHTML = "Light Theme";
        document.getElementById("coverphoto").src = "light-theme-cover-photo.png";
        //document.getElementById("profilePicture1").src = "light-theme-image.png";
        document.getElementById("profileName2").style.color = "black";
        Array.from( document.getElementsByClassName("verified") ).forEach(function(element) {
            element.style.color = "rgb(10, 162, 245)";
        });
        Array.from( document.getElementsByTagName("strong") ).forEach(function(element) {
            element.style.color = "black";
        });
        //document.getElementById("profilePicture2").src = "light-theme-image.png";
        document.getElementById("profileName3").style.color = "black";
        document.getElementById("profileInfo").style.backgroundColor = "white";
        document.getElementById("tweets").style.backgroundColor = "white";
        document.getElementById("header").style.backgroundColor = "white";

        darkTheme = false;
    }
    else {

        document.getElementById("profileName").style.color = "white";
        document.getElementById("themeName").style.color = "white";
        document.getElementById("themeName").innerHTML = "Dark Theme";
        document.getElementById("coverphoto").src = "dark-theme-cover-photo.png";
        //document.getElementById("profilePicture1").src = "dark-theme-image.png";
        document.getElementById("profileName2").style.color = "white";
        Array.from( document.getElementsByClassName("verified") ).forEach(function(element) {
            element.style.color = "white";
        });
        Array.from( document.getElementsByTagName("strong") ).forEach(function(element) {
            element.style.color = "white";
        });
        //document.getElementById("profilePicture2").src = "dark-theme-image.png";
        document.getElementById("profileName3").style.color = "white";
        document.getElementById("profileInfo").style.backgroundColor = "rgb(21, 30, 43)";
        document.getElementById("tweets").style.backgroundColor = "rgb(21, 30, 43)";
        document.getElementById("header").style.backgroundColor = "rgb(21, 30, 43)";


        darkTheme = true;
    }

});

var changeBackground = document.getElementById("changeBackground");

changeBackground.addEventListener("change", function(e) {

    if(this.value == "default") {

        document.body.style.backgroundColor = "rgb(68, 177, 246)";

    }
    else {

        document.body.style.backgroundColor = "yellow";

    }

});


