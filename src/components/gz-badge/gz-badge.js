import styles from './gz-badge.css';
import imageData from './gz_badge.svg';

window.customElements.define('gz-badge', class extends HTMLElement {
  
    constructor(){
      super();
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = this.render();
    }
    
    connectedCallback() {
      console.log('%c\u03B6'+'%ca GreenZeta Production', 
              'font-family:serif; font-size:12px; color: white; font-weight: bold; background-color: #7bb951; padding: 4px 10px;', 
              'color: white; font-size:12px; background-color: #2a2a2a; padding: 4px 10px;', 
              'http://greenzeta.com');
      debugger;
      console.log('styles', styles);
    }
    
    render(){
      return `
        <styles>${styles.toString()}</styles>     
        <a class="${styles.gzlink}" href="http://apps.greenzeta.com" target="_blank">
          ${imageData}
        </a>
      `;
    }
});