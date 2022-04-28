<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="index.js"></script>
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>OCLOCK</h1>
    </header>
    <main>
        <div class="afficheModule">
            <button id="afficheHorloge">HORLOGE</button>
            <button id="afficheChrono">CHRONOMETRE</button>
            <button id="afficheMinuteur">MINUTEUR</button>
            <button id="afficheReveil">REVEIL</button>
        </div>
        <div id="heure">
            <h2>HORLOGE</h2>
            <p id="horloge"></p>
        </div>
        <div id="chronometre">
            <h2>CHRONOMETRE</h2>
            <p id="chrono"></p>
            <div class=button>
                <button id="start">start</button>
                <button id="stop">stop</button>
                <button id="tour">tour</button>
                <button id="reset">reset</button>
            </div>
            <p id="tps"></p>
            <div class="test">
            <div id="tempsTour"></div>
            
            </div>
        </div>
        <div id="minuteur">
            <h2>MINUTEUR</h2>
            <p id="timer"></p>
            <button id="debutTimer">demarrer</button>
            <div id="button">
                <input type="number" id="minute" placeholder="minute">
                <input type="number" id="seconde" placeholder="seconde">
                <button id="valide">validez le temps </button>
            </div>
        </div>
        <div id=reveil>
            <h2>REVEIL</h2>
            <p id="test"></p>
            <p id=reveilA></p>
            <div id="reveilButton">
            <input type="number" id=hours placeholder="heure">
            <input type="number" id=min placeholder="minute">
            <button id="progReveil">programmer</button>
            </div>
        </div>
    </main>
    <footer>
        <p> Copyright : DMW </p>
    </footer>
</body>

</html>