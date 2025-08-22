// definindo a classe do componente, que será o mesmo nome da tag HTML
class FooterLawd extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); // criamos o shadow DOM
    // aqui dentro do shadow DOM, podemos adicionar estilos e HTML que serão encapsulados
    // e não afetarão o restante da página, nem serão afetados por estilos globais.
    shadow.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap');
        footer{
          width: 100%;
          background-color: rgb(217, 217, 217);
          font-family: 'MuseoModerno';
          color: rgb(179, 0, 255);
        }

        .container-main{
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 2em 1em;
        }

        .logo-section{
            display: flex;
            align-items: center;
            gap: 2em;
        }
        
        .logo-section img {
            width: 6em;
            height: 6em;
        }
        .logo-section h2 {
            font-size: 3rem;
            font-weight: 450;
            margin: 0;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

        .footer-links p {
            text-transform: uppercase; 
            font-weight: 900;
            font-size: 1.3rem;
            margin-bottom: 1em;
            margin-top: 0;
        }

        .footer-links ul {
            list-style: none; 
            padding: 0;
            margin: 0;
            text-align: center;
            scale: 1.2
        }

        .footer-links a {
            text-decoration: none; 
            color: inherit; 
            line-height: 1.5;
            font-size: 0.9rem;
            display: inline-block;
            transition: transform 0.3s, color 0.3s;
        }

        .footer-links a:hover {
            color: rgb(102, 0, 153);
            font-weight: 600;
            transform: scale(1.1);
        }

        .about-us{
          padding: 0 2em;
          border-left: 2px solid rgb(179, 0, 255);
          border-right: 2px solid rgb(179, 0, 255);   
        }
        .ul-about li:first-child{
        margin-top: -0.7em;
        }

        .social {
            display: flex;
            justify-content: center;
            gap: 20px; 
        }

        .social a svg {
            width: 24px;  
            height: 24px;
            fill: currentColor; 
        }

        .container-text {
            background-color:  rgb(179, 0, 255);
            color: white;
            text-align: center;
            padding: 0px 0; /* Espaçamento interno */
        }
        .container-text h2 {
            font-size: 1rem;
            font-weight: 500;
            margin: 0;
        }
      </style>    
  
      <!-- aqui colocamos as tags do html, que farão parte do nosso footer* -->
      <footer>
        <div class="container-main">

          <div class="logo-section">
            <img src="https://i.ibb.co/LhzH8MrF/logo-roxa-LAWD-cop.png" alt="Logo da Lawd" />
            <h2>Onde a web é um <strong>meio</strong>, não um <strong>fim</strong>.</h2>
          </div>

          <div class="footer-links about-us">
            <p>About us</p>
            <ul class="ul-about">
              <li><a href="#">projetos</a></li>
              <li><a href="#">membros</a></li>
              <li><a href="#">parcerias</a></li>
            </ul>
          </div>

          <div class="footer-links follow-us">
            <p>Follow US</p>
            <ul class="social">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                </a>                
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>   
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div class="container-text">
          <h2>LIGA ACADÊMICA DE DESENVOLVIMENTO WEB</h2>
        </div>
      </footer>
    `;
  }
}
customElements.define("footer-lawd", FooterLawd);
