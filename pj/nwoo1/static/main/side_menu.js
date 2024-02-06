var side_menu = document.querySelector('.side_menu')
function open_close_menu (){
    if (side_menu.classList[1] == 'out'){
        side_menu.classList.replace('out','in')

    }else if (side_menu.classList[1] == 'in'){
        side_menu.classList.replace('in','out')
    }
}