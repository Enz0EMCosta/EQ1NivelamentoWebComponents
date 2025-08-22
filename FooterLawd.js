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
          text-align: center;
        }
        ul{
          list-style-type: none;
          margin: 0;
        }
        a{
          color : rgb(179, 0, 255);
          font-size: 12px;
          text-decoration: none;
        }
        .logo-lawd{
          width : 75px;
          height : 75px;
          padding-left: 32px;
        }
        .social img{
          width: 20px;
          height: 20px;
          padding: 0px 10px;
          }
        .follow-us{
          display: flex;
          flex-direction : column;
          gap: 1em;
          padding-bottom: 52px;
          padding-right: 1em;
        }  
        .about-us{
          display : flex;
          flex-direction : column;
          align-items: center;
          justify-content : space-between;
          padding-bottom: 20px;
          border-left: 1px solid;
          border-right: 1px solid;
        }
        .about{
          padding-right: 40px;
        }
        .apresentacao{
          display : flex;
          flex-direction : row;
          align-items: center;
          gap: 2em;
          padding-right: 2em;
        }
        .social{
          display : flex;
          flex-direction : row;
          align-items: center;
          justify-content : space-between;
          gap: 1em;
        }
        .geral{
          display : flex;
          flex-direction : row;
          align-items: center;
          justify-content : space-between;
          background: rgb(217, 217, 217);
          padding: 20px 0px;
        }
        .texto{
          background: rgb(179, 0, 255);
          color: white;
          font-size : 12px;
          padding: 0px 258.52px;
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
            <li><a href="https://github.com/Lawd-UFS " target="_blank"><img src="./images/github-mark-white.png" alt="GitHub"/></a></li>
            <li><a href="https://www.instagram.com/lawd.ufs/" target="_blank"><img src="./images/icons8-instagram-50.png" alt="Instagram"/></a></li>
            <li><a href="https://www.linkedin.com/company/lawd-ufs" target="_blank"><img src="./images/icons8-linkedin-50.png" alt="LinkedIn"/></a></li>
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
