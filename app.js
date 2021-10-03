var is_show_equal = false;

function style_operator(state){
    document.getElementById('selector').style.left = `${state * 55}px`;
    let operator = document.getElementsByClassName("operator");
    
    for (let i of operator)
        i.style.color = "#ccc";
    
    operator[state].style.color = "red";
}

function sign(char){
    if(char == '.')
        return 1;
    if(char == '+' || char == '-' || char == '*' ||char == '/')
        return 2;
    return 0;
}

function display(key){
    let str = document.getElementById('screen').innerHTML;

    if(key == 'DEL')
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.slice(0, -1);
    
    else if(key == "="){
        document.getElementById('screen').innerHTML = `${eval(document.getElementById('screen').innerHTML)}`;
        is_show_equal = true;
    }
    else if(sign(key) && !sign(str[str.length - 1])){
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML + key;
        is_show_equal = false;
    }
    else if(is_show_equal){
        document.getElementById('screen').innerHTML = key;
        is_show_equal = false;
    }
    else if(!sign(key))
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML + key;
}