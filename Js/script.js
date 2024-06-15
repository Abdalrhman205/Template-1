var bar =document.getElementById("bar");
var ulAaa =document.getElementById("ula");
var navIconX =document.getElementById("nav-icon-x");
 
bar.onclick=function(){
    ulAaa.style.visibility="visible";
    bar.style.visibility="hidden";
}

navIconX.onclick=function(){
    ulAaa.style.display="none";
    bar.style.visibility="visible";
}
   
    
