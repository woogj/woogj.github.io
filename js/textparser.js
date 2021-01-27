
function runParser() {
    var textareaVal;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            textareaVal = document.getElementById('app-textarea').value;
            if(textareaVal ==""){
                alert("Please enter your text");
                return false;
            }
        }
        xhr.open('POST','http://localhost:8080/api',true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(textareaVal);
        // alert(textareaVal);
    }
}