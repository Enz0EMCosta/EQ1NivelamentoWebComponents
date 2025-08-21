// definindo a classe do componente, que será o mesmo nome da tag HTML
class FooterLawd extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); // criamos o shadow DOM
    // aqui dentro do shadow DOM, podemos adicionar estilos e HTML que serão encapsulados
    // e não afetarão o restante da página, nem serão afetados por estilos globais.
    shadow.innerHTML = `
      <style>
        
          /* aqui dentro vão os estilos do html, igual um arquivo CSS normal*/ 
        
      </style>    
  
      <!-- aqui colocamos as tags do html, que farão parte do nosso footer* -->
      <footer>
        <div>
          <img src="" alt="Logo da Lawd" />
          <h2>Onde a web é um meio, não um fim.</h2>
        </div>
        <div>
          <p>About us</p>
          <ul class="about">
            <li><a href="#">projetos</a></li>
            <li><a href="#">membros</a></li>
            <li><a href="#">parcerias</a></li>
          </ul>
        </div>
        <div>
          <p>Follow US</p>
          <ul class="social">
            <li><a href="#"><img src="" alt="GitHun"/></a></li>
            <li><a href="#"><img src="" alt="Instagram"/></a></li>
            <li><a href="#"><img src="" alt="LinkedIn"/></a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}
customElements.define("footer-lawd", FooterLawd);
