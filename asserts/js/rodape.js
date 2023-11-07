

    const footerTemplate = document.createElement('template');

    footerTemplate.innerHTML =`

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Footer</title>
    <link rel="stylesheet" href="./css/responsive_footer.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- font awesome -->
    <script src="https://kit.fontawesome.com/1165876da6.js" crossorigin="anonymous"></script>
    </head>

    <style>
   
    
    footer{
        width: 100%;
        height: auto;
        background: #282828;
        padding-bottom: 20px;
    }
    
    .square{
        width: 100%;
        height: auto;
        margin-top: 48px;
        padding: 0px !important;
        padding-bottom: 20px;
    }
    
    .brand{
        margin-top: 20px;
        font-size: 38px;
        color: #ffffff;
        font-weight: bold;
    }
    
    .about{
        width: 85%;
        color: white;
        margin-top: 5px;
    }
    
    .heading{
        margin-top: 20px;
        font-size: 38px;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        
        
    }
 
    
    .p-list{
        padding: 0;
        
    }
    
    .p-list li{
        display: block;
        text-align: center;
        margin: 5px 0px;
        color: white;
        
    }
    
    .l-list{
        padding: 0;
        
    }
    
    .l-list li{
        display: block;
        text-align: center;
        margin: 5px 0px;
        color: white;
        
    }
    
    .contact{
        padding: 0;
    }
    
    .contact li{
        display: block;
        text-align: center;
        margin: 5px 0px;
        color: white;
    }
    
    .social-media{
        text-align: center;
        margin-top: 20px;
    }
    
    .social-media li{
        display: inline-flex;
        color: white;
        margin: 5px;
        font-size: 25px;
    }
    
    .copy{
        text-align: center;
        color: white;
        margin-top: 20px;
    }
    
    @media only screen and (max-width:767px){
        .heading{
            text-align: left;
        }
        .square{
            padding: 0px 30px !important;
            margin-top: 10px!important;
        }
    
        .p-list li , .l-list li , .contact li{
            text-align: left;
        }
        .social-media{
            padding-left: 0!important;
        }
    
        .social-media li{
            margin: 5px;
        }
    } 

    </style>
    <footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 square">
                <div class="brand">Empresa</div>
                <p class="about">A BraVias é uma empresa dedicada a fornecer informações precisas e atualizadas sobre as rodovias do país.
                 Nosso compromisso é facilitar a vida dos viajantes, motoristas e empresas que dependem das estradas brasileiras.
                </p>
            </div>
            <div class="col-lg-2 col-md-6 square">
                <div class="heading">Informativo</div>
                <ul class="p-list">
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                    <li>Product 4</li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6 square">
                <div class="heading">Links</div>
                <ul class="l-list">
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Dados</a></li>
                    <li><a href="">Cartilhas</a></li>
                    <li><a href="">Contatos</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6 square">
                <div class="heading">Contatos</div>
                <ul class="contact">
                    <li><i class="fa-solid fa-house"></i> AV. Tomas de brito</li>
                    <li><i class="fa-solid fa-envelope"></i> Email@gmail.com</li>
                    <li><i class="fa-solid fa-envelope"></i> +4545 4544545</li>
                </ul>
            </div>
        </div>
        <ul class="social-media">
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
        </ul>
    </div>
    <div class="copy">&copy Copyright & Reserved 2023. <a href="https://www.youtube.com">Tarun Code</a></div>
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