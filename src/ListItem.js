import { LitElement,html, css } from 'lit';


class Post extends LitElement {
    constructor() {
        super()
    }

    static properties = {
        post: {}
    }

    static styles = css`
        .post-container {
            background-color: #393E46;
            border-radius: 8px;
            padding: 8px 16px;
            width: "100%";
            height: "300px";
            
        }
        .image-container {
            border-radius: 8px;
            overflow:hidden;
        }

        p {
            line-height: 1.7;
            letter-spacing: 1.2;
        }
     
    `;
    

    render(){
        return html`<div class='post-container'><h3>${this.post.title}</h3> <div class="image-container"><image src="/src/image1.jpg" width="100%" height="fit"/></div>
    <p>${this.post.description}</p>
    </div>`
    }
};

customElements.define('post-item',Post)