var submit = document.getElementById("submit_button");
var settings_form = document.getElementById("settings_form");

settings_form.addEventListener('submit', function(e){
    e.preventDefault();    
    chrome.runtime.sendMessage({notif_method: document.getElementById("notif_method_input_id").value}, (response) => { ; });
})
