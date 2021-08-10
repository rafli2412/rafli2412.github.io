var countDate = new Date ("May 16, 2021 03:06:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    
    var distance = now - countDate;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="demo"
    document.getElementById("day-count").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000)

//Random Name and Age
var birthDate = new Date ("May 06, 2001 00:00:01").getTime();
const nameSyifa = ["Syifa Meidiana", "सिफ़ा मीडियाना", "시파 메이디아나", "シファ", "西法·梅迪亚纳", "西法·梅迪亞納", "سيفا ميديانا", "ซิฟา เมเดียนา", "ស៊ីហ្វាហ្វាមេឌីយ៉ាណា", "шифа"];

var y = setInterval(function() {
        var now = new Date().getTime();

        var days = now - birthDate;
        var Age = Math.floor(days / (1000 * 60 * 60 * 24 * 365));

        const random = Math.floor(Math.random() * nameSyifa.length);
        document.getElementById("name").innerHTML = nameSyifa[random] + ", " + Age;
},1000)

//alert
function FewAlert() {
    alert("You're Worth It.");
    alert("You're Loveable.");
    alert("You deserve the good things in world.");
    alert("You're Perfect.");
    alert("Im glad that I've been able to be on your side.");
    alert("Because Hey, you're name's literally means 'Healer'.")
    alert("And hell, How I've feeled you cure my wound so damn good.")
}

//button
let button = document.getElementById("btn1");

function buttonChangeOver() {
    button.innerHTML = "Click Me";
}

function buttonChangeOut() {
    button.innerHTML = "HmmMmm...";
}

//images
function expandImg(imgs) {
    var expImg = document.getElementById("expandedImg");
    var source = String(imgs.src).replace("/thumbnail", "");
    expImg.src = source;
    expImg.parentElement.style.display = "block";
}

function expandImg2(imgs) {
    var expImg = document.getElementById("expandedImg2");
    var source = String(imgs.src).replace("/thumbnail", "");
    expImg.src = source;
    expImg.parentElement.style.display = "block";
}

//Card
let iconCard = document.querySelectorAll(".icon-container");
let icon = document.querySelectorAll(".material-icons");
let title = document.querySelectorAll(".card-title");
let cardContent = document.querySelectorAll(".card-content");
let card = document.querySelectorAll(".card");
let iconName = [];
for (let i = 0; i<iconCard.length; i++) {
    iconCard[i].onclick = function() {
        if (icon[i].innerHTML != "close") {
            iconName[i] = icon[i].innerHTML;
            icon[i].innerHTML = "close";
        } else {
            icon[i].innerHTML = iconName[i];
        }

        iconCard[i].classList.toggle('active');
        icon[i].classList.toggle('active');
        title[i].classList.toggle('active');
        cardContent[i].classList.toggle('active');
        card[i].classList.toggle('active');
    }
}