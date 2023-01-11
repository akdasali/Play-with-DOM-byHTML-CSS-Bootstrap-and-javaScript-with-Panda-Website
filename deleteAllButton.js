
// document.getElementById("one-button").addEventListener("click",function(){
// // for(let selectAllButton of allButton){
// //     console.log("all button is clicked");
// // }
//    this.style.display="none";
// })

let allButton=document.getElementsByClassName("all-delete");
for(let button of allButton){
   button.addEventListener("click",function(event){
      // console.log(event.target.value);
      // event.target.disabled=true;
      event.target.remove();
   })
}