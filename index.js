display_time=()=>{
    f_time=new Date();
    day=f_time.getDate();console.log(day);
    if(f_time.getMinutes()<10)
        minute='0'+f_time.getMinutes();
    else
        minute=f_time.getMinutes();
    if(f_time.getHours()<10)
        hour='0'+f_time.getHours();
    else
        hour=f_time.getHours();
    if(f_time.getSeconds()<10)
        second='0'+f_time.getSeconds();
    else
        second=f_time.getSeconds();    
    
    //  time="TIME: "+f_time.getHours()+":"+f_time.getMinutes()+":"+f_time.getSeconds();
    time="TIME:"+hour+":"+minute+":"+second; 
    document.querySelectorAll('.scontainer')[0].innerHTML=time;
   
}
setInterval(display_time,1000);