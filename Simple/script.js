function calcular(){
    var n1 = document.getElementById("num1").valueAsNumber;
    var n2 = document.getElementById("num2").valueAsNumber;
    var res = document.getElementById("res")

    if(isNaN(n1) && isNaN(n2)){
        alert("INSIRA NÚMEROS VÁLIDOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        return;
    }

    res.innerHTML = n1 + n2
}