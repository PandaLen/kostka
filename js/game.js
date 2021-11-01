var hody = [];
var roll = new Audio();
roll.src = "media/dice.mp3";
var zamknuti = 0;

document.getElementById('game').addEventListener('click',
    function () {
        if (zamknuti == 1) return;
        zamknuti = 1;
        hod();
        setTimeout(() => {
            zamknuti = 0;
            console.log(zamknuti)
        }, 3000);
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
        document.getElementById('cube').src = 'img/kostka' + h + '.png';
        document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
        document.getElementById('result').innerHTML +=
            '<p>Počet hodů: ' + hody.length + '</p>';
        document.getElementById('result').innerHTML +=
            '<p>Součet hodů: ' + suma(hody) + '</p>';
        document.getElementById('result').innerHTML +=
            '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>';
        document.getElementById('result').innerHTML +=
            '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
        document.getElementById('result').innerHTML +=
            '<p>Nejmenší hod: ' + minimum(hody) + '</p>';
        return h;
    }, 2500);
}