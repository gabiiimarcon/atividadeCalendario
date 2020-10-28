var data = new Date();

var mes = document.getElementById("nomeMes");
mes.innerHTML = data.toLocaleDateString(navigator.language, {month:"long"});

var nomeDia = document.getElementById("nomeDia");
nomeDia.innerHTML = data.toLocaleDateString(navigator.language, {weekday:"long"});

var dia = document.getElementById("numeroDia");
dia.innerHTML = data.getDate();

var numeroAno = document.getElementById("ano");
numeroAno.innerHTML = data.getFullYear();


function relogio(){
    var data=new Date();
    var hora=data.getHours();
    var min=data.getMinutes();
    var seg=data.getSeconds();
    
    if(hora < 10)
        hora="0"+hora;
    if(min < 10)
        min="0"+min;
    if(seg < 10)
        seg="0"+seg;
     var horas=hora + ":" + min + ":" + seg;
    
     document.getElementById("relogio").innerHTML=horas;
}
    function initTimer() {
    // O metodo nativo setInterval executa uma determinada funcao em um determinado tempo  
    setInterval(relogio,1000);
   }
