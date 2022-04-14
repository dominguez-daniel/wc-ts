import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('wc-greeting')
export class GettingComponent extends LitElement {

  @property({ type: String })
  public greeting: string;

  private _onClick(): void {
    alert(`${this.greeting}!`);
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
