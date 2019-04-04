function addText(text, id, choice){
    if(choice === 1)
        document.getElementById(id).innerHTML = text + " Have a great day!";
    else 
        document.getElementById(id).innerHTML = text + " ... or not?!";

}