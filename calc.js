
const bt_num_1 = document.getElementById("num_1")
const bt_num_2 = document.getElementById("num_2")
const bt_num_3 = document.getElementById("num_3")
const bt_num_4 = document.getElementById("num_4")
const bt_num_5 = document.getElementById("num_5")
const bt_num_6 = document.getElementById("num_6")
const bt_num_7 = document.getElementById("num_7")
const bt_num_8 = document.getElementById("num_8")
const bt_num_9 = document.getElementById("num_9")
const bt_num_0 = document.getElementById("num_0")
const bt_parentes_ab = document.getElementById("num_(")
const bt_parentes_fc = document.getElementById("num_)")
const bt_op_mais = document.getElementById("op_+")
const bt_op_menos = document.getElementById("op_-")
const bt_op_div = document.getElementById("op_/")
const bt_op_mult = document.getElementById("op_*")
const bt_del = document.getElementById("del")
const bt_enter = document.getElementById("enter")

const res = document.getElementById("res")

function addValor(i){
    res.innerHTML += i;
}

function calcula(){
    try {
        res.innerHTML = eval(res.innerText);
      } catch (error) {
        console.error("Erro ao calcular a expressão:", error);
      }
}

bt_num_1.addEventListener("click", () => addValor("1"));
bt_num_2.addEventListener("click", () => addValor("2"));
bt_num_3.addEventListener("click", () => addValor("3"));
bt_num_4.addEventListener("click", () => addValor("4"));
bt_num_5.addEventListener("click", () => addValor("5"));
bt_num_6.addEventListener("click", () => addValor("6"));
bt_num_7.addEventListener("click", () => addValor("7"));
bt_num_8.addEventListener("click", () => addValor("8"));
bt_num_9.addEventListener("click", () => addValor("9"));
bt_num_0.addEventListener("click", () => addValor("0"));
bt_op_mais.addEventListener("click", () => addValor("+"));
bt_op_menos.addEventListener("click", () => addValor("-"));
bt_op_div.addEventListener("click", () => addValor("/"));
bt_op_mult.addEventListener("click", () => addValor("*"));
bt_parentes_ab.addEventListener("click", () => addValor("("));
bt_parentes_fc.addEventListener("click", () => addValor(")"));

bt_del.addEventListener("click", () => res.innerHTML = res.innerHTML.slice(0, -1));

bt_enter.addEventListener("click", () => calcula());