  var display = document.getElementById('display');
  var botones = document.getElementsByClassName("tecla");
  var numero1;
  var numero2;
  var operacion;

   for (let i = 0; i < botones.length; i++) {
   botones[i].addEventListener("mousedown", function() {
   botones[i].style.padding = "2px";
   });
   botones[i].addEventListener("mouseup", function() {
   botones[i].setAttribute("style", "padding=0");
   });
 };

 var  numeros = [
     document.getElementById('1'),
     document.getElementById('2'),
     document.getElementById('3'),
     document.getElementById('4'),
     document.getElementById('5'),
     document.getElementById('6'),
     document.getElementById('7'),
     document.getElementById('8'),
     document.getElementById('9'),
     document.getElementById('0'),
   ];
   var condicional = display.length;
   function mostrar(num) {
     condicional++
     if( display.innerHTML === "0"){
     display.innerHTML = num
   }else{
       display.innerHTML += num
   }
   }
   numeros[0].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("1")
     }
   })
   numeros[1].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("2")
     }
   })
   numeros[2].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("3")
     }
   })
   numeros[3].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("4")
     }
   })
   numeros[4].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("5")
     }
   })
   numeros[5].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("6")
     }
   })
   numeros[6].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("7")
     }
   })
   numeros[7].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("8")
     }
   })
   numeros[8].addEventListener('click', function() {
     if (condicional < 8 ){
       mostrar("9")
     }
   })
   numeros[9].addEventListener('click', function() {
   if(display.innerHTML === "0"){

   }else if(condicional < 8 ){
     mostrar("0")
   }
   })
   function resetear(){
     numero1=0;
     numero2=0;
     operacion="";
   }
   function resolver(){
     var res = 0;
     switch (operacion) {
               case "+":
                 res = parseFloat(numero1) + parseFloat(numero2);
                 break;
               case "-":
                 res = parseFloat(numero1) - parseFloat(numero2);
                 break;
               case "*":
                 res = parseFloat(numero1) * parseFloat(numero2);
                 break;
               case "/":
                 res = parseFloat(numero1) / parseFloat(numero2);
                 break;
     }

             resetear();
             display.innerHTML = res;
   }

   var signos = [
     document.getElementById('on'),
     document.getElementById('sign'),
     document.getElementById('punto'),
     document.getElementById('igual'),
   ]
   signos[0].addEventListener("mousedown",function(){
   display.innerHTML="0";
   condicional = 0;
   resetear();
   })
   signos[2].addEventListener("click",function(){
     var texto = display.innerHTML;
     var sPto = texto.indexOf(".")
     if(sPto == -1){
       condicional++
       display.innerHTML += "."
     }
   })
   signos[1].addEventListener("click",function(){
     var texto2 = display.innerHTML;
     var sMenos = texto2.indexOf("-")
     if(sMenos == -1){
       condicional++
       display.innerHTML = display.innerHTML * (-1)
     }
     else {
        condicional--
        display.innerHTML = display.innerHTML * (-1)
     }
   })
   signos[3].addEventListener("click",function(){
     numero2= display.innerHTML;
     resolver();

   })
   var operaciones = [
     document.getElementById('dividido'),
     document.getElementById('por'),
     document.getElementById('menos'),
     document.getElementById('mas'),
   ]
   function limpiar(){
     display.innerHTML= "";
   }

   operaciones[3].onclick = function(){
     numero1 = display.innerHTML;
     operacion = "+"
     limpiar();
   }
   operaciones[2].onclick = function(){
     numero1 = display.innerHTML;
     operacion = "-"
     limpiar();
   }
   operaciones[1].onclick = function(){
     numero1 = display.innerHTML;
     operacion = "*"
     limpiar();
   }
   operaciones[0].onclick = function(){
     numero1 = display.innerHTML;
   operacion = "/"
     limpiar();
   }
