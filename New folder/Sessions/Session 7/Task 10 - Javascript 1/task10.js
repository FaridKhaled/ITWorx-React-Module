var divNumber = 0;

document.getElementById("add").addEventListener("click", addDiv);



function addDiv() {

    var myDiv = document.createElement('div');

    myDiv.style.cssText = "width: 150px; height: 150px; color: red;"

    myDiv.classList.add("myDiv");

    myDiv.innerHTML = "This is Div " + (++divNumber);

    myDiv.addEventListener("click", function(){
        alert(this.innerText);
    });

    document.body.appendChild(myDiv);
}