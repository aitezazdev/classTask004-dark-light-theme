var bodyTag = document.getElementsByTagName("body")[0];

var btn = document.getElementById("btn");

function handleMode(){
    if (btn.textContent == "Night"){
        bodyTag.style.backgroundColor = "#000";
        btn.style.backgroundColor = "#fff";
        btn.style.color = "#000";
        btn.textContent = "Day"
    } else{
        bodyTag.style.backgroundColor = "#fff";
        btn.style.backgroundColor = "#000";
        btn.style.color = "#fff";
        btn.textContent = "Night";
    }
}

btn.addEventListener("click", handleMode);