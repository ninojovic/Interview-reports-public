function findCandidate(candidateArr, candidateIdToFind){
    for (var i = 0; i < candidateArr.length; i++){
        var candidate = candidateArr[i];
        if (candidate.id == candidateIdToFind) {
            return candidateArr[i];
        }
    }

    return false;
}