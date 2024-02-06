var before = document.querySelector('.before')
var after = document.querySelector('.after')
var tape = document.querySelector('.tape')

var temp_num = ((tape.childElementCount * -404) + 454)

function pic_before(){
    if (parseInt(tape.style.left.slice(0,-2)) >= temp_num+404){
        var temp = (parseInt(tape.style.left.slice(0,-2)) - 404)
        tape.style.left = temp.toString() + 'px'
    }else{
        tape.style.left = (50).toString() + 'px'
    }
}

function pic_after(){
    if (parseInt(tape.style.left.slice(0,-2)) <= -354 ){
        var temp = (parseInt(tape.style.left.slice(0,-2)) + 404)
        tape.style.left = temp.toString() + 'px'
    }else{
        tape.style.left = (temp_num).toString() + 'px'
    }
}