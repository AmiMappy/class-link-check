// var account_no_global;
var notif_method_global;

const messages = [
  "Please join quickly to avoid facing consequences.",
  "Don't you want to know what your friends are up to in this class?",
  "Education is important for your future. Join the class now!",
  "Your teacher is waiting for you. Join quickly.",
  "School can be a lot of fun. Join now to avoid missing out!",
  "Attention comrade! Your time to join the class has come. Make us proud!",
  "Hey there! 👋 Join the class quickly, for it has begun!",
];
const titles = [
  "The Class Has Started",
  "Your Class Has Begun",
  "Class Alert!",
];

var title_index, message_index, random_title, random_message;

var randomMessageGenerator = setInterval(() => {
  title_index = Math.floor(Math.random() * titles.length);
  message_index = Math.floor(Math.random() * messages.length);
  random_title = titles[title_index];
  random_message = messages[message_index];
}, 7000);

chrome.runtime.onInstalled.addListener((reason) => {
  chrome.tabs.create({url: chrome.runtime.getURL("./installation/install.html")}, (tab) => { ; });
});

function classNotification() {
  chrome.notifications.create({
    message: random_message,
    requireInteraction: true,
    silent: false,
    title: random_title,
    iconUrl: "./logos/Meet Check Icon.png",
    type: "basic",
  });
}

function accountChooserNotification(){
  chrome.notifications.create({
    message: "Choose an account to continue",
    requireInteraction: true,
    silent: false,
    title: "Choose Account",
    iconUrl: "./logos/Meet Check Icon.png",
    type: "basic"
  });
}

function classNotify(){
  if (notif_method_global === "window_pop") {
    chrome.windows.getCurrent(window => {
      chrome.windows.update(window.id, { focused: true });
    });
  } else if (notif_method_global === "chrome_notif") {
    classNotification();
  } else {
    chrome.windows.getCurrent(window => {
      chrome.windows.update(window.id, { focused: true });
    });
    classNotification();
  }
}

function accountChooserNotify(){
  if (notif_method_global === "window_pop") {
    chrome.windows.getCurrent(window => {
      chrome.windows.update(window.id, { focused: true });
    });
  } else if (notif_method_global === "chrome_notif") {
    accountChooserNotification();
  } else {
    chrome.windows.getCurrent(window => {
      chrome.windows.update(window.id, { focused: true });
    });
    accountChooserNotification();
  }
}

// console.log("In background script.");
// console.log(`Account No. (before): ${account_no_global}`);
// console.log(`Notification Method: (before): ${notif_method_global}`);

chrome.runtime.onMessage.addListener((message, request, sender) => {  
  if (message.meetingExists === true) {
    chrome.tabs.create({ url: message.meetAddr }).then(tab => {
      // console.log("Meeting tab opened.");       
    });
  }
  if (message.meetingActive === true) {
    // console.log("The meeting is on baby!!"); 
    classNotify();       
  }
  if (message.notif_method) {
    // account_no_global = message.account_no;
    // console.log(`Preferred Account No.: ${message.account_no}`);
    notif_method_global = message.notif_method;    
    // console.log(`Preferred Notification Method: ${message.notif_method}`);    
  }  
  if(message.accountChooserOpened === true){
    accountChooserNotify();
  }  
});
