import CpBaseElement from 'cp-base-element/dist/compiled/cp-base-element';
import './cp-card-styles';

const template = `
  <style>
    :host {
      display: block;
      padding: 32px;
      background: #252525;
      color: #fff;
      border: 1px solid #252525;
    }

    :host(.light) {
      background: #f0f0f0;
      color: #252525;
      border-color: #f0f0f0;
    }

    :host(.accent) {
      background: #08c0fc;
      border-color: #08c0fc;
    }

    :host(.bordered) {
      background: none;
      border-color: #d1d1d1;
      color: #252525;
    }
  </style>

  <h3></h3>
  <slot></slot>
`;

class CpCard extends CpBaseElement {
  constructor() {
    super('cp-card', template);
  }

  static get observedAttributes() {
    return ['heading'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'heading') {
      this.shadowRoot.querySelector('h3').textContent = newValue;
    }
  }
}

customElements.define('cp-card', CpCard);
