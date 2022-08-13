const h1 = document.querySelector("div.hello:first-child h1");
 
function handleTitleClick(){
    h1.style.color = "blue";
}
function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick); //클릭하면 작동
h1.addEventListener("mouseenter", handleMouseEnter); // 마우스 올리면 작동
h1.addEventListener("mouseleave", handleMouseLeave); // 마우스 치우면 작동

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// 간단하게는 이렇게!
// h1.onclick = handTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;


