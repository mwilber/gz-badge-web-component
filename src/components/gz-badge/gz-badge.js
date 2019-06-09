import cssData from './gz-badge.css';
import imageData from './gz_badge.svg';

window.customElements.define('gz-badge', class extends HTMLElement {
  
    constructor(){
      super();
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = this.render();
    }

    get drawer() {
      return this.getAttribute('drawer');
    }
    
    set drawer(newValue) {
      this.setAttribute('drawer', newValue);
    }

    static get observedAttributes() {
      return ['drawer'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case 'drawer':
          this.shadowRoot.querySelector('#gzlink').classList.add('drawer-open');
          break;
      }
    }
    
    connectedCallback() {
      console.log('%c\u03B6'+'%ca GreenZeta Production', 
              'font-family:serif; font-size:12px; color: white; font-weight: bold; background-color: #7bb951; padding: 4px 10px;', 
              'color: white; font-size:12px; background-color: #2a2a2a; padding: 4px 10px;', 
              'http://greenzeta.com');

      this.addEventListener('click', function(e) {
        console.log('Active element (inside shadow dom):', this.shadowRoot.activeElement);
        this.shadowRoot.querySelector('#gzlink').classList.toggle('drawer-open');
      });
    }
    
    render(){
      return `
        <style>
          ${cssData}
        </style>
        
        <div id="gzlink">
          ${imageData}
          <div class="drawer">Some links here</div>
        </div>
      `;
    }
});