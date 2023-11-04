var historyElement = document.querySelector('.history')
historyElement.onmousedown = function(e){
    e.preventDefault()
}

var subMenuMobile = document.querySelector('#header__submenu')
    subMenuMobile.onclick = function(){
        document.querySelectorAll('#id_submenu-mobile').style.display = 'block'
}
var subMenuMobileNone = document.querySelector('#header__submenu')
    subMenuMobileNone.onclick = function(){
        document.querySelector('#overlay-submenu-1').style.display = 'block'
}
var subMenuMobileNone = document.querySelector('#overlay-submenu-1')
    subMenuMobileNone.onclick = function(){
        document.querySelector('.overlay-submenu').style.display = 'none'
}





var searchMobileNone = document.querySelector('#label__search-id')
    searchMobileNone.onclick = function(){
        document.querySelector('#search__mobile-down-mobile').style.display = 'block'
}
var searchMobileNone2 = document.querySelector('#label__search-id')
    searchMobileNone2.onclick = function(){
        document.querySelector('#search__mobile-down-mobile').style.display = 'none'
}







var subMenuMobileNone = document.querySelector('.submenu-mobile-item:nth-child(1)')
    subMenuMobileNone.onclick = function(){
        document.querySelector('.overlay-submenu').style.display = 'block'
}
var subMenuMobileNone = document.querySelector('.submenu-mobile-item:nth-child(2)')
    subMenuMobileNone.onclick = function(){
        document.querySelector('.overlay-submenu').style.display = 'block'
}
var subMenuMobileNone = document.querySelector('.submenu-mobile-item:nth-child(3)')
    subMenuMobileNone.onclick = function(){
        document.querySelector('.overlay-submenu').style.display = 'block'
}
var subMenuMobileNone = document.querySelector('.submenu-mobile-item:nth-child(4)')
    subMenuMobileNone.onclick = function(){
        document.querySelector('.overlay-submenu').style.display = 'block'
}
// var subMenuMobileNone = document.querySelector('.overlay-submenu')
//     subMenuMobileNone.onmousedown = function(e){
//         e.preventDefault()
// }




