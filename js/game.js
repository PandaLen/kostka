var hody = [];
var roll = new Audio();
roll.src = "media/dice.mp3";
var lose = new Audio();
lose.src = "media/lose.mp3";
var win = new Audio();
win.src = "media/win.mp3";
var noBid = new Audio();
noBid.src = "media/bid.mp3";
var cg = new Audio();
cg.src = "media/cg.mp3";
var nice = new Audio();
nice.src = "media/nice.mp3";

var zamknuti = 0;
let sum;
let bid = null;

document.getElementById('game').addEventListener('click',
    function () {
        if (zamknuti == 1) return;
        zamknuti = 1;
        hod();
        validateBids(sum, bid);
        setTimeout(() => {
            zamknuti = 0;
            console.log(zamknuti)
        }, 3500);
        hody.length = 0;
        console.log(hody);
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function (value, index) {
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    roll.play();
    setTimeout(function () {
        var h = Math.ceil(Math.random() * 6);
        hody.push(h);
        document.getElementById('cube2').src = 'img/kostka' + h + '.png';
        return h;
    }, 2700);
    setTimeout(function () {
        var h = Math.ceil(Math.random() * 6);
        hody.push(h);
        document.getElementById('cube').src = 'img/kostka' + h + '.png';
        document.getElementById('result').innerHTML = '<p><b>Statistiky:</b></p>';
        document.getElementById('result').innerHTML +=
            '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>';
        document.getElementById('result').innerHTML +=
            '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
        document.getElementById('result').innerHTML +=
            '<p>Nejmenší hod: ' + minimum(hody) + '</p>';
        document.getElementById('result').innerHTML +=
            '<p><b>Součet hodů: ' + suma(hody) + '</b></p>';
        sum = suma(hody);
        return h;
    }, 2700);
}

function validateForm() {
    let doc = document.forms["magie"]["kod"].value;
    if (doc == "") {
        document.getElementById('cheat').innerHTML += `<div class="mt-3 alert alert-danger alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Musíte zadat kód</strong> 
      </div>
      
      <script>
        $(".alert").alert();
      </script>`
        return false;
    }
}

function saveBid(){
    bid = document.forms["sazka"]["typ"].value;
    console.log(bid);
    return bid;
}

function validateBids() {
    setTimeout(() => {
        if (bid == null) {
            noBid.play();
            document.getElementById('vysledek').innerHTML = `<p class="bezSazky"><b>Nezadal jste sázku!</b></p>`
        } else if (sum > 7 && bid.toLowerCase() == "vyšší než 7") {
            win.play();
            document.getElementById('vysledek').innerHTML = `<p class="vysledekVyhra"><b>Vyhrál jste</b></p>`
        } else if (sum == 7 && bid.toLowerCase() == "rovné 7") {
            win.play();
            document.getElementById('vysledek').innerHTML = `<p class="vysledekVyhra"><b>Vyhrál jste</b></p>`
        } else if (sum < 7 && bid.toLowerCase() == "nižší než 7"){
            win.play();
            document.getElementById('vysledek').innerHTML = `<p class="vysledekVyhra"><b>Vyhrál jste</b></p>`
        } else {
            lose.play();
            document.getElementById('vysledek').innerHTML = `<p class="vysledekProhra"><b>Prohrál jste</b></p>`
        }
        console.log(sum, bid);
    }, 2700);
}

function fun() {
    let doc = document.forms["magie"]["kod"].value;
    if (doc.toLowerCase() == "duha" || doc.toLowerCase() == "rainbow" || doc.toLowerCase() == "barvičky") {
        document.getElementById('disco').classList.add('duha');
        document.getElementById('disco2').classList.add('duha');
        document.getElementById('disco3').classList.add('duha');
        document.getElementById('disco4').classList.add('duha');
        document.getElementById('game').classList.add('duha');
        document.getElementById('cube').classList.add('duhacube');
        document.getElementById('cube2').classList.add('duhacube');
    } else if (doc.toLowerCase() == "dvojník" || doc.toLowerCase() == "dvojnik" ||doc.toLowerCase() == "godo") {
        open("https://youtu.be/ntin_xPSrbM", "_blank");
    } else if (doc.toLowerCase() == "godomat" || doc.toLowerCase() == "godo mat") {
        open("https://r1ckyy.github.io/Hazardni-hra/", "_blank");
    } else if (doc.toLowerCase() == "výhra" || doc.toLowerCase() == "win" || doc.toLowerCase() == "vyhraj" || doc.toLowerCase() == "rig"){
        cg.play();
        cg.loop = true;
        document.body.innerHTML = `<h1 class="cg"><b>Congratulations</b></h1>`;
        document.body.classList.add("cg2");
    } else if (doc == "69"){
        nice.play();
    } else if (doc == ":)"){
        document.body.innerHTML = ``;
        document.body.innerHTML += `<img src="img/smile.png" alt="smile">`;
        document.body.classList.add("smile");
    }
}