// definindo a classe do componente, que será o mesmo nome da tag HTML
class FooterLawd extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); // criamos o shadow DOM
    // aqui dentro do shadow DOM, podemos adicionar estilos e HTML que serão encapsulados
    // e não afetarão o restante da página, nem serão afetados por estilos globais.
    shadow.innerHTML = `
      <style>
        footer{
          display : flex;
          flex-direction : column;
          align-items: center;
          justify-content : space-between;
          font-family: "MuseoModerno";
          color : rgb(179, 0, 255);
        }
        ul{
          list-style-type: none;
        }
        a{
          color : rgb(179, 0, 255);
          font-size: 12px;
          text-decoration: none;
        }
        .logo-lawd{
          width : 50px;
          height : 50px;
          padding-right: 20px;
        }
        .social img{
          width: 20px;
          height: 20px;
          padding: 0px 10px;
        }
        .about-us{
          display : flex;
          flex-direction : column;
          align-items: center;
          justify-content : space-between;
        }
        .geral, .apresentacao, .social{
          display : flex;
          flex-direction : row;
          justify-content : space-between;
          gap: 2em;
          #padding: 0px 40px;
        }
        .geral{
          background: rgb(217, 217, 217);
        }
        .texto{
          background: rgb(179, 0, 255);
          color: white;
          font-size : 12px;
          padding: 0px 243px;
        }
          /* aqui dentro vão os estilos do html, igual um arquivo CSS normal*/ 
        
      </style>    
  
      <!-- aqui colocamos as tags do html, que farão parte do nosso footer* -->
      <footer>
      <div class="geral"> 
      
        <div class="apresentacao">
          <img class="logo-lawd" src="./images/logo_roxaLAWD_cop.png" alt="Logo da Lawd" />
          <h2>Onde a web é um meio, não um fim.</h2>
          </div>
        <div class="about-us">
          <p>About us</p>
          <ul class="about">
            <li><a href="#">projetos</a></li>
            <li><a href="#">membros</a></li>
            <li><a href="#">parcerias</a></li>
          </ul>
        </div>
        <div class="follow-us">
          <p>Follow US</p>
          <ul class="social">
            <li><a href="#"><img src="./images/github-mark-white.png" alt="GitHub"/></a></li>
            <li><a href="#"><img src="./images/icons8-instagram-50.png" alt="Instagram"/></a></li>
            <li><a href="#"><img src="./images/icons8-linkedin-50.png" alt="LinkedIn"/></a></li>
          </ul>
        </div>  
      </div>
        <div class="texto"> 
          <h2>LIGA ACADÊMICA DE DESENVOLVIMENTO WEB</h2>
        </div>
      </footer>
    `;
  }
}
customElements.define("footer-lawd", FooterLawd);
