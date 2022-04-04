var i;
var x;
var keyPressed;
var item=document.getElementsByClassName('drum');
document.addEventListener('keydown',function(event){
    keyPressed=event.key;
    for(i=0;i<7;i++)
    {
        item[i].classList.remove('pressed');
    }
    switch(keyPressed)
    {
        case 'w':
            var z=new Audio("sounds/tom-1.mp3");
            item[0].classList.add('pressed');
            break;
        case 'a':
            var z=new Audio("sounds/tom-2.mp3");
            item[1].classList.add('pressed');
            break;
        case 's': 
            var z=new Audio("sounds/tom-3.mp3");
            item[2].classList.add('pressed');
            break;
        case 'd':
            var z=new Audio("sounds/tom-4.mp3");
            item[3].classList.add('pressed');
            break;
        case 'j':
            var z=new Audio("sounds/crash.mp3");
            item[4].classList.add('pressed');
            break;
        case 'k':
            var z=new Audio("sounds/kick-bass.mp3");
            item[5].classList.add('pressed');
            break;
        case 'l':
            var z=new Audio("sounds/snare.mp3");
            item[6].classList.add('pressed');
            break;
        default :
            var z=new Audio("..");   
    }
    z.play();
});
function music(input)
{
    for(i=0;i<7;i++)
    {
        item[i].classList.remove('pressed');
    }
    switch(input)
    {
        case 'w':
            var z=new Audio("sounds/tom-1.mp3");
            item[0].classList.add('pressed');
            break;
        case 'a':
            var z=new Audio("sounds/tom-2.mp3");
            item[1].classList.add('pressed');
            break;
        case 's': 
            var z=new Audio("sounds/tom-3.mp3");
            item[2].classList.add('pressed');
            break;
        case 'd':
            var z=new Audio("sounds/tom-4.mp3");
            item[3].classList.add('pressed');
            break;
        case 'j':
            var z=new Audio("sounds/crash.mp3");
            item[4].classList.add('pressed');
            break;
        case 'k':
            var z=new Audio("sounds/kick-bass.mp3");
            item[5].classList.add('pressed');
            break;
        case 'l':
            var z=new Audio("sounds/snare.mp3");
            item[6].classList.add('pressed');
            break;
        default :
            var z=new Audio("..");   
    }
    z.play();
}