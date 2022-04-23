document.addEventListener("DOMContentLoaded",()=>{
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const tour = document.querySelector("#tour")
const reset = document.querySelector("#reset")
const timerMinute = document.querySelector("#minute")
const timerSeconde = document.querySelector("#seconde")
const validation = document.querySelector("#valide")
var centieme = 0 
var dixieme = 0 
var seconde =0 
var minute = 0 
var afficher
var sec_
var parametre
var temps

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
       temps= document.getElementById("chrono").innerHTML = afficher;
        
     parametre = setTimeout(chronometer,100);
    
}

function debut(){
    start.addEventListener("click",chronometer)
}

function arret(){
    stop.addEventListener("click",()=>{
        clearTimeout(parametre)
    })

}
function enregistrementTour(){
    tour.addEventListener("click",()=>{
        let tps =document.querySelector("#tps")
        tps.innerHTML=temps
    })
}

function reinitialiser(){
    reset.addEventListener("click",()=>{
        clearInterval()
        centieme = 0 
        dixieme = 0 
        seconde=0 
        minute = 0 
        afficher = minute +":"+ seconde + ":" + dixieme + centieme;
        temps= document.getElementById("chrono").innerHTML = afficher;
        
    })
}
function gettime(){
    validation.addEventListener("click",()=>{
        seconde= timerSeconde.value
        minute=  timerMinute.value
        time = minute + ":" + seconde
        if(seconde<0){
            alert("le temps negatif est impossible")
        }
        if(seconde>59){
            alert("60 secondes egale une minute")
            minute ++ 
            seconde = seconde %60
            time = minute + ":" + seconde
            
        }
        // if (seconde>60) {
        //     console.log(seconde)
        //     var calc = seconde % 60 
        //     // console.log(seconde)
        //     // console.log(calc)
        //     result = seconde - calc
        //     console.log(result)
        //     if (result>60) {
        //         var calcMinute = result / 60
        //     }
        //     var minuteTime = minute + calcMinute
        //     time = calcMinute + ":" + calc
        // }
        // else{
        // time = minute + ":" + seconde
        // }
        console.log(time)
        
    })
   
    
}



gettime()
// add10s()
// minuteur();
reinitialiser()
enregistrementTour()
arret()
debut()
horloge()

})