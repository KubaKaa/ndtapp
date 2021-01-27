// document.getElementById("obl_pod").addEventListener(click, xik);
xDiv = document.getElementById("match_x");
kDiv = document.getElementById("match_k");
yDiv = document.getElementById("match_y");
sfdDiv = document.getElementById("match_sfd");


divMatch = document.getElementById("matchAmountExp");
//Zamiana let na var--------------------------------------------------------------------------------!
var de = document.getElementById("de").value;
var t = document.getElementById("t").value;
var sfd;
var y;
var k = de / sfd;

var x = t / de;

//Event aktualizujący info
window.addEventListener('keyup', ()=>{
  de = document.getElementById("de").value;
  t = document.getElementById("t").value
  k = de / sfd;
});


const selectSource = document.getElementById('choiceSource');
selectSource.addEventListener('change', function(){
    if (document.getElementById('choiceSource').value=="I"){
        //usunięcie let przed sfd---------------------------------------------------------------------------------!
        sfd = 10;
        console.log(sfd)
    } else if (document.getElementById('choiceSource').value=="L"){
        sfd = 120;
        console.log(sfd)
    };
    //definicja k żeby pokazywała numer, możesz to też dodać w funkcji xik na samym dole---------------------------------------------------------------------------------!
k = de/sfd;
}, false);
document.getElementById('Oblicz').addEventListener(onclick, console.log(sfd), false);

// xik
function xik(){

    

    // let xPow = Math.pow(x, 2);
    
    // xDiv.innerHTML = x.toFixed(3);
    // kDiv.innerHTML = k.toFixed(3);
    // sfdDiv.innerHTML = sfd;

    // klasa A

    const aA = [0, 0.915750915750915, 1.38026224982747, 1.05683073779891, 1.80062231115101, 2.38095238095239, 2.08333333333332]
    const bA = [0, 0.650183150183151, 0.986887508626639, 1.60782266975212, 2.01405867586714, 2.45238095238095, 3.16666666666667]
    const cA = [2, 1.2, 0.9, 0.531537181812496, 0.14984150423649, -0.24, -0.656875000000001]

    // klasa B

    const aB = [0, 0.76623, 1.30952381, 0.378787879, 1.082251082, 1.137955182, 1.493272514, 2.738095238, 1.851851852, 8.333333333]
    const bB = [0, 0.428441558, 0.572619048, 1.166666667, 1.352813853, 1.706057423, 2.005620859, 1.975, 2.685185185, 0.25]
    const cB = [2, 1.375, 1.175, 0.914659091, 0.65, 0.375, 0.089394324, -0.164880952, -0.477037037, -0.458333333]
    


    let wyniki = [];
    if (document.getElementById('choiceClassExam').value=="a"){

        for (i = 0; i < aA.length; i++ ){
                wyniki.push(aA[i] * Math.pow(x, 2) + bA[i] * x + cA[i])
                // if (wyniki[i] > 0 ){
                //     console.log(wyniki[i])
                // };
                console.log(wyniki[i])
            }

            console.log(`nasze k ${k}`);
            } else if (document.getElementById('choiceClassExam').value=="b"){
                for (i = 0; i < aB.length; i++ ){
                    wyniki.push(aB[i] * Math.pow(x, 2) + bB[i] * x + cB[i])
                    // if (wyniki[i] > 0 ){
                    //     console.log(wyniki[i])
                    // };
                    console.log(wyniki[i])
                }

                console.log(`nasze k ${k}`);
             };
        


    // wydruk wyników
    // for (i = 0; i < wyniki.length; i++){
    //     console.log(wyniki[i])};

    let bestMatch = [];
    for (i = 0; i < wyniki.length; i++){
        bestMatch.push(wyniki[i] - k);
        console.log(`wynik pod odjęciu k - wartość funkcji ${bestMatch[i]}`)}

    
    console.log(Math.min(...bestMatch.filter(x => x > 0)));


    // wydruk wyników najbliższych do k
    // for (i = 0; i < wyniki.length; i++){
    //     console.log(`wyniki ${bestMatch[i]}`)};

    // najmniejszy wynik wydruk
    // console.log(Math.min(...bestMatch))

    // usunięcie wyników ujemnych 
    // let lastMatch = [];
    // for (i = 0; i < bestMatch.length; i++){
    //     if(bestMatch[i] >= 0){
    //         lastMatch = (Math.min(bestMatch))
    //     }}

    // let closest = bestMatch.reduce((a, b) => {
    //     let aDiff = Math.abs(a - k);
    //     let bDiff = Math.abs(b - k);

    //     if (aDiff == bDiff) {
    //         // Choose largest vs smallest (> vs <)
    //         return a > b ? a : b;
    //     } else {
    //         return bDiff < aDiff ? b : a;
    //     }
    // });

    // console.log(`najbliższy wybik ${closest}`);


    // console.log(`Liczba ekspozycji ${wyniki.indexOf(closest) + 2}`);
    // console.log(`to ilość ekspozycji ${bestMatch.indexOf(Math.min(...bestMatch.filter(x => x > 0)))+2}`);
    divMatch.innerHTML = bestMatch.indexOf(Math.min(...bestMatch.filter(x => x > 0)))+2;
    // console.log(sfd);

};

