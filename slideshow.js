var img=document.getElementById('image');
var play= document.getElementById('play');
var stopinterval= document.getElementById('stop');
var interval;


play.onclick= function changeslide(){
    var img_array=["red (copy).png","orange (copy).png","green (copy).png"],
            count=0;
            console.log(count);
    
    interval= setInterval(function(){
         img.setAttribute('src',img_array[count]);
         if(count<img_array.length-1)
         {
            count++
         }else{
             count=0;
         }
        
     },1000);
}

stopinterval.onclick=function stop()
{
   clearInterval(interval);
}
