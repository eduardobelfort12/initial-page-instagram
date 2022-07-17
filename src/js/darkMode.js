function Ativar(){
 btn = document.getElementById('dark-mode-btn').checked

 if(btn === true){
    document.getElementById('body').style.backgroundColor = "#4F4F4F"
 }
 else{
    document.getElementById('body').style.backgroundColor =  "#f3f3f3"
 }
}