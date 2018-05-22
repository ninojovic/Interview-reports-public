var candidatesView = (function (){

    function displayCandidates(candidatesData, eventListenerFunction){
        var main = document.querySelector("main");
        main.innerHTML = "";

        var rowDiv = document.createElement("div");
        rowDiv.className = "row";

        for (var i = 0; i < candidatesData.length; i++){
            
            var candidate = candidatesData[i];

            candidate.avatar = candidate.avatar || "./assets/images/avatar.png"

            var cardDiv = document.createElement("div");
            cardDiv.className = "col s12 m6 xl4";
            cardDiv.setAttribute("data-id", candidate.id)

            var cardContentDiv = document.createElement("div");
            cardContentDiv.className = "card sticky-action";

            var imgDiv = document.createElement("div");
            imgDiv.className = "card-image";

            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", candidate.avatar)

            var textDiv = document.createElement("div");
            textDiv.className = "card-content center";
            
            var nameEl = document.createElement("h4");
            nameEl.textContent = candidate.name;

            var emailEl = document.createElement("p");
            emailEl.textContent = candidate.email;

            imgDiv.appendChild(imgEl);
            textDiv.appendChild(nameEl);
            textDiv.appendChild(emailEl);
            cardContentDiv.appendChild(imgDiv)
            cardContentDiv.appendChild(textDiv);
            cardDiv.appendChild(cardContentDiv);
            rowDiv.appendChild(cardDiv);

            cardDiv.addEventListener("click", function(e){
                eventListenerFunction(e.currentTarget.dataset.id);
            })

            main.appendChild(rowDiv);

        }
    }

    function addListeners(){

    }

    return {
        displayCandidates,
    }

})()


{/* 
    <div class="row">
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src="http://via.placeholder.com/200">
                </div>
                <div class="card-content center">
                    <h4>Name Surname</h4>
                    <p>example@gmail.com</p>
                </div>
            </div>
        </div>
    </div> 
*/}