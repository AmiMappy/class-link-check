setInterval(() => {
    if(document.URL.indexOf("meet.google.com") !== -1){
        chrome.runtime.sendMessage({accountChooserOpened: true}, (response) => { 
            //console.log(response)
        });
    }
}, 5000);
