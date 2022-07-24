var rowDiv = document.getElementById("row");

var columnNumber = 1;

var cardtitle = "";
var cardtext = "";
var cardimage = "";
var cardImageNumber = 0;
var cardID = 0;
var cards = []

for (var i = 1; i <= 12; i++) {

    cardID = i

    if(i == 1 || i == 4 || i == 7 || i == 10) {

        var columnTemplate = 
        `<div class="col-3" id="column${columnNumber}">
        
        
        
        </div>`

        rowDiv.innerHTML += columnTemplate;

        columnNumber++;

    }


    // determine card title
    if(i < 4) {
        
        cardtitle = "EGYPT TANGBIA";

    }
    else if(i >= 4 && i < 7) {

        cardtitle = "OLLING PHISOTIP";

    }
    else if(i >= 7 && i < 10){

        cardtitle = "CORTIA DYNA";

    }
    else {

        cardtitle = "SYSNE OF DUBAI";

    }

    //determine card text
    if(i < 4) {

        cardtext = "Denatibus et magnis dis parturient montes, nascetur ridiculus mus";

    }
    else {

        cardtext = "Penatibus et magnis dis parturient montes, nascetur ridiculus mus";

    }

    //determine card image
    if(i == 5) {
        cardImageNumber = 2;
    }
    else if(i == 12) {
        cardImageNumber = 7;
    }
    else {
        cardImageNumber = i;
    }

    cardimage = "../img/img" + cardImageNumber + ".jpg"; 


    var template = 
        `<div class="card w-80 mb-4" id="${"card"+cardID}">

            <img src="${cardimage}" class="card-img-top">

            <div class="card-body">

                <h5 class="card-title text-center"> ${cardtitle} </h5>

                <p class="card-text text-center"> ${cardtext} </p>

                <div class="card_footer">

                    <i class="far fa-calendar"> Aug 5, 2013 </i>

                    <i class="far fa-comment">  22 comments </i>

                </div>

            </div>

        </div>`;

    document.getElementById("column" + (columnNumber - 1)).innerHTML += template;
    
    cards.push(
        {
            cardTitle : cardtitle,
            cardText: cardtext,
            cardImage: cardimage,
            cardID : "card"+cardID
            
        }
    )

}

var modal = new bootstrap.Modal( document.getElementById('exampleModal') )

var cardsInDocument = Array.from(document.getElementsByClassName("card")).forEach(function(element){

    element.addEventListener("click", function(event){

        var currentCard = cards.find(elem => (elem.cardID == element.id) )

        var modalBodyTemplate = 
        `
        <img src="${currentCard.cardImage}">
        
        <div>

            <h4> ${currentCard.cardTitle} </h4>

            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Nam nibh. Nunc varius facilisis eros. Sed erat. In in velit 
            quis arcu ornare laoreet. Curabitur adipiscing luctus massa.
            </p> 
            
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Nam nibh. Nunc varius facilisis eros. Sed erat. In in velit 
            quis arcu ornare laoreet. Curabitur adipiscing luctus massa.
            </p> 

            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Nam nibh. Nunc varius facilisis eros. Sed erat. In in velit 
            quis arcu ornare laoreet. Curabitur adipiscing luctus massa.
            </p> 

        </div>
        `

        document.getElementById('modalBody').innerHTML = modalBodyTemplate

        modal.show();
    });

});



