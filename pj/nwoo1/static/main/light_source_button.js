var body = document.querySelector('#body')
function change_lightning (){
    if (body.classList.contains('white_body')){
        body.classList.remove('white_body')
    }else{
        body.classList.add('white_body')
    }
}