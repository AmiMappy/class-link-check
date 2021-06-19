window.addEventListener('load', () => {
    if(document.URL.indexOf("meet.google.com") !== -1){
        chrome.runtime.sendMessage({accountChooserOpened: true}, (response) => { ; });
    }
})
