var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

var submit = document.getElementById("submit");

submit.addEventListener("click", function(e) {
    
    e.preventDefault();

    var inputText = document.getElementById("text_input").value;

    if( inputText == "" ) {

        alert("This Field is required!")

    }
    else if( regex.test(inputText) ) {

        alert("You cannot use special characters!");

    }
    else {
        
        var myElement = document.createElement("p");

        myElement.classList.add("myElement");

        myElement.style.cssText = "color: red;";

        myElement.innerHTML = inputText;

        document.body.appendChild(myElement);

    }
});