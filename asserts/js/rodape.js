

    const footerTemplate = document.createElement('template');

    footerTemplate.innerHTML =`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Footer Design</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
  </head>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    body{
        line-height: 1.5;
        font-family: 'Poppins', sans-serif;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    .container{
        max-width: auto,0px;
        margin:auto;
    }
    .row{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ul{
        list-style: none;
    }
    .footer{
        background-color: #24262b;
        padding: 10px 0 ;
       
    }
    .footer-col{
       width: 25%;
       padding: 0 50px;
    }
    
    .footer-col p{
        color: #ffffff;
    
    }
    .footer-col h4{
        font-size: 18px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
    }
    .footer-col h4::before{
        content: '';
        position: absolute;
        left:0;
        bottom: -10px;
        background-color: darkorange;
        height: 2px;
        box-sizing: border-box;
        width: 70px;
    }
    .footer-col ul li:not(:last-child){
        margin-bottom: 10px;
    }
    .footer-col ul li a{
        font-size: 16px;
        text-transform: capitalize;
        text-decoration: none;
        font-weight: 300;
        color: #bbbbbb;
        display: block;
        transition: all 0.3s ease;
    }
    .footer-col ul li a:hover{
        color: darkorange;
        padding-left: 8px;
    }
    .footer-col .social-links a{
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255,255,255,0.2);
        margin:0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.5s ease;
    }
    .footer-col .social-links a:hover{
        color: #24262b;
        background-color: darkorange;
    }
    .bottom-bar{
        background: #f18930;
        text-align: center;
        padding: 10px 0;
        margin-top: 50px;
    }
    .bottom-bar p{
        color: #ffff;
        margin: 0;
        font-size: 16px;
        padding: 7px;
    }
    
    /*responsive*/
    @media(max-width: 767px){
      .footer-col{
        width: 50%;
        margin-bottom: 30px;
    }
    }
    @media(max-width: 574px){
      .footer-col{
        width: 100%;
    }
    }

           
    </style>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li class="nav-item"> <a href="index.html" class="nav-link">Home</a></li>
                            <li class="nav-item"> <a href="sobre_nos.html" class="nav-link">Sobre</a></li>
                            <li class="nav-item"> <a href="dados_facilitados.html" class="nav-link">Dados</a></li>
                            <li class="nav-item"> <a href="cartilha.html" class="nav-link">Cartilhas</a></li>
                            <li class="nav-item"> <a href="contato.html" class="nav-link">Contatos</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contatos</h4>                        
                        <p>Email:Info@example.com</p>
                        <br>
                        <p>Phone:+15 (11)) 565556</p>
                        <br>
                        <p>Endereço:AV. Tomaz 235</p>
                    </div>
                    
                    <div class="footer-col">
                        <h4>Siga-nos</h4>
                        <div class="social-links">
                            <a href="https://www.facebook.com/?locale=pt_BR"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-bar">
                <p>&copy; 2023 2023 BraVias. Todos os direitos reservados</p>
            </div>
        </footer>
          `;

          class Footer extends HTMLElement {
            constructor() {
              super();
            }
          
            connectedCallback() {
              const shadowRoot = this.attachShadow({ mode: 'closed' });
          
              shadowRoot.appendChild(footerTemplate.content);
            }
          }
          
          customElements.define('footer-component', Footer);