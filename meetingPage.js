window.addEventListener('load', () => {
  if (document.title.indexOf("Meet - ") !== -1) {
    meetingActive = true;
    chrome.runtime.sendMessage({ meetingActive: true }, (response) => { 
    // console.log(response) 
    });
  } else {
    setTimeout(() => {
      window.location.reload();
    }, 10000);
  }
})
