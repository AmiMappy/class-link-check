var meetAddr;
var meetTabOpened = false;
setTimeout(() => {    
  if(document.URL.length <= 47){
    try {
      meetAddr = document.getElementsByClassName("QRiHXd")[7].innerText;
    } catch(err){
      if(meetTabOpened === false){
        window.location.reload();
      }
    }
    if ((meetAddr.indexOf("meet.google.com/") !== -1) && (meetTabOpened === false)) {
      chrome.runtime.sendMessage(
        { meetingExists: true, meetAddr: meetAddr }, (response) => {          
          meetTabOpened = true;
        });
    } else {
      if(meetTabOpened === false){
        window.location.reload();
      }
    }
  }
}, 10000);
