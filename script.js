//shoe heading color change
document.getElementById("shoesHeading").style.color="red";

//Backpack heading backgroundcolor change
document.getElementById("headingBackpack").style.backgroundColor="skyblue";
// document.getElementsByTagName("h2")[1].style.color="teal";

// document.getElementsByClassName("card")[0].style.backgroundColor="red";

//all card bgcolor,borderRadius change
let Cards=document.getElementsByClassName("card");
for(let allCards of Cards){
    allCards.style.borderRadius="40px";
    allCards.style.backgroundColor="skyblue";
}

//all button bgColor change
let bgchange=document.getElementsByClassName("panda-button-buy-now");
for(let allButtonBgChange of bgchange){
    allButtonBgChange.style.backgroundColor="magenta";
}
// bgColor,color,fontsize will change when button(id="myButton" ) is click
function allChange(){
    document.getElementById("myButton").style.backgroundColor="black";
    document.getElementById("myButton").style.color="white";
    document.getElementById("myButton").style.fontSize="30px";
}


// delete button
    // let allButtonSelect=document.getElementsByClassName("myFirstButton");
    //     for(let selectButton of allButtonSelect){
    //         console.log("all button has selected");
    //     }
        
        // document.getElementById("dlt-btn").style.display="none";

        // function everyButton()
        // {
           
        //     let allButtonSelect=document.getElementsByClassName("myFirstButton");
            
        // for(let selectButton of allButtonSelect){
        //     selectButton.addEventListener("click",function(event){
        //        console.log(event.target);
        //     })
        // }
        // }
            let allButton=document.getElementsByClassName("myFirstButton");
            for(let button of allButton){
            button.addEventListener("click",function(event){
            // console.log(event.target.value);
            // event.target.disabled=true;
            event.target.remove();
            
      
   })
}

    //Submit button 
    document.getElementById("del-confirm").addEventListener("keyup",function(event){
        let delButton=document.getElementById("de-sub");
        let text=event.target.value;
        if(text==="abcd@gmail.com"){
            delButton.removeAttribute("disabled");
            
        }
        else{
            delButton.setAttribute("disabled",true);
        }
    })
    document.getElementById("de-sub").addEventListener("click",function(){
        let hidden=document.getElementById("de-sub");
        hidden.style.display="none";
    })