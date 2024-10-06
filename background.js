chrome.alarms.create("popupAlarm", { 
    periodInMinutes:  1, 
});

chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm triggered")
    if (alarm.name === "popupAlarm") {
        alert("PLEASE WORK.")
    }
});