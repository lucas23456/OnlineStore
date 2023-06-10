let rev = 1
function review_back() {
    if (rev === 1) {
        document.getElementById("review_1").setAttribute("style", "display: none;")
        document.getElementById("review_3").setAttribute("style", "display: flex;")
        rev = 3
    } else if (rev === 2) {
        document.getElementById("review_2").setAttribute("style", "display: none;")
        document.getElementById("review_1").setAttribute("style", "display: flex;")
        rev = 1
    } else if (rev === 3) {
        document.getElementById("review_3").setAttribute("style", "display: none;")
        document.getElementById("review_2").setAttribute("style", "display: flex;")
        rev = 2
    }
}
function review_next() {
    if (rev === 1) {
        document.getElementById("review_1").setAttribute("style", "display: none;")
        document.getElementById("review_2").setAttribute("style", "display: flex;")
        rev = 2
    } else if (rev === 2) {
        document.getElementById("review_2").setAttribute("style", "display: none;")
        document.getElementById("review_3").setAttribute("style", "display: flex;")
        rev = 3
    } else if (rev === 3) {
        document.getElementById("review_3").setAttribute("style", "display: none;")
        document.getElementById("review_1").setAttribute("style", "display: flex;")
        rev = 1
    }
}

let a = 0
function openBurgerMenu() {
    if (a===0) {
        document.getElementById("header_menu").setAttribute("style", "display: block;")
        document.getElementById("span1").setAttribute("style", "display: block; rotate: 45deg; position: relative; top: 10px;")
        document.getElementById("span2").setAttribute("style", "display: none;")
        document.getElementById("span3").setAttribute("style", "display: block; rotate: -45deg; position: relative; top: -10px;")
        document.getElementById("rew_left").setAttribute("style", "display: none;")
        document.getElementById("rew_right").setAttribute("style", "display: none;")
        a += 1
    } else {
        document.getElementById("header_menu").setAttribute("style", "display: none;")
        document.getElementById("tovars").setAttribute("style", "display: none;")
        tovar = 0
        document.getElementById("header_link_tovars_img").setAttribute("style", "rotate: 0deg; transition: 0.5s;")
        document.getElementById("header_burger_link_tovars_img").setAttribute("style", "rotate: 0deg; transition: 0.5s;")
        document.getElementById("span1").setAttribute("style", "display: block; rotate: 0; position: relative; top: 0;")
        document.getElementById("span2").setAttribute("style", "display: block;")
        document.getElementById("span3").setAttribute("style", "display: block; rotate: 0; position: relative; bottom: 0;")
        document.getElementById("rew_left").setAttribute("style", "display: block;")
        document.getElementById("rew_right").setAttribute("style", "display: block;")
        a -= 1
    }
}

let tovar = 0
function menuTovars() {
    if (tovar===0) {
        document.getElementById("tovars").setAttribute("style", "top: 150px;")
        document.getElementById("header_link_tovars_img").setAttribute("style", "rotate: 180deg; transition: 0.5s;")
        document.getElementById("header_burger_link_tovars_img").setAttribute("style", "rotate: 180deg; transition: 0.5s;")
        document.getElementById("footer").setAttribute("style", "top: 1000px;")
        tovar += 1
    } else {
        document.getElementById("tovars").setAttribute("style", "top: -500%;")
        document.getElementById("header_link_tovars_img").setAttribute("style", "rotate: 0deg; transition: 0.5s;")
        document.getElementById("header_burger_link_tovars_img").setAttribute("style", "rotate: 0deg; transition: 0.5s;")
        document.getElementById("footer").setAttribute("style", "top: 0;")
        tovar -= 1
    }
}

let s = 0
function openSearch() {
    if (s===0) {
        document.getElementById("search").setAttribute("style", "display: block;")
        s += 1
    } else {
        document.getElementById("search").setAttribute("style", "display: none;")
        s -= 1
    }
}