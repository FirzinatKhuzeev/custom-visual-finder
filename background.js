function setHighlightsToContainer() {
    Array.from(document.getElementsByClassName('visual-sandbox')).forEach((element) => {
        element.style.outlineStyle = element.style.outlineStyle ? null : "solid";
        element.style.outlineColor = element.style.outlineColor ? null : "#FF0000";
    });
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setHighlightsToContainer
        });
    }
});