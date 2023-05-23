console.log("page is ready")

var take_input=document.getElementById("take_input")

var save_value=document.getElementById("save_value")

var localstorage_value=document.getElementById("localstorage_value")

var read_localstorage=document.getElementById("read_localstorage")

var Deletedata=document.getElementById("Deletedata")

save_value.onclick=function(){
    localStorage.setItem("name",take_input.value);
}

read_localstorage.onclick=function(){
    localstorage_value.textContent=localStorage.getItem("name");
}

Deletedata.onclick=function(){
    localStorage.removeItem("name");
}