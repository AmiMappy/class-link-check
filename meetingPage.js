var meetingActive;
window.addEventListener("load", () => {
  meetingActive = false;
  if (document.title.indexOf("Meet - ") !== -1) {
    meetingActive = true;
    chrome.runtime.sendMessage({ meetingActive: true }, (response) => { 
    // console.log(response) 
    });
  }
  if (meetingActive === false) {
    // chrome.runtime.sendMessage({ meetingActive: false }, (response) => { ; });
    setTimeout(() => {
      window.location.reload();
    }, 10000);
  }
});