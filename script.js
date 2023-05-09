// alert("Mire se erdhet ne Tech Store");

const data = new Date();
document.getElementById("ora").innerHTML = data;

var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "/dark theme icon/sun.png";
    } else {
        icon.src = "/dark theme icon/moon.png";
    }
}



var produkti = document.querySelectorAll('.produkti');
var shfaq = document.querySelector('.shfaqmeshume');

var produktetaktuale = 0;
shfaq.addEventListener('click', function () {
    for (var i = produktetaktuale; i < produktetaktuale + 10; i++) {
        if (produkti[i]) {
            produkti[i].style.display = 'block';
        }
    }
    produktetaktuale += 10;
    if (produktetaktuale >= produkti.length) {
        event.target.style.display = 'none';
    }

});


document.getElementById("log").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".fa-times-circle").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
})