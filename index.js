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
    let ht = document.getElementById("heure")
    let CT = document.getElementById("chronometre")
    let MT = document.getElementById("minuteur")
    let RT = document.getElementById("reveil")
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
    let times

    function horloge() {
        const date = new Date;
        var heure = date.getHours();
        var minutes = date.getMinutes();
        var secondes = date.getSeconds();
        heure = (heure < 10) ? "0" + heure : heure;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        secondes = (secondes < 10) ? "0" + secondes : secondes;
        var innerH = document.querySelector('#horloge');
        var time = `${heure}:${minutes}:${secondes}`;
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
            seconde = timerSeconde.value
            minute = timerMinute.value
            let time = minute + ":" + seconde

            if (seconde < 0) {
                alert("le temps negatif est impossible")
            }

            if (seconde > 60) {
                console.log(seconde)
                var calc = seconde % 60
                // console.log(seconde)
                // console.log(calc)
                result = seconde - calc
                // console.log(result + "seconde?")
                if (result >= 60) {
                    var calcMinute = result / 60
                    var resuCalc = parseInt(minute) + parseInt(calcMinute)
                    if (isNaN(parseInt(minute))) {
                        if (true) {
                            resuCalc = calcMinute
                        }
                    }
                    // console.log(resuCalc)
                    minute = resuCalc
                    seconde = calc
                    time = minute + ":" + seconde
                }

            }

            else {
                time = minute + ":" + seconde

            }
            console.log(time)
            timer.innerHTML = time


            return minute && seconde
        })


    }
    function decompteTimer() {
        gettime()

        seconde--
        if (seconde < 0) {
            seconde = 59;
            minute--
        }

        seconde = (seconde < 10) ? "0" + seconde : seconde;
        let time = minute + ":" + seconde
        timer.innerHTML = time
        param = setTimeout(decompteTimer, 1000)
        // console.log(time)
        if (minute <= 0 && seconde <= 0) {
            alert("fin du minuteur")
            clearTimeout(param)
        }
    }

    function startTimer() {
        debutTimer.addEventListener("click", decompteTimer)

    }

    // -------------------------------------------------------------REVEIL--------------------------------------------------------------------
    function getsonne() {
        progReveil.addEventListener("click", () => {
            heure = reveilHeure.value
            minute = reveilMinute.value
            let zeroseconde = "0" + 0
            heure = (heure < 10) ? "0" + heure : heure
            minute = (minute < 10) ? "0" + minute : minute

            timeR = heure + ":" + minute + ":" + zeroseconde


            var reveilA = document.querySelector("#reveilA")
            // reveilA.innerHTML = timeR

            return timeR

        })

    }
    function getReveil() {
        let dateReveil = new Date
        let h = dateReveil.getHours()
        let m = dateReveil.getMinutes()
        let s = dateReveil.getSeconds()
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        let timehorloge = h + ":" + m + ":" + s
        let test = document.querySelector("#test")
        test.innerHTML = timehorloge
        // console.log(timeR)

        setTimeout(getReveil, 1000);
        cocher()
            console.log(times)
        
      
        if (timeR === timehorloge) {
            let sound = new Audio("minuteur.mp3")
            sound.play()

        }
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
            
            // 
        })
        
    }
    
    function selectionReveil() {

        heure = reveilHeure.value
        minute = reveilMinute.value
        let zeroseconde = "0" + 0
        timeR = heure + ":" + minute + ":" + zeroseconde
        let i = 0
        let liste
        let check
        tabTimer.push(timeR)
        tabTimer.forEach(() => { i++ });
        var essaie = document.createElement("input");
        essaie.setAttribute("type", "checkbox");
        check = listeReveil.appendChild(essaie)
        check.id = i
        liste = listeReveil.appendChild(document.createElement("p"))
        liste.id = i
        liste.className = "rListe"
        console.log(liste.id)
        liste.innerHTML = timeR
        check.value = timeR

    }



    function Progreveil() {
        progReveil.addEventListener("click", () => {
            selectionReveil()
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
            clearInterval()
            centieme = 0
            dixieme = 0
            seconde = 0
            minute = 0
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