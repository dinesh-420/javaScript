let switchStatus=document.getElementById("switchStatus");
let onSwitch=document.getElementById("onSwitch");
let offSwitch=document.getElementById("offSwitch");
let bulbImg=document.getElementById("bulbImage");
let catImg=document.getElementById("catImage");
function switchOff(){
    switchStatus.textContent="Switched Off";
    onSwitch.style.backgroundColor="#cbd2d9";
    offSwitch.style.backgroundColor="red";
    bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
}

function switchOn(){
    switchStatus.textContent="Switched on";
    onSwitch.style.backgroundColor="green";
    offSwitch.style.backgroundColor="#cbd2d9";
    bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
}