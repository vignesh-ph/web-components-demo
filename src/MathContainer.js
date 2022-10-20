import { LitElement, html, css} from 'lit';

class MathContainer extends LitElement {
    constructor(){
        super();

        this._valueA = 20;
        this._valueB = 22;
        this._valueC = this._valueA * this._valueB;
    }

    static properties = {
        _valueA: { state: true},
        _valueB: { state: true },
        _valueC: { state: true }
    }

    _updateValueA(){
        this._valueA = 25
    }


    render(){
        return html`
            <div>
                <h3>${this._valueA}</h3>
                <h3>${this._valueB}</h3>
                <h3>${this._valueC}</h3>
                <button @click="${this._updateValueA}">
                    Change Vlaue
                </button>
            </div>
        `;
    }
}

customElements.define('math-container', MathContainer);