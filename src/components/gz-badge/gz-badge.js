import cssData from './gz-badge.css';
import imageData from './gz_badge.svg';

window.customElements.define('gz-badge', class extends HTMLElement {
  
    constructor(){
      super();
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = this.renderTemplate();
    }
    
    connectedCallback() {
      console.log('%c\u03B6'+'%ca GreenZeta Production', 
              'font-family:serif; font-size:12px; color: white; font-weight: bold; background-color: #7bb951; padding: 4px 10px;', 
              'color: white; font-size:12px; background-color: #2a2a2a; padding: 4px 10px;', 
              'http://greenzeta.com');
    }
    
    renderTemplate(){
      return `
        <style>
          ${cssData}
        </style>
        
        <a id="gzlink" href="http://apps.greenzeta.com" target="_blank">
          ${imageData}
        </a>
      `;
    }
});