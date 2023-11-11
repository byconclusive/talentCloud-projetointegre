

    const footerTemplate = document.createElement('template');

    footerTemplate.innerHTML =`
    <style>
        *{
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            color: white;
        }
        footer{
            background: #343434;
            padding-top: 50px;
        }
        .container{
            width: 1140px;
            margin: auto;
            display: flex;
            justify-content: center;
        }
        .footer-content{
            width: 33.3%;
        }
        h3{
            font-size: 28px;
            margin-bottom: 15px;
            text-align: center;
        }
        .footer-content p{
            width:190px;
            margin: auto;
            padding: 7px;
        }
        .footer-content ul{
            text-align: center;
        }
        .list{
            padding: 0;
        }
        .list li{
            width: auto;
            text-align: center;
            list-style-type:none;
            padding: 7px;
            position: relative;
        }
        .list li::before{
            content: '';
            position: absolute;
            transform: translate(-50%,-50%);
            left: 50%;
            top: 100%;
            width: 0;
            height: 2px;
            background: #f18930;
            transition-duration: .5s;
        }
        .list li:hover::before{
            width: 70px;
        }
        .social-icons{
            text-align: center;
            padding: 0;
        }
        .social-icons li{
            display: inline-block;
            text-align: center;
            padding: 5px;
        }
        .social-icons i{
            color: white;
            font-size: 25px;
        }
        a{
            text-decoration: none;
        }
        a:hover{
            color: #f18930;
        }
        .social-icons i:hover{
            color: #f18930;
        }
        .bottom-bar{
            background: #f18930;
            text-align: center;
            padding: 10px 0;
            margin-top: 50px;
        }
        .bottom-bar p{
            color: #343434;
            margin: 0;
            font-size: 16px;
            padding: 7px;
        }
    </style>
        <footer>
            <div class="container">
                <div class="footer-content">
                    <h3>Contatos</h3>
                    <p>Email:Info@example.com</p>
                    <p>Phone:+15 (11)) 565556</p>
                    <p>Endereço:AV. Tomaz 235</p>
                </div>
                <div class="footer-content">
                    <h3>Links Rápidos</h3>
                     <ul class="list">
                        <li class="nav-item"> <a href="index.html" class="nav-link">Home</a></li>
                        <li class="nav-item"> <a href="sobre_nos.html" class="nav-link">Sobre</a></li>
                        <li class="nav-item"> <a href="dados_facilitados.html" class="nav-link">Dados</a></li>
                        <li class="nav-item"> <a href="cartilha.html" class="nav-link">Cartilhas</a></li>
                        <li class="nav-item"> <a href="contato.html" class="nav-link">Contatos</a></li>
                     </ul>
                </div>
                <div class="footer-content">
                    <h3>Siga-nos</h3>
                    <ul class="social-icons">
                     <li><a href=""><i class="fab fa-facebook"></i></a></li>
                     <li><a href=""><i class="fab fa-twitter"></i></a></li>
                     <li><a href=""><i class="fab fa-instagram"></i></a></li>
                     <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                    </div>
            </div>
            <div class="bottom-bar">
                <p>&copy; 2023 BraVias. Todos os direitos reservados</p>
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