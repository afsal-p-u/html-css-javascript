function input(value){
    if(document.getElementById('string-format').innerText == '0'){
        document.getElementById('string-format').innerText = '';
    }
    document.getElementById('string-format').innerText += `${value}`
}

function clearPanel(){
    document.getElementById('string-format').innerText = '0';
    document.getElementById('output-format').innerText = '0';
}

function back(){
    var delBack = document.getElementById('string-format').innerText;

    document.getElementById('string-format').innerText = delBack.substr(0, delBack.length - 1);

    if(document.getElementById('string-format').innerText.length == 0){
        document.getElementById('string-format').innerText = '0';
    }
}

function resultValue(){
    var stringValue = document.getElementById('string-format').innerText

    var result = eval(stringValue)

    document.getElementById('output-format').innerText = result;
}