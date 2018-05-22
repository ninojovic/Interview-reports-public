function Candidate(id, name, birthday, email, education, avatar){
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.email = email;
    this.education = education;
    this.avatar = avatar;
}

Candidate.prototype.getBirthday = function () {
    var date = new Date(this.birthday);

    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
}
