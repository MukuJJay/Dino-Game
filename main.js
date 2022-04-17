// setting up vars and consts
const mc = document.getElementById("char");
const ac = document.getElementById("enemy");

// setting up jump key 
document.addEventListener("keydown", jump);

function jump(){
    if (mc.classList != "jump"){
        mc.classList.add("jump");
    setTimeout(() => {
        mc.classList.remove("jump");
    }, 500);
}
}




// collison logic 

setInterval(() => {
    let mcy = parseInt(window.getComputedStyle(mc).getPropertyValue("top"));
    let acx = parseInt(window.getComputedStyle(ac).getPropertyValue("left"));
    if (acx > 50 && acx < 105 && mcy >= 312) {
        alert("game over");
        ac.style.position = "absolute";
        ac.style.right = "0px";
    }
    console.log(acx,mcy);
},10)

