/**
 * index.js
 * - All our useful JS goes here, awesome!
 */


var medias = document.querySelectorAll('.icon-media');

var c = document.getElementById("content-media").children;
var btn = document.getElementById('container');

 btn.addEventListener("mouseout",  function(e){
        
       for( var i = 0 ;i<c.length;i++){
            c[i].style.transform = `translate3d(-500%,0,0)`;
            //c[i].style.transition = `${i}00ms ease-out`;
        }
    });
 btn.addEventListener("mouseover",  function(e){
        
       for( var i = 0 ;i<c.length;i++){
            c[i].style.transform = `translate3d(0,0,0)`;
           
            c[i].style.transition = `${i}00ms ease-out`;
        }
    });

        
medias.addEventListener('transitionend', function(){
    medias.style.transform = `rotate(0)`;
})
   
