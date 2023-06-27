// Index
let burger = 0
function openBurger() {
    if (burger === 0) {
        document.getElementById("burger_nav").setAttribute("style", "display: flex;")
        document.getElementById("bur1").setAttribute("style", "rotate: 45deg;")
        document.getElementById("bur2").setAttribute("style", "display: none;")
        document.getElementById("bur3").setAttribute("style", "rotate: -45deg; position: relative; bottom: 12px;")
        
        burger = 1
    }
    else if (burger === 1) {
        document.getElementById("burger_nav").setAttribute("style", "display: none;")
        document.getElementById("bur1").setAttribute("style", "rotate: 0;")
        document.getElementById("bur2").setAttribute("style", "display: block;")
        document.getElementById("bur3").setAttribute("style", "rotate: 0; position: relative; bottom: 0;")
        burger = 0
    }
}

let inner = 0
const interval = setInterval(function() {
    inner++
    if (inner === 10) {
        document.getElementById("inner1").setAttribute("style", "background: url('https://img4.goodfon.ru/original/2048x1365/4/a2/salo-bekon-kartofel-fri-piure-salat.jpg') no-repeat;")
        document.getElementById("change_info_block1_p").setAttribute("style", "display: none;")
        document.getElementById("change_info_block1_h2").setAttribute("style", "display: none;")
        document.getElementById("change_info_block2_p").setAttribute("style", "display: block; font-size: 50px;")
    }
    if (inner === 20) {
        document.getElementById("inner1").setAttribute("style", "background: url('https://mobimg.b-cdn.net/v3/fetch/e6/e6c11117d6cf89a5c592ff121161fa5e.jpeg') no-repeat;")
        document.getElementById("change_info_block1_p").setAttribute("style", "display: block;")
        document.getElementById("change_info_block1_h2").setAttribute("style", "display: block;")
        document.getElementById("change_info_block2_p").setAttribute("style", "display: none;")
        inner = 0
    }
}, 1000)

// Other
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

// Login
function open_block_auth() {
    document.getElementById("login").setAttribute("style", "display: flex;")
    document.getElementById("register").setAttribute("style", "display: none;")

    document.getElementById("a_log").setAttribute("style", "color: #000; border-bottom: 3px solid #098bb4; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;")
    document.getElementById("a_reg").setAttribute("style", "color: #858585; border-bottom: none;")
}
function open_block_reg() {
    document.getElementById("login").setAttribute("style", "display: none;")
    document.getElementById("register").setAttribute("style", "display: flex;")

    document.getElementById("a_log").setAttribute("style", "color: #858585; border-bottom: none;")
    document.getElementById("a_reg").setAttribute("style", "color: #000; border-bottom: 3px solid #098bb4; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;")
}
