var img_no=0;
let slide=document.getElementsByClassName("slide");
slide[0].style.display="block";
function slide_change(y){
    slide[img_no].style.display="none";
    img_no+=y;
    img_no%=slide.length;
    if(img_no==-1)
        img_no=7;
    slide[img_no].style.display="block";
};
