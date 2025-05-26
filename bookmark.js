let bookmarkForm = document.getElementById("bookmarkForm");

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");

let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let bookmarksListEl = document.getElementById("bookmarksList");

let submitBtnEl = document.getElementById("submitBtn");


siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

function createAndAppendSiteAndUrl() {
    let listItemEl = document.createElement("li");
    listItemEl.classList.add("sites-card-container", "p-4", "mb-4");
    bookmarksListEl.appendChild(listItemEl);

    let siteNameEl = document.createElement("h1");
    siteNameEl.textContent = siteNameInputEl.value;
    siteNameEl.classList.add("result-site-name");
    listItemEl.appendChild(siteNameEl);

    let siteUrl = document.createElement("a");
    siteUrl.href = siteUrlInputEl.value;
    siteUrl.textContent = siteUrlInputEl.value;
    siteUrl.target = "_blank";
    siteUrl.classList.add("result-site-url");
    listItemEl.appendChild(siteUrl);
}

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    submitBtnEl.classList.add("btn", "btn-primary");
    if (siteNameInputEl.value === "" && siteUrlInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.textContent = "Required*";
    } else if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else if (siteNameInputEl.value !== "" && siteUrlInputEl.value !== "") {
        createAndAppendSiteAndUrl();
    }
});