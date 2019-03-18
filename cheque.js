var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

var questao01,questao02,questao03,questao04,questao05,questao06,
questao07,questao08,questao09,questao10,questao11,questao12,
questao13,questao14,questao15,questao16,questao17,questao18,questao19,questao20;

var x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20;
var tipoA,tipoB,tipoC,tipoD,tipoE;

function calcular(){
    
    questao01 = (form1.sing1.value);
    questao02 = (form2.sing2.value);
    questao03 = (form3.sing3.value);
    questao04 = (form4.sing4.value);
    questao05 = (form5.sing5.value);
    questao06 = (form6.sing6.value);
    questao07 = (form7.sing7.value);
    questao08 = (form8.sing8.value);
    questao09 = (form9.sing9.value);
    questao10 = (form10.sing10.value);
    questao11 = (form11.sing11.value);
    questao12 = (form12.sing12.value);
    questao13 = (form13.sing13.value);
    questao14 = (form14.sing14.value);
    questao15 = (form15.sing15.value);
    questao16 = (form16.sing16.value);
    questao17 = (form17.sing17.value);
    questao18 = (form18.sing18.value);
    questao19 = (form19.sing19.value);
    questao20 = (form20.sing20.value);
    switch(questao01) {
     case "conInt01":
         x1 = 3;
    break;
    case "concordo01":
        x1 = 2;
    break;

    case "conParc01":
        x1 = 1;
    break;
    case "duvida01":
        x1 = 0;
    break;
    case "disParc01":
        x1 = -1;
    break;
    case "discordo01":
        x1 = -2;
    break;
    case "disInt01":
        x1 = -3;
    break;


    default:
    // code block
} 

switch(questao02) {
     case "conInt02":
         x2 = 3;
    break;
    case "concordo02":
        x2 = 2;
    break;

    case "conParc02":
        x2 = 1;
    break;
    case "duvida02":
        x2 = 0;
    break;
    case "disParc02":
        x2 = -1;
    break;
    case "discordo02":
        x2 = -2;
    break;
    case "disInt02":
        x2 = -3;
    break;


    default:
    // code block
} 

switch(questao03) {
     case "conInt03":
         x3 = 3;
    break;
    case "concordo03":
        x3 = 2;
    break;

    case "conParc03":
        x3 = 1;
    break;
    case "duvida03":
        x3 = 0;
    break;
    case "disParc03":
        x3 = -1;
    break;
    case "discordo03":
        x3 = -2;
    break;
    case "disInt03":
        x3 = -3;
    break;


    default:
    // code block
} 
switch(questao04) {
     case "conInt04":
         x4 = 3;
    break;
    case "concordo04":
        x4 = 2;
    break;

    case "conParc04":
        x4 = 1;
    break;
    case "duvida04":
        x4 = 0;
    break;
    case "disParc04":
        x4 = -1;
    break;
    case "discordo04":
        x4 = -2;
    break;
    case "disInt04":
        x4 = -3;
    break;


    default:
    // code block
} 

switch(questao05) {
     case "conInt05":
         x5 = 3;
    break;
    case "concordo05":
        x5 = 2;
    break;

    case "conParc05":
        x5 = 1;
    break;
    case "duvida05":
        x5 = 0;
    break;
    case "disParc05":
        x5 = -1;
    break;
    case "discordo05":
        x5 = -2;
    break;
    case "disInt05":
        x5 = -3;
    break;


    default:
    // code block
} 

switch(questao06) {
     case "conInt06":
         x6 = 3;
    break;
    case "concordo06":
        x6 = 2;
    break;

    case "conParc06":
        x6 = 1;
    break;
    case "duvida06":
        x6 = 0;
    break;
    case "disParc06":
        x6 = -1;
    break;
    case "discordo06":
        x6 = -2;
    break;
    case "disInt06":
        x6 = -3;
    break;


    default:
    // code block
} 

switch(questao07) {
     case "conInt07":
         x7 = 3;
    break;
    case "concordo07":
        x7 = 2;
    break;

    case "conParc07":
        x7 = 1;
    break;
    case "duvida07":
        x7 = 0;
    break;
    case "disParc07":
        x7 = -1;
    break;
    case "discordo07":
        x7 = -2;
    break;
    case "disInt07":
        x7 = -3;
    break;


    default:
    // code block
} 
switch(questao08) {
     case "conInt08":
         x8 = 3;
    break;
    case "concordo08":
        x8 = 2;
    break;

    case "conParc08":
        x8 = 1;
    break;
    case "duvida08":
        x8 = 0;
    break;
    case "disParc08":
        x8 = -1;
    break;
    case "discordo08":
        x8 = -2;
    break;
    case "disInt08":
        x8 = -3;
    break;


    default:
    // code block
} 

switch(questao09) {
     case "conInt09":
         x9 = 3;
    break;
    case "concordo09":
        x9 = 2;
    break;

    case "conParc09":
        x9 = 1;
    break;
    case "duvida09":
        x9 = 0;
    break;
    case "disParc09":
        x9 = -1;
    break;
    case "discordo09":
        x9 = -2;
    break;
    case "disInt09":
        x9 = -3;
    break;


    default:
    // code block
} 

switch(questao10) {
     case "conInt10":
         x10 = 3;
    break;
    case "concordo10":
        x10 = 2;
    break;

    case "conParc10":
        x10 = 1;
    break;
    case "duvida10":
        x10 = 0;
    break;
    case "disParc10":
        x10 = -1;
    break;
    case "discordo10":
        x10 = -2;
    break;
    case "disInt10":
        x10 = -3;
    break;


    default:
    // code block
} 

switch(questao11) {
     case "conInt11":
         x11 = 3;
    break;
    case "concordo11":
        x11 = 2;
    break;

    case "conParc11":
        x11 = 1;
    break;
    case "duvida011":
        x11 = 0;
    break;
    case "disParc11":
        x11 = -1;
    break;
    case "discordo11":
        x11 = -2;
    break;
    case "disInt11":
        x11 = -3;
    break;


    default:
    // code block
} 

switch(questao12) {
     case "conInt12":
         x12 = 3;
    break;
    case "concordo12":
        x12 = 2;
    break;

    case "conParc12":
        x12= 1;
    break;
    case "duvida12":
        x12 = 0;
    break;
    case "disParc12":
        x12 = -1;
    break;
    case "discordo12":
        x12 = -2;
    break;
    case "disInt12":
        x12 = -3;
    break;


    default:
    // code block
} 
switch(questao13) {
     case "conInt13":
         x13 = 3;
    break;
    case "concordo13":
        x13 = 2;
    break;

    case "conParc13":
        x13 = 1;
    break;
    case "duvida13":
        x13 = 0;
    break;
    case "disParc13":
        x13 = -1;
    break;
    case "discordo13":
        x13 = -2;
    break;
    case "disInt13":
        x13= -3;
    break;


    default:
    // code block
} 
switch(questao14) {
     case "conInt14":
         x14 = 3;
    break;
    case "concordo14":
        x14 = 2;
    break;

    case "conParc14":
        x14 = 1;
    break;
    case "duvida14":
        x14 = 0;
    break;
    case "disParc14":
        x14 = -1;
    break;
    case "discordo14":
        x14 = -2;
    break;
    case "disInt014":
        x14 = -3;
    break;


    default:
    // code block
} 

switch(questao15) {
     case "conInt15":
         x15 = 3;
    break;
    case "concordo15":
        x15 = 2;
    break;

    case "conParc15":
        x15 = 1;
    break;
    case "duvida15":
        x15 = 0;
    break;
    case "disParc15":
        x15 = -1;
    break;
    case "discordo15":
        x15 = -2;
    break;
    case "disInt15":
        x15 = -3;
    break;


    default:
    // code block
} 
switch(questao16) {
     case "conInt16":
         x16 = 3;
    break;
    case "concordo16":
        x16 = 2;
    break;

    case "conParc16":
        x16 = 1;
    break;
    case "duvida16":
        x16 = 0;
    break;
    case "disParc16":
        x16 = -1;
    break;
    case "discordo16":
        x16 = -2;
    break;
    case "disInt16":
        x16 = -3;
    break;


    default:
    // code block
} 
switch(questao17) {
     case "conInt17":
         x17 = 3;
    break;
    case "concordo17":
        x17 = 2;
    break;

    case "conParc17":
        x17 = 1;
    break;
    case "duvida17":
        x17 = 0;
    break;
    case "disParc17":
        x17 = -1;
    break;
    case "discordo17":
        x17 = -2;
    break;
    case "disInt17":
        x17 = -3;
    break;


    default:
    // code block
} 
switch(questao18) {
     case "conInt18":
         x18 = 3;
    break;
    case "concordo18":
        x18 = 2;
    break;

    case "conParc18":
        x18 = 1;
    break;
    case "duvida18":
        x18 = 0;
    break;
    case "disParc18":
        x18 = -1;
    break;
    case "discordo18":
        x18 = -2;
    break;
    case "disInt18":
        x18 = -3;
    break;


    default:
    // code block
} 
switch(questao19) {
     case "conInt19":
         x19 = 3;
    break;
    case "concordo19":
        x19 = 2;
    break;

    case "conParc19":
        x19 = 1;
    break;
    case "duvida19":
        x19 = 0;
    break;
    case "disParc19":
        x19 = -1;
    break;
    case "discordo19":
        x19 = -2;
    break;
    case "disInt19":
        x19 = -3;
    break;


    default:
    // code block
} 
switch(questao20) {
     case "conInt20":
         x20 = 3;
    break;
    case "concordo02":
        x20 = 2;
    break;

    case "conParc20":
        x20 = 1;
    break;
    case "duvida20":
        x20 = 0;
    break;
    case "disParc20":
        x20 = -1;
    break;
    case "discordo20":
        x20 = -2;
    break;
    case "disInt20":
        x20 = -3;
    break;


    default:
    // code block
} 

  tipoA = x1+x4+x16+x20;
  tipoB = x2+x3+x9+x19;
  tipoC = x5+x7+x12+x15;
  tipoD = x6+x8+x14+x17;
  tipoE = x10+x11+x13+x18;
  //alert(tipoA);
  
  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        
        var data = new google.visualization.arrayToDataTable([
          ['Move', 'Percentage'],
          ["Fisiológicas", tipoA],
          ["Segurança", tipoB],
          ["Participação", tipoC],
          ["Auto-reconhecimento", tipoD],
          ["Auto-realização", tipoE]
            
          
        ]);

        var options = {
          width: 900,
          legend: { position: 'none' },
          chart: { },
          axes: {
            x: {
              0: { side: 'top', label: 'Gráfico motivacional'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };

     var content = document.getElementsByClassName('container')[0];
document.getElementsByClassName('btn')[0].addEventListener('click',function(){
    content.style.display = "block";
});
document.getElementsByClassName('x')[0].addEventListener('click',function(){
    content.style.display = "none";
});
  

}


     