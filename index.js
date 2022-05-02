document.addEventListener("DOMContentLoaded", () => {
    const start = document.querySelector("#start")
    const stop = document.querySelector("#stop")
    const tour = document.querySelector("#tour")
    const reset = document.querySelector("#reset")
    const timerMinute = document.querySelector("#minute")
    const timerSeconde = document.querySelector("#seconde")
    const validation = document.getElementById("valide")
    const timer = document.querySelector("#timer")
    const debutTimer = document.getElementById("debutTimer")
    const reveilHeure = document.querySelector("#hours")
    const reveilMinute = document.querySelector("#min")
    const progReveil = document.querySelector("#progReveil")
    let listeReveil = document.getElementById("listeReveil")
    let arretMusic = document.querySelector("#stopMusic")
    let ht = document.getElementById("heure")
    let CT = document.getElementById("chronometre")
    let MT = document.getElementById("minuteur")
    let RT = document.getElementById("reveil")
    let sound = new Audio("minuteur.mp3")
    var centieme = 0
    var dixieme = 0
    var seconde = 0
    var minute = 0
    var afficher
    var sec_
    var parametre
    var temps
    var timeR
    let tabTimer = []
    let times =[]
    let sec_onde
    let minu_te



    function horloge() {
        const date = new Date;
        var heures = date.getHours();
        var minutes = date.getMinutes();
        var secondes = date.getSeconds();
        heures = (heures < 10) ? "0" + heures : heures;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        secondes = (secondes < 10) ? "0" + secondes : secondes;
        var innerH = document.querySelector('#horloge');
        var time = `${heures}:${minutes}:${secondes}`;
        // console.log(timvar
        innerH.innerHTML = time;
        setTimeout(horloge, 1000);

    }

    // -----------------------------------------------------CHRONOMETRE-----------------------------------------------------------------------
    function chronometer() {

        setInterval(function () {
            centieme++;
            if (centieme > 9) {
                centieme = 0;

            }
        }, 1);

        dixieme++;
        dixieme * 10;

        if (dixieme > 9) {
            dixieme = 0;
            seconde++;
        }

        if (seconde < 10) {
            sec_ = "0" + seconde;
        }
        if (seconde >= 60) {
            seconde = 0
            minute++
        }
        else {
            sec_ = seconde;
        }

        afficher = minute + ":" + sec_ + ":" + dixieme + centieme;
        temps = document.getElementById("chrono").innerHTML = afficher;

        parametre = setTimeout(chronometer, 100);

    }

    function debut() {
        start.addEventListener("click", () => {
            chronometer()
            start.disabled = true
            stop.disabled = false
            reset.disabled = true
            tour.disabled = false

        })

    }

    function arret() {
        stop.addEventListener("click", () => {
            clearTimeout(parametre)
            stop.disabled = true
            start.disabled = false
            reset.disabled = false
            tour.disabled = true

        })

    }
    function enregistrementTour() {
        tour.addEventListener("click", () => {
            let tps = document.querySelector("#tps")
            // tps.innerHTML = temps

        })
    }

    function reinitialiser() {
        reset.addEventListener("click", () => {
            clearInterval()
            centieme = 0
            dixieme = 0
            seconde = 0
            minute = 0
            afficher = minute + ":" + seconde + ":" + dixieme + centieme;
            temps = document.getElementById("chrono").innerHTML = afficher;

        })
    }
    function addElement() {
        enregistrementTour()
        tour.addEventListener("click", () => {
            console.log(temps)
            var newDiv = document.getElementById("tempsTour");
            var newP = document.createElement("p")
            newDiv.appendChild(newP);
            newP.id = "tpsTour"
            newP.innerHTML = temps
            console.log(newDiv.outerHTML)
            newDiv.after(newP)
        })

    }
    // ----------------------------------------------------------MINUTEUR--------------------------------------------------------------
    function gettime() {
        let but = document.getElementById("button")
        but.display = ""
        debutTimer.style.display = "none"
        validation.addEventListener("click", () => {

            if (but.style.display == "") {
                but.style.display = "none"
                debutTimer.style.display = ""
            }
            sec_onde = timerSeconde.value
            minu_te = timerMinute.value
            let time = minu_te + ":" + sec_onde

            if (sec_onde < 0) {
                alert("le temps negatif est impossible")
            }

            if (sec_onde > 60) {
                console.log(sec_onde)
                var calc = sec_onde % 60
                // console.log(seconde)
                // console.log(calc)
                result = sec_onde - calc
                // console.log(result + "seconde?")
                if (result >= 60) {
                    var calcMinute = result / 60
                    var resuCalc = parseInt(minu_te) + parseInt(calcMinute)
                    if (isNaN(parseInt(minu_te))) {
                        if (true) {
                            resuCalc = calcMinute
                        }
                    }
                    // console.log(resuCalc)
                    minu_te = resuCalc
                    sec_onde = calc
                    time = minu_te + ":" + sec_onde
                }

            }

            else {
                time = minu_te + ":" + sec_onde

            }
            console.log(time)
            timer.innerHTML = time


            return minu_te && sec_onde
        })


    }
    function decompteTimer() {
        gettime()

        sec_onde--
        if (sec_onde < 0) {
            sec_onde = 59;
            minu_te--
        }

        sec_onde = (sec_onde < 10) ? "0" + sec_onde : sec_onde;
        let time = minu_te + ":" + sec_onde
        timer.innerHTML = time
        param = setTimeout(decompteTimer, 1000)
        // console.log(time)
        if (minu_te <= 0 && sec_onde <= 0) {
            alert("fin du minuteur")
            clearTimeout(param)
        }
    }

    function startTimer() {
        
        debutTimer.addEventListener("click", decompteTimer)

    }

    // -------------------------------------------------------------REVEIL--------------------------------------------------------------------

    function getReveil() {
        let dateReveil = new Date
        let h = dateReveil.getHours()
        let m = dateReveil.getMinutes()
        let s = dateReveil.getSeconds()
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        let timehorloge = h + ":" + m + ":" + s
        let test = document.querySelector("#test")
        test.innerHTML = timehorloge
        // console.log(timeR)

        setTimeout(getReveil, 1000);
        cocher()
        times.forEach(reveil => {
            console.log(reveil)
            if (reveil === timehorloge) {
                
                sound.play()
    
            }
        });  
    }
    function cocher() {
        window.addEventListener("click", () => {
            times = []
            var getvalue = document.querySelectorAll('input[type=checkbox]:checked')
            getvalue.forEach(tabtimes => {
                times.push(tabtimes.value)
                // console.log(times)
                return times
            });
        })  
    }
    function selectionReveil() {

       let hours = reveilHeure.value
        let min_ute = reveilMinute.value
        
        if (hours >23) {
            hours = 7
        }
        if (min_ute > 59) {
            min_ute = 0
        }
        if (hours == "" && min_ute=="") {
            alert("reveil pour 7 heure n'essaie pas de gruger ")
            hours= "7"
            min_ute = "0"
        }
        let zeroseconde = "0" + 0
        hours = (hours < 10) ? "0" + hours : hours;
        min_ute = (min_ute < 10) ? "0" + min_ute : min_ute;
        timeR = hours + ":" + min_ute + ":" + zeroseconde
        let liste
        let check
        tabTimer.push(timeR)
        var essaie = document.createElement("input");
        essaie.setAttribute("type", "checkbox");
        check = listeReveil.appendChild(essaie)
        liste = listeReveil.appendChild(document.createElement("p"))
        liste.className = "rListe"
        liste.innerHTML = timeR
        check.value = timeR
    }
    function Progreveil() {
        progReveil.addEventListener("click", () => {
            selectionReveil()
        })
    }
    function stopmusic(){
        arretMusic.addEventListener("click",()=>{
            sound.pause();
            sound.currentTime = 0;
        
        })
    }
    stopmusic()
    // --------------------------------------------------------- affichage-----------------------------------------------------------
    function showHide() {
        let afficheHorloge = document.getElementById("afficheHorloge")
        var afficheChrono = document.querySelector("#afficheChrono")
        var afficheMinuteur = document.querySelector("#afficheMinuteur")
        var afficheReveil = document.querySelector("#afficheReveil")
        let general = document.getElementById("general")

        ht.style.display = ""
        CT.style.display = "none"
        MT.style.display = "none"
        RT.style.display = "none"
        afficheHorloge.addEventListener("click", () => {
            if (ht.style.display == "none") {
                ht.style.display = ""
                CT.style.display = "none"
                MT.style.display = "none"
                RT.style.display = "none"
            }


        })
        afficheChrono.addEventListener("click", () => {
            if (CT.style.display == 'none') {
                CT.style.display = ""
                ht.style.display = "none"
                MT.style.display = "none"
                RT.style.display = "none"
            }
        })
        afficheMinuteur.addEventListener("click", () => {
            
            if (MT.style.display == 'none') {
                CT.style.display = "none"
                ht.style.display = "none"
                MT.style.display = ""
                RT.style.display = "none"
            }
        })
        afficheReveil.addEventListener("click", () => {
            ht.style.display = "none"
            CT.style.display = "none"
            MT.style.display = "none"
            RT.style.display = ""
        })
    }




    Progreveil()
    showHide()
    addElement()
    getReveil()
    startTimer()
    gettime()
    reinitialiser()
    enregistrementTour()
    arret()
    debut()
    horloge()

})