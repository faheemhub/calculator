function display(number){
    document.getElementById('result').value += number
}
function calculate(){
    var val = document.getElementById('result').value;
    var res = eval(val);
    document.getElementById('result').value = res;
}
function clearscr(){
    document.getElementById('result').value = "";
}
function del(){
    var val = document.getElementById('result').value;
    var x = val.toString();
    var y = x.slice(0,-1)
    document.getElementById('result').value = y;

}