const head=document.head
const body=document.body

const estilo="<link rel='stylesheet' href='asserts/css/topo.css'>"
head.innerHTML+=estilo

const style="<script src='asserts/js/scripts.js' defer></script>"
head.innerHTML+=style

const topo=document.createElement("header")
topo.setAttribute("class","menu_pagina")
body.prepend(topo)

const menu=
    
         "<nav class='menu_pagina__nav-bar'>"+
            "<div class='logo_menu'>"+
                "<img src='asserts/img/logo-removebg-preview.png'>"+
            "</div>"+
           "<div class='menu_pagina__nav-list'>"+
                "<ul>"+
                    "<li class='menu_pagina__nav-item'> <a href='index.html' class='menu_pagina__nav-link'>Home</a></li>"+
                    "<li class='menu_pagina__nav-item'> <a href='sobre_nos.html' class='menu_pagina__nav-link'>Sobre</a></li>"+
                    "<li class='menu_pagina__nav-item'> <a href='dados_facilitados.html' class='menu_pagina__nav-link'>Dados</a></li>"+
                    "<li class='menu_pagina__nav-item'> <a href='cartilha.html' class='menu_pagina__nav-link'>Cartilhas</a></li>"+
                    "<li class='menu_pagina__nav-item'> <a href='contato.html' class='menu_pagina__nav-link'>Contatos</a></li>"+
                "</ul>"+
            "</div>"+
            "<div class='menu_pagina__login-button'>"+
                
            "</div>"+

            "<div class='menu_pagina__mobile-menu-icon'>"+
                "<button onclick='menuShow()'><img class='icon' src='asserts/img/menu_white_36dp.svg' alt=''></button>"+
            "</div>"+
        "</nav>"+            
        "<div class='menu_pagina__mobile-menu'>"+
            "<ul>"+
                "<li class='menu_pagina__nav-item'> <a href='index.html' class='menu_pagina__nav-link'>Home</a></li>"+
                "<li class='menu_pagina__nav-item'> <a href='sobre_nos.html' class='menu_pagina__nav-link'>Sobre</a></li>"+
                "<li class='menu_pagina__nav-item'> <a href='dados_facilitados.html' class='menu_pagina__nav-link'>Dados</a></li>"+
                "<li class='menu_pagina__nav-item'> <a href='cartilha.html' class='menu_pagina__nav-link'>Cartilhas</a></li>"+
                "<li class='menu_pagina__nav-item'> <a href='contato.html' class='menu_pagina__nav-link'>Contatos</a></li>"+
            "</ul>"+

            
        "</div>"+
    "</header>"
topo.innerHTML+=menu



