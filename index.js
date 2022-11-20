var unread = document.getElementsByClassName("unread").length;


document.getElementById('noti').innerHTML = unread;


document.getElementById("all").addEventListener("click",()=>{
  document.querySelectorAll(".unread").forEach((item) => {
    item.classList.remove("unread");

  });
  unread = document.getElementsByClassName("unread").length;
  document.getElementById('noti').innerHTML = unread;
});



document.querySelectorAll(".unread").forEach((item) => {
  item.addEventListener("click",(i)=>{
    item.classList.remove("unread");
    unread = document.getElementsByClassName("unread").length;
    document.getElementById('noti').innerHTML = unread;
  });

});
