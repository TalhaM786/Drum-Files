

var x= document.querySelectorAll(".quran");
for(var i = 0; i< x.length;i++){
    x[i].addEventListener("click", function(){

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

function makeSound(key){
    switch (key) {

        case "w":
            var audio = new Audio("sounds/abdelbasset-abdessamad-001-al-fatiha-660-1859.mp3");
            audio.play();
            break;
        case "a":
                var audio = new Audio("sounds/abdul-rahman-al-sudais-001-al-fatiha-3218-8020.mp3");
                audio.play();
                break;
    
        
         case "s":
                    var audio = new Audio("sounds/abu-bakr-al-shatri-001-al-fatiha-3656-9635.mp3");
                    audio.play();
                    break;   
                    
                    
        case "d":
                        var audio = new Audio("sounds/mahmoud-khalil-al-hussary-001-al-fatiha-2363-3757.mp3");
                        audio.play();
                        break;   
                        
                        
                        case "j":
                            var audio = new Audio("sounds/fares-abbad-001-al-fatiha-1342-8741.mp3");
                            audio.play();
                            break; 
    
                            case "k":
                            var audio = new Audio("sounds/mishary-rashid-alafasy-001-al-fatiha-30-7477.mp3");
                            audio.play();
                            break; 
    
    
                            case "l":
                                var audio = new Audio("sounds/hazaa-al-balushe-001-al-fatiha-106854-3501.mp3");
                                audio.play();
                                break; 
        default:
            break;
    }

}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){ activeButton.classList.remove("pressed")}, 100)
   
}