function printValue(sliderID, rangeValue) {
    var x = document.getElementById(rangeValue);
    var y = document.getElementById(sliderID);
    x.value = y.value;
 }
function slideValue(sliderID, rangeValue){
    var x = document.getElementById(rangeValue);
    var y = document.getElementById(sliderID);
    y.value = parseInt(x.value);
}

window.onload = function() { printValue('slide1', 'rangeValue1'); }

function countExperience(target) {
     var target = target.classList;
     var  sumButtle = document.getElementById("rangeValue1").value;
     var result =[];
    var num = 0;
    if(target == "standart"){
        num = sumButtle * 3;
        result.push(num);
       showResult(result);
        
    }else if(target == "elite"){
        num = sumButtle * 3 * 1.1;
         result.push(num);
        showResult(result); 
        
    }else if(target == "premium"){
        num = sumButtle * 3 * 1.2;
         result.push(num);
        showResult(result); 
        
    }
}



function showResult(result) {
    var resultValue = document.getElementsByClassName("resultValue")[0];
    resultValue.innerHTML = '';
    for(var i = 0; i< result.length; i++){
        var a = document.createElement("div");
        a.appendChild(document.createTextNode(result[i]));
        resultValue.appendChild(a);
    }
  
}


//var form = document.getElementsByTagName('form');
//form.onclick = function (event) {
//    var standart = document.getElementById(standart);
//    var elite = document.getElementById(elite);
//    var premium = document.getElementById(premium);
//    var result = 0;
//    if (event.target.classList.contains('standart')) {
//        result = sumButtle * 3;
//        console.log(result);
//    }
//    return;
//}
