document.addEventListener("DOMContentLoaded",()=>{
const start = document.querySelector("#start")
var centieme = 0 
var dixieme = 0 
var seconde =0 
let minute = 0 
let compteur
var afficher
var sec_;


function horloge(){
const date=new Date;
var heure = date.getHours();
var minutes =date.getMinutes();
var secondes = date.getSeconds();
heure = (heure < 10) ? "0" + heure : heure;
minutes = (minutes < 10) ? "0" + minutes : minutes;
secondes = (secondes < 10) ? "0" + secondes : secondes;
var innerH = document.querySelector('#horloge');
var time = `${heure}:${minutes}:${secondes}`;
// console.log(timvar
innerH.innerHTML=time;
setTimeout(horloge,1000);
}

function chronometer(){


    // document.querySelector("#chrono").innerHTML = "0" + minute +":" + "0" + seconde +":" + centi + milli
        setInterval(function (){
            centieme++;
                if (centieme > 9) {
                    centieme = 0;
                    
                }
        }, 1);
        
        dixieme++;
        dixieme*10;
       
        if (dixieme > 9) {
            dixieme = 0;
            seconde++;
        }  

        if (seconde < 10) {
            sec_ = "0" + seconde;
        }
        if (seconde>=60) {
            seconde=0
            minute++
        }
        else {
            sec_ = seconde;
        }
            
        afficher = minute +":"+ sec_ + ":" + dixieme + centieme;
        document.getElementById("chrono").innerHTML = afficher;
        
      setTimeout(chronometer,100);
    
}
start.addEventListener("click",chronometer())


// chronometer()
horloge()

})