const headerslider = document.querySelectorAll('.header-slider ul img')
const controlprev = document.querySelector('.control-prev')
const controlnext = document.querySelector('.control-next')
 
let n= 0;

function changeslider() {
    for (let i = 0; i <  headerslider.length; i++) {
        headerslider[i].style.display = 'none' ;
    }
    headerslider[n].style.display = 'block'
}
changeslider();        

controlprev.addEventListener('click', (e)=>{
   if( n > 0){
    n--;
   }else{
    n = headerslider.length -1;
   }
      changeslider();
})
controlnext.addEventListener('click', (e)=>{
   if( n < headerslider.length-1){
    n++;
   }else{
    n = 0;
   }
      changeslider();
})


// const scroll = document.querySelectorAll('.products')

// for (const item of scroll) {
//     item.addEventListener('wheel', (evt)=>{
// evt.preventDefault();
// item.scrollLeft += evt.deltaY;
//     })
// }






