const circles = document.querySelectorAll('.circle');
const box = document.querySelector('.box');
console.log(circles);
let z_value= 0;
let x_value =20;
for(let i=0;i<circles.length;i++){
    const divElement = circles[i];
    divElement.style.zIndex = z_value;
    divElement.style.left = `${x_value}px`;
    z_value++;
    x_value+=40;
}

circles.forEach((circle)=>{
    circle.addEventListener("mouseover", () => {
        let x = (circle. offsetLeft + 'px') ;
        box.style.display = "flex";
        box.style.marginLeft = `${x}`;
        box.innerHTML  = circle.innerHTML
    });
    
    circle.addEventListener("mouseout", () => {
        box.style.display = "none";
    });
})