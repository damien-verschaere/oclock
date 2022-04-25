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
        <div class="heure">
            <h2>HORLOGE</h2>
            <p id="horloge"></p>
        </div>
        <div class="chronometre">
            <h2>CHRONOMETRE</h2>
            <p id="chrono"></p>
            <div class=button>
                <button id="start">start</button>
                <button id="stop">stop</button>
                <button id="tour">tour</button>
                <button id="reset">reset</button>
            </div>
            <div>
                <p id="tps"></p>
            </div>
        </div>
        <div id="minuteur">
            <h2>MINUTEUR</h2>
            <p id="timer"></p>
            <div class="button">
                <input type="number" id="minute" placeholder="minute">
                <input type="number" id="seconde" placeholder="seconde">
                <button id="valide">validez le temps </button>
            </div>
        </div>
    </main>
</body>

</html>