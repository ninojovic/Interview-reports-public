var fetchService = (function (){

    var fetchData = function(URL, type, onResolve, onError){
        var xhr = new XMLHttpRequest();
        xhr.open(type, URL);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                response = JSON.parse(xhr.responseText);
                onResolve(response)
            } else {
                onError();
            }
        };

        xhr.onerror = function () {
            onError();
        };

        xhr.send();
    }

    return {
        fetchData,

    }

})()