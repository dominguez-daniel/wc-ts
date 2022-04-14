import { LitElement, html, TemplateResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { alertHelper } from '../utils/helper';


@customElement('wc-greeting')
export class GettingComponent extends LitElement {

  static styles = css`
    button {
      position: relative;
      background: none;
      border: 2px solid black;
      letter-spacing: 5px;
      text-transform: uppercase;
      padding: 1rem;
      overflow: hidden;
      cursor: pointer;

      transition: all .5s ease;
    }
    button:hover {
      color: white;
    }

    button::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      transform: translateY(100%);
      z-index: -1;

      transition: all .5s ease;
    }

    button:hover::before {
      transform: translateY(0%);
    }
  `;

  @property({ type: String })
  public greeting: string;

  private _onClick(): void {
    alertHelper(this.greeting);
  }

  public render(): TemplateResult {
    return html`
      <section class="greeting-section">
        <div class="greeting-secttion--text">
          <h2>${this.greeting ? this.greeting : 'Hola!'}</h2>
          <p>from greeting component!</p>
        </div>
        <button @click=${this._onClick}>click me</button>
      </section>
    `;
  }
}
