<script>
    import { onMount } from "svelte";
    // import { browser } from "$app/environment";
    let x = 220;
    let y = 280;
    let x2 = 1200;
    let y2 = 280;
    let step = 5;
    let keysPressed = new Set();
    let ballX = 730;
    let ballY = 300;
    let ballSpeedX = 4;
    let ballSpeedY = Math.floor(Math.random() * 4) + 1;
    let ballSize = 25;
    let stop = true;
    let ez = false;
    let speed = false;

    let score = 0;
    let score2 = 0;
    goal();
    function handleKeyDown(event) {
        keysPressed.add(event.key);
    }

    function handleKeyUp(event) {
        keysPressed.delete(event.key);
    }

    function move() {
        if (ez !== true) return;
        if (keysPressed.has("ArrowLeft")) {
            x2 -= step;
        }
        if (keysPressed.has("ArrowRight")) {
            x2 += step;
        }
        if (keysPressed.has("ArrowUp")) {
            y2 -= step + 1;
        }
        if (keysPressed.has("ArrowDown")) {
            y2 += step + 1;
        }
        if (keysPressed.has("q") || keysPressed.has("Q")) {
            x -= step;
        }
        if (keysPressed.has("d") || keysPressed.has("D")) {
            x += step;
        }
        if (keysPressed.has("z") || keysPressed.has("Z")) {
            y -= step + 1;
        }
        if (keysPressed.has("s") || keysPressed.has("S")) {
            y += step + 1;
        }

        if (x < 0) {
            x = 0;
        }
        if (x > window.innerWidth / 2 - window.innerWidth / 12) {
            x = window.innerWidth / 2 - window.innerWidth / 12;
        }
        if (y < 0) {
            y = 0;
        }
        if (y > window.innerHeight - 150) {
            y = window.innerHeight - 150;
        }

        if (x2 < window.innerWidth / 2 + window.innerWidth / 23) {
            x2 = window.innerWidth / 2 + window.innerWidth / 23;
        }
        if (x2 > window.innerWidth - 18) {
            x2 = window.innerWidth - 17;
        }
        if (y2 < 0) {
            y2 = 0;
        }
        if (y2 > window.innerHeight - 150) {
            y2 = window.innerHeight - 150;
        }
    }
    function start(params) {
        setTimeout(() => {
            ez = true;
        }, 900);
        setTimeout(() => {
            speed = true;
        }, 10000);
        
    }
    onMount(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        setInterval(move, 9);
        setInterval(moveBall, 9);
    });

    function moveBall() {
        if (ez !== true) return;

        // Déplacement de la balle
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Rebond de la balle sur les bords de l'écran
        if (ballX < 0) {
            ballX = 720;
            ballY = 250;
            ballSpeedX = 0;
            ballSpeedY = 0;
            score2++;
            setTimeout(() => {
                goal();
            }, 1000);
        }
        if (ballX > window.innerWidth - ballSize) {
            ballX = 720;
            ballY = 250;
            ballSpeedX = 0;
            ballSpeedY = 0;
            score++;
            setTimeout(() => {
                goal();
            }, 1000);
        }
        if (ballY < 0 || ballY > window.innerHeight - ballSize - 58) {
            ballSpeedY = -ballSpeedY;
        }

        // Rebond de la balle sur les blocs
        if (
            ballX <= x2 + 17 &&
            ballY + ballSize >= y2 &&
            ballY <= y2 + 100 &&
            ballX + ballSize >= x2
        ) {
            if (stop !== true) return;
            stop = false;
            ballSpeedX = -ballSpeedX * 2;
            if (ballSpeedY > 0) {
                ballSpeedY = -(Math.floor(Math.random() * 3) + 2);
            } else {
                ballSpeedY = Math.floor(Math.random() * 3) + 2;
            }
            setTimeout(() => {
                ballSpeedX = ballSpeedX / 2;
                if (speed == true) {
                    if (ballSpeedX == 6 || ballSpeedX == -6) return;
                    if (ballSpeedX > 0) {
                        ballSpeedX = ballSpeedX + 2;
                    } else {
                        ballSpeedX = ballSpeedX - 2;
                    }
                }
            }, 170);
            setTimeout(() => {
                stop = true;
            }, 500);
        }
        if (
            ballX <= x + 17 &&
            ballY + ballSize >= y &&
            ballY <= y + 100 &&
            ballX + ballSize >= x
        ) {
            if (stop !== true) return;
            stop = false;
            ballSpeedX = -ballSpeedX * 2;
            if (ballSpeedY > 0) {
                ballSpeedY = -(Math.floor(Math.random() * 3) + 2);
            } else {
                ballSpeedY = Math.floor(Math.random() * 3) + 2;
            }
            setTimeout(() => {
                ballSpeedX = ballSpeedX / 2;
                if (speed == true) {
                    if (ballSpeedX == 6 || ballSpeedX == -6) return;
                    if (ballSpeedX > 0) {
                        ballSpeedX = ballSpeedX + 2;
                    } else {
                        ballSpeedX = ballSpeedX - 2;
                    }
                }
            }, 170);
            setTimeout(() => {
                stop = true;
            }, 500);
        }
    }
    
    function goal() {
        speed = false;
        setTimeout(() => {
            speed = true;
        }, 10000);
        var start = Math.round(Math.random());
        ballSpeedX = 4;

        ballSpeedY = Math.floor(Math.random() * 4) + 1;
        if (start == 0) {
            ballSpeedX = ballSpeedX;
        } else {
            ballSpeedX = -ballSpeedX;
        }
    }
    
    $: match = ez ? `transition: all 0.8s;  opacity: 0;` : ` display: flex; `;
    $: style = `transform: translate(${x}px, ${y}px);`;
    $: style2 = `transform: translate(${x2}px, ${y2}px);`;
    $: ballStyle = `transform: translate(${ballX}px, ${ballY}px); width: ${ballSize}px; height: ${ballSize}px; border-radius: 50%; background-color: azure;`;
</script>

<p class="score" style="display: flex">{score} : {score2}</p>
<p on:click={start} class="score" id="debut" style={match}>Début</p>

<div style="height: 100vh; width: 100vw;">
    <div class="bloc" {style} />
    <div class="bloc" id="bloc2" style={style2} />
    <div class="balle" style={ballStyle} />
</div>

<style>
    .bloc {
        position: absolute;
        background-color: red;
        width: 17px;
        height: 100px;
    }
    #bloc2 {
        background-color: green;
    }
    .balle {
        position: absolute;

        height: 250px;
        width: 250px;
        background-repeat: round;
    }
    .score {
        position: absolute;
        left: 50%;
        translate: -71%;
        font-size: 45px;
    }
    #debut {
        top: 50%;
    }
</style>
