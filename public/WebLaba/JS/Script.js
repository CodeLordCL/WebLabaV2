let mass = [];
let pos = 0;
let i = 0;
function input()
{
    let item = Number(document.getElementById("item").value) 
    if(!isNaN(item))
    {
        mass[pos] = item;  
    }    
    else
    {
        mass[pos] = 0;
    }
    pos += 1;
    showMass();
}
function Sum()
{
    let sum = 0;
    mass.forEach(function(item, i, arr) {
        sum += item;
      })
    return sum;  
}
function showAllHlebMass()
{
    document.getElementById("showAllHlebMass").innerHTML = Sum();
}
function showMass()
{
    document.getElementById("showMass").innerHTML = mass;
}
function noize()
{
    let audio = new Audio();
    audio.preload = 'auto';
    audio.src = "./JS/noize.mp3";
    audio.play();
}
function rainboulTxt()
{

    let color = ["#FF0000", "#FF8000", "#FFFF00", "#80FF00", "#00FFFF", "#0000FF", "#8000FF"];

    document.getElementById("colorC").style.color = color[i];

    i = (i < 7 ? i + 1 : 0);
}
