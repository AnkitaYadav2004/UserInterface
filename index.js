let userinput=document.getElementById("userinput")
let msgbox=document.getElementById("msgbox")
let sendermsg=document.getElementById("sendermsg")
let recivermsg=document.getElementById("recivermsg")

let botmsg=["Hii", "i am fine" , "tell me about you" ]
let index=0;

userinput.addEventListener("change",()=>{
let uservalue=userinput.value;
console.log(uservalue);

let reciverdiv=document.createElement("div");

let senderdiv=document.createElement("div");
senderdiv.innerHTML=`
                <div class="sender" id="sendermsg">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api" height="50px" width="50px"  alt="">
                    <p>${uservalue}</p>
                </div>`

                reciverdiv.innerHTML=`<div class="reciver" id="recivermsg">
                <img src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api" height="50px" width="50px"  alt="">
                <p>${botmsg[index]}</p>
               </div>`   
               senderdiv.classList.add("sender") 
               reciverdiv .classList.add("reciver")        
               msgbox.appendChild(senderdiv)
               msgbox.appendChild(reciverdiv)
               index++;

});



