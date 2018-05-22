var data = (function (){
    
    var candidatesArr = [];
    
    function mapCandidates(rawData){

        for(var i = 0; i < rawData.length; i++){
            var currentEl = rawData[i];

            var candidate = new Candidate(
                currentEl.id, 
                currentEl.name, 
                currentEl.birthday, 
                currentEl.email, 
                currentEl.education, 
                currentEl.avatar
            );

            candidatesArr.push(candidate);
        }

        return candidatesArr
    }

    return {
        mapCandidates,
        candidatesArr,
    }

})()
