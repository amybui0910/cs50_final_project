// timer
chrome.alarms.create("popupAlarm", { 
    periodInMinutes:  5, 
});

// notification
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "popupAlarm") {
        console.log("Alarm triggered"); // testing
        chrome.windows.create( {
            url: chrome.runtime.getURL("popup.html"), 
            type: "popup",
            width: 400, 
            height: 300
        }); 
    }
});
