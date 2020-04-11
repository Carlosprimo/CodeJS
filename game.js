
let matriz;
let resolution = 40;
let columnas;
let filas;

function setup() {

    createCanvas(600, 600);
    columnas = width / resolution;
    filas = height / resolution;

    matriz = creandoMatriz(filas, columnas);
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = floor(random(2));

        }

    }
}

function draw() {
    background(0);
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (matriz[i][j] == 1) {
                fill(255);
                stroke(0);
                rect(x, y, resolution, resolution);
            }
        }
    }
    let next = new Array(filas, columnas);
    next = matriz;
    verificarVecinos(next);
    matriz = next;
    sleep(0.1);
}

function creandoMatriz(filas, columnas) {

    let matriz = new Array(filas);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(columnas);
    }
    return matriz;
}

function verificarVecinos(mat) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            let vecinosVivos = 0;
            if ((i > 0 & i < matriz.length - 1) & (j > 0 & j < matriz.length - 1)) {

                vecinosVivos += matriz[i - 1][j - 1];
                vecinosVivos += matriz[i - 1][j];
                vecinosVivos += matriz[i - 1][j + 1];
                vecinosVivos += matriz[i][j - 1];
                vecinosVivos += matriz[i][j + 1];
                vecinosVivos += matriz[i + 1][j - 1];
                vecinosVivos += matriz[i + 1][j];
                vecinosVivos += matriz[i + 1][j + 1];

            } else {
                if (i == 0 & j == 0) {
                    vecinosVivos += matriz[i][j + 1];
                    vecinosVivos += matriz[i + 1][j + 1];
                    vecinosVivos += matriz[i + 1][j];
                }
                if (i == 0 & j == matriz.length - 1) {
                    vecinosVivos += matriz[i][j - 1];
                    vecinosVivos += matriz[i + 1][j - 1];
                    vecinosVivos += matriz[i + 1][j];
                }
                if (i == matriz.length - 1 & j == 0) {
                    vecinosVivos += matriz[i - 1][j];
                    vecinosVivos += matriz[i - 1][j + 1];
                    vecinosVivos += matriz[i][j + 1];
                }
                if (i == matriz.length & j == matriz.length - 1) {
                    vecinosVivos += matriz[i][j - 1];
                    vecinosVivos += matriz[i - 1][j - 1];
                    vecinosVivos += matriz[i - 1][j];
                }
                if (j == 0 & i > 0 & i < matriz.length - 1) {
                    vecinosVivos += matriz[i - 1][j + 1];
                    vecinosVivos += matriz[i][j + 1];
                    vecinosVivos += matriz[i + 1][j + 1];
                    vecinosVivos += matriz[i - 1][j];
                    vecinosVivos += matriz[i + 1][j];
                }
                if (i == 0 & j > 0 & j < matriz.length - 1) {
                    vecinosVivos += matriz[i + 1][j - 1];
                    vecinosVivos += matriz[i + 1][j];
                    vecinosVivos += matriz[i + 1][j + 1];
                    vecinosVivos += matriz[i][j - 1];
                    vecinosVivos += matriz[i][j + 1];
                }
                if (i == matriz.length - 1 & j < matriz.length - 1 & j > 0) {
                    vecinosVivos += matriz[i - 1][j - 1];
                    vecinosVivos += matriz[i - 1][j];
                    vecinosVivos += matriz[i - 1][j + 1];
                    vecinosVivos += matriz[i][j - 1];
                    vecinosVivos += matriz[i][j + 1];
                }
                if (j == matriz.length - 1 & i < matriz.length - 1 & i > 0) {
                    vecinosVivos += matriz[i][j - 1];
                    vecinosVivos += matriz[i - 1][j - 1];
                    vecinosVivos += matriz[i + 1][j - 1];
                    vecinosVivos += matriz[i - 1][j];
                    vecinosVivos += matriz[i + 1][j];
                }
            }
            if (matriz[i][j] == 0 & vecinosVivos == 3) {
                mat[i][j] = 1;
            }
            if (matriz[i][j] == 1 & vecinosVivos < 2 || vecinosVivos > 3) {
                mat[i][j] = 0;
            }
        }

    }
}
function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}