var errorView = (function (){

    function errorMsg() {
        var main = document.querySelector("main");
        main.innerHTML = "";

        var rowDiv = document.createElement("div");
        rowDiv.className = "row";

        var errorImg = document.createElement("img");
        errorImg.setAttribute("src", "./assets/images/error.png")
        errorImg.className = "center col m12 center"

        rowDiv.appendChild(errorImg)

        main.appendChild(rowDiv);
    }
    
    return {
        errorMsg,
    }
})()