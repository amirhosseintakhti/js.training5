const ziad = document.getElementById("ziad");
const natijeh = document.getElementById("natijeh");
const kam = document.getElementById("kam");
natijeh.value = 0;

function FN (x){
    if( x == '+'){
        natijeh.value++;
    }
    else{
        if(natijeh.value >0){
            natijeh.value --;
        }
        else{
            console.log("ja nadare");
        }
    }
}