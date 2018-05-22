var reportsView = (function (){

    function displayCandidateInfo(candidate){
        var main = document.querySelector("main");
        main.innerHTML = "";

        var candidateAvatar = candidate.avatar || "./assets/images/avatar"

        var candidateInfoRowDiv = document.createElement("div");
        candidateInfoRowDiv.className = "row candidateContainer";

        var imgDiv = document.createElement("div");
        imgDiv.className = "col m12 xl4 center";

        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", candidateAvatar);

        var info1 = document.createElement("div");
        info1.className = "col m12 xl4 center";

        var info2 = document.createElement("div");
        info2.className = "col m12 xl4 center";

        var nameLabel = document.createElement("p");
        nameLabel.textContent = "Name:";

        var name = document.createElement("h5");
        name.textContent = candidate.name;

        var emailLabel = document.createElement("p");
        emailLabel.textContent = "Email:";

        var email = document.createElement("h5");
        email.textContent = candidate.email;

        var birthdayLabel = document.createElement("p");
        birthdayLabel.textContent = "Date of birth:";

        var birthday = document.createElement("h5");
        birthday.textContent = candidate.getBirthday();

        var educationLabel = document.createElement("p");
        educationLabel.textContent = "Education:";

        var education = document.createElement("h5");
        education.textContent = candidate.education;

        info1.appendChild(nameLabel);
        info1.appendChild(name);
        info1.appendChild(emailLabel);
        info1.appendChild(email);

        info2.appendChild(birthdayLabel);
        info2.appendChild(birthday);
        info2.appendChild(educationLabel);
        info2.appendChild(education);

        imgDiv.appendChild(imgEl);

        candidateInfoRowDiv.appendChild(imgDiv);
        candidateInfoRowDiv.appendChild(info1);
        candidateInfoRowDiv.appendChild(info2);

        main.appendChild(candidateInfoRowDiv);
    }

    return {
        displayCandidateInfo,
    }

})();