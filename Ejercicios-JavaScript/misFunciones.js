/**
 * Conversion de unidddes, de metros, yardas, pies y pulgadas.
 * @method Nombre de la función
 * @param {string} id - El id de los imputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los imputs de metros, yardas, pies o pulgadas
 * @return
 */
function conversorUnidades(id, valor) {
    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        alert("El valor ingresado es incorrecto");
    } else if (id == "metro") {
        document.lasUnidades.unid_yarda.value = Math.round(1.09361 * valor * 100)/100;
        document.lasUnidades.unid_pie.value = Math.round(3.28084 * valor * 100)/100;
        document.lasUnidades.unid_pulgada.value = Math.round(39.3701 * valor * 100)/100;
    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = Math.round(valor * 0.0254 * 100)/100;
        document.lasUnidades.unid_pie.value = Math.round(valor * 0.08333 * 100)/100;
        document.lasUnidades.unid_yarda.value = Math.round(valor * 0.027778 * 100)/100;
    } else if (id == "pie") {
        document.lasUnidades.unid_metro.value = Math.round(valor * 0.3048)/100;
        document.lasUnidades.unid_pulgada.value = Math.round(valor * 12 * 100)/100;
        document.lasUnidades.unid_yarda.value = Math.round(valor * 0.333333 * 100)/100;
    } else if (id == "yarda") {
        document.lasUnidades.unid_metro.value = Math.round(valor * 0.9144 * 100)/100;
        document.lasUnidades.unid_pulgada.value =  Math.round(valor * 36 * 100)/100;
        document.lasUnidades.unid_pie.value =  Math.round(valor * 3 * 100)/100;
    }
}

function convertirGR(id) {
    var grad, rad;
    if (id == "grados"){
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id == "radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    console.log(rad)
    console.log(grad)
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMo){
    if(valorMo== "val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    }else if(valorMo=="val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}

function calcularSuma(){
    var num1, num2;
    num1=document.getElementsByName("sum_num1") [0].value;
    num2=document.getElementsByName("sum_num2") [0].value;
    document.getElementsByName("sum_total") [0].innerHTML=Number(num1) + Number(num2);
}

function calcularResta(){
    var num1, num2;
    num1=document.getElementsByName("res_num1") [0].value;
    num2=document.getElementsByName("res_num2") [0].value;
    document.getElementsByName("res_total") [0].innerHTML=Number(num1) - Number(num2);
}

function calcularMultiplicacion(){
    var num1, num2;
    num1=document.getElementsByName("mul_num1") [0].value;
    num2=document.getElementsByName("mul_num2") [0].value;
    document.getElementsByName("mul_total") [0].innerHTML=Number(num1) * Number(num2);
}

function calcularDivision(){
    var num1, num2;
    num1=document.getElementsByName("div_num1") [0].value;
    num2=document.getElementsByName("div_num2") [0].value;
    document.getElementsByName("div_total") [0].innerHTML=Number(num1) / Number(num2);
}