// Button Back
const fBack = function(){
    window.history.back();
    console.log('test przycisku cofania')
};
document.getElementById("back_but").addEventListener('click', fBack);


// Przesuniecie
function przesuniecie(){
    var s = document.getElementById("s").value;
    var sfd = document.getElementById("sfd").value;
    var fi = document.getElementById("fi").value;

    var wynik = ((2 * s) * sfd) / fi;
    document.getElementsByClassName("wynik")[0].innerHTML = Math.round(wynik) + " mm";
};
// Odległość
function odleglosc(){
    var x = document.getElementById("x").value;
    var s = document.getElementById("s").value;
    var fi = document.getElementById("fi").value;

    var wynik = x * fi / (2 * s);
    document.getElementsByClassName("wynik")[0].innerHTML = Math.round(wynik) + " mm";
};
// nowy_czas
function nowy_czas(){
    var t1 = document.getElementById("t1").value;
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;

    var wynik = Math.pow(s2, 2) / Math.pow(s1, 2) * t1;
    document.getElementsByClassName("wynik")[0].innerHTML = Math.round(wynik) + " sekund";
};
// nowa_odległość
function nowa_odleglosc(){
    var s1 = document.getElementById("s1").value;
    var t1 = document.getElementById("t1").value;
    var t2 = document.getElementById("t2").value;

    var wynik = s1 * Math.sqrt(t2 / t1);
    document.getElementsByClassName("wynik")[0].innerHTML = Math.round(wynik) + " mm";
};
// MAX KV
function max_kv(){
  var mat = document.getElementById("wybierz_material").value;
  var grubosc = document.getElementById("t").value;
  var x;
  if(mat == 'fe') { var x = grubosc * 8 + 100 }
  else if( mat == 'al' ) { var x = grubosc * 2 + 50 }

  document.getElementsByClassName("wynik")[0].innerHTML = x + " kV";

};

// ILOŚĆ EKSPOZYCJI
// function ilosc_eksp(){
//     var s1 = document.getElementById("s1").value;
//     var t1 = document.getElementById("t1").value;
//     var t2 = document.getElementById("t2").value;
//
//     var wynik = s1 * Math.sqrt(t2 / t1);
//     document.getElementsByClassName("wynik")[0].innerHTML = Math.round(wynik) + " mm";
// };
