var meetAddr;
setTimeout(() => {
  meetAddr = document.getElementsByClassName("QRiHXd")[7].innerText;
  console.log(meetAddr);
  if (meetAddr.indexOf("meet.google.com/") !== -1) {
    chrome.runtime.sendMessage(
      { meetingExists: true, meetAddr: meetAddr }, (response) => {
        // console.log(response);
      });
  } else {
    window.location.reload();
  }
}, 10000);