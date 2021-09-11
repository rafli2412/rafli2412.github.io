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
    alert("Because Hey, your name's literally means 'Healer'.")
    alert("And hell, How I've feeled you cure my wound so damn good.")
}

//color change

function colorChange(clr) {
    var root = document.querySelector(':root');
    var className = '.' + clr.classList[1];
    var classStyles = document.querySelector(className)
    var rootColor = getComputedStyle(root);
    var classColor = getComputedStyle(classStyles);
    var c1 = ' rgb(255, 235, 201)';
    var c1_0 = 'rgb(255, 235, 201)';
    var c2 = ' rgb(229, 228, 204)';
    var c2_0 = 'rgb(229, 228, 204)';
    var c3 = ' rgb(248, 237, 227)';
    var c3_0 = 'rgb(248, 237, 227)';
    var c4 = ' rgb(212, 236, 221)';
    var c4_0 = 'rgb(212, 236, 221)';
    var c5_0 = 'rgb(230, 62, 109)';

    // console.log(clr.classList);
    console.log(classColor.getPropertyValue('background-color'));
    console.log(c1_0 == classColor.getPropertyValue('background-color'));
    
    // console.log(rootColor.getPropertyValue('--color-1'));

    if (classColor.getPropertyValue('background-color') == c1 || classColor.getPropertyValue('background-color') == c1_0) {
        root.style.setProperty('--color-1', 'rgb(255, 235, 201)');
        root.style.setProperty('--color-2', 'rgb(215, 151, 113)');
        root.style.setProperty('--color-3', 'rgb(176, 91, 59)');
        root.style.setProperty('--color-4', 'rgb(117, 52, 34)');
    } else if (classColor.getPropertyValue('background-color') == c2 || classColor.getPropertyValue('background-color') == c2_0) {
        root.style.setProperty('--color-1', 'rgb(229, 228, 204)');
        root.style.setProperty('--color-2', 'rgb(186, 199, 167)');
        root.style.setProperty('--color-3', 'rgb(136, 158, 129)');
        root.style.setProperty('--color-4', 'rgb(105, 132, 116)');
    } else if (classColor.getPropertyValue('background-color') == c3 || classColor.getPropertyValue('background-color') == c3_0) {
        root.style.setProperty('--color-1', 'rgb(248, 237, 227)');
        root.style.setProperty('--color-2', 'rgb(189, 210, 182)');
        root.style.setProperty('--color-3', 'rgb(162, 178, 159)');
        root.style.setProperty('--color-4', 'rgb(121, 135, 119)');
    } else if (classColor.getPropertyValue('background-color') == c4 || classColor.getPropertyValue('background-color') == c4_0) {
        root.style.setProperty('--color-1', 'rgb(212, 236, 221)');
        root.style.setProperty('--color-2', 'rgb(52, 91, 99)');
        root.style.setProperty('--color-3', 'rgb(21, 45, 53)');
        root.style.setProperty('--color-4', 'rgb(17, 32, 49)');
    } else if (classColor.getPropertyValue('background-color') == c5_0) {
        root.style.setProperty('--color-1', 'white');
        root.style.setProperty('--color-2', 'rgb(180, 43, 81)');
        root.style.setProperty('--color-3', 'rgb(125, 25, 53)');
        root.style.setProperty('--color-4', 'rgb(66, 5, 22)');
    } 
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
