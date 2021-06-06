window.addEventListener('load', () => {
    chrome.runtime.sendMessage({accountChooserOpened: true}, (response) => { 
        //console.log(response)
    });
})
