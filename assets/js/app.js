var app = (function(fetchService, constants, data, reportsView, candidatesView, errorView) {

    var candidatesUrl = constants.BASE_URL + "candidates";

    fetchService.fetchData(candidatesUrl, "GET", mapAndDisplayCandidatesView, errorView.errorMsg())

    function mapAndDisplayCandidatesView(rawData) {
        var candidateInstances = data.mapCandidates(rawData);
        candidatesView.displayCandidates(candidateInstances, displayReportsView);
    }

    function displayReportsView(candidateId) {
        var candidateInfo = findCandidate(data.candidatesArr, candidateId);
        reportsView.displayCandidateInfo(candidateInfo);
    }

    return {
        displayReportsView,
    }

})(fetchService, constants, data, reportsView, candidatesView, errorView)