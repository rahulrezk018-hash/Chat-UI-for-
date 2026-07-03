let chats=JSON.parse(localStorage.getItem("chats"))||[];
function SendBox(){
  let text=document.getElementById("text").value;
  let now=new Date();
  let time=now.toLocaleTimeString([],{
  hour:"numeric",
  minute:"2-digit",
  hour12:true
  });
  chats.push({
    text:text,
    time:time
  });
  localStorage.setItem("chats",JSON.stringify(chats));
  update();
}
function update(){
  let showItems=document.getElementById("show-items");
  showItems.innerHTML="";
  text.value="";
  chats.forEach(item=>{
    showItems.innerHTML+=`
    <div class="message3">
  <div class="message-box2">
    <p>${item.text}</p>
    <p class="time">${item.time}</p>
  </div>
</div>
</div>
    `;
  });
}
update();