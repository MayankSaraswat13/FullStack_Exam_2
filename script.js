
let my_color = document.querySelector(".body");
let prev_color = null; 
function changeBackground(color)
{
    my_color.classList.add(color);
    my_color.classList.remove(prev_color);
    prev_color = color;
}