const textarea = document.querySelector("textarea"),
voiceList = document.querySelector("select"),
speechBtn = document.querySelector("button");

isSpeaking = true;

// voices();  for some browser that won't support speeches (eg, mozilla)

function voices(){
    for(let voice of speechSynthesis.getVoices()){
        let selected = voice.name === "Microsoft Susan - English (United Kingdom)" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML("beforeend", option)
    }
}

speechSynthesis.addEventListener("voiceschanged", voices)


function  textToSpeech (text){
    let utternance = new SpeechSynthesisUtterance(text)
    for(let voice of speechSynthesis.getVoices()){
        if(voice.name === voiceList.value){
            utternance.voice = voice;
        }
    }
    speechSynthesis.speak(utternance)
}


speechBtn.addEventListener("click", e=>{
    e.preventDefault()
    if(textarea.value !== ""){
        if(!speechSynthesis.speaking){
            textToSpeech (textarea.value)
        }

        // 

       if(textarea.value.length > 80){
        if(isSpeaking){
            speechSynthesis.resume();
            isSpeaking = false;
            speechBtn.innerText = "Pause Speech"
        }
        else{
            speechSynthesis.pause();
            isSpeaking = true;
            speechBtn.innerText = "Resume Speech"
        }

        setInterval(()=>{
            if(!speechSynthesis.speaking && !isSpeaking){
                isSpeaking = true;
                speechBtn.innerText = "Convert to Speech"
            }
        })
    }else{
        speechBtn.innerText = "Convert to Speech"
    }

    // 

    }
})