const phoneVector = document.querySelectorAll(".iphone-vector");
const macVector = document.querySelectorAll(".mac-vector");

console.log("scroll:" + window.scrollY);
console.log("phone is:" + phoneVector[0].offsetTop);
console.log(window.innerHeight);

window.addEventListener('scroll', function parallax() {

    console.log("scroll:" + window.scrollY);
    console.log("phone is:" + phoneVector[0].offsetTop);

    var value = window.scrollY; 
    var parallaxPhone = (value / 76.8) * -4;
    var parallaxPC = value * -0.05;


    phoneVector[0].style.top = 90 + parallaxPhone + "%";
    phoneVector[1].style.top = 110 + parallaxPhone + "%";
    macVector[0].style.top = 80 + parallaxPC + "px";
    macVector[1].style.top = 100 + parallaxPC + "px";

    // macVector.style.top = parallaxPhone * 2;
    }
);


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }




function heroBottomRotateFix () {

    const heroBottom = document.querySelector(".hero--bottom");
    var currentViewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    
    const heroBottomStyles = window.getComputedStyle(heroBottom)
    var heroRotateDeg = heroBottomStyles.getPropertyValue("--heroRotate");

    
    const calculateTan = Math.tan(parseFloat(heroRotateDeg) * Math.PI / 180) * currentViewportWidth;
    const lengthTan = Math.abs(calculateTan);
    heroBottom.style.setProperty("--hero-margin", lengthTan + "px")

    console.log(heroRotateDeg)

}
heroBottomRotateFix();
window.onresize = heroBottomRotateFix;
