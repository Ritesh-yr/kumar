const button = document.getElementById("btn");
const lop = document.getElementsByClassName("sape");

button.onclick = () => {

    if(button.innerText == "Next"){
    lop[1].innerHTML = "Watch Now";
    lop[2].innerHTML = "Share Market";
    lop[3].innerHTML = "Games";
    lop[4].innerHTML = "Animation";

    }else{
        lop[1].innerHTML = "Upcoming";
        lop[2].innerHTML = "Live";
        lop[3].innerHTML = "Movies";
        lop[4].innerHTML = "Drama";
    
    }

    if(button.innerText == "Watch Now"){
        open("wt.html");
    }
     
    bheem();
}


bheem = function (){

    if(button.innerText === "Next"){
        button.innerText = "Back";

    }else{
        if(button.innerText === "Back"){
            button.innerText = "Next";
    
    
    }
    
    }
}
var button_1 = document.getElementById("btt");


const search = document.getElementById("sr");
search.onkeyup = () =>{
const frt = document.getElementsByClassName("ts"); 
let ramo = document.getElementById("sr").value;
    ramo = ramo.toLowerCase();
var ram = 0;
    do{
        
        if(!frt[ram].innerText.toLowerCase().includes(ramo)){
            frt[ram].style.display = "none";
        }else{
            frt[ram].style.display = "list-item";
        }

        ram++;
    }while(ram <frt.length);
    


}

