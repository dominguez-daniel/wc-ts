import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('wc-greeting')
export class GettingComponent extends LitElement {

  @property({ type: String })
  public greeting: string;


  public render(): TemplateResult {
    return html`
      <section>
        <div>
          <h2>${this.greeting ? this.greeting : 'Hola!'}</h2>
          <p>from greeting component!</p>
        </div>
      </section>
    `;
  }
}
