let requestUrlEl = document.getElementById("requestUrl");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");
let sendRequestBtnEl = document.getElementById("sendRequestBtn");
let consoleFormEl = document.getElementById("consoleForm");

let formData = {
    requestUrl : requestUrlEl.value,
    requestMethod : "POST",
    requestBody : ""
};

requestUrlEl.addEventListener("change", function(event){
    formData.requestUrl = event.target.value;
});
requestMethodEl.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});

function updateUI(jsonData) {
    responseStatusEl.value = jsonData.code;
    responseBodyEl.value = JSON.stringify(jsonData);
}

function sendTheRequest() {
    formData.requestBody = requestBodyEl.value;
    console.log(formData);
    let options = {
    method: formData.requestMethod,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer cac876a104b9b3fdf42b9e2f071e8f655a60e0ac18623de7a0f5f1c786393c7f"
    },
    body: formData.requestBody
};
    fetch(formData.requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            updateUI(jsonData);
            console.log(jsonData);
        });
}

consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});
sendRequestBtnEl.addEventListener("click", sendTheRequest);
