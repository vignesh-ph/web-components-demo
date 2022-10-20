import { html, css, LitElement, unsafeCSS } from 'lit';
import { posts } from './data';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';

import './ListItem';
import './MathContainer';


export class NinjaCamp extends LitElement {

  constructor() {
    super();
    this.posts = posts;
    this.defaultPosts = posts;
  
  }

  static properties = {
    posts: { state: true  },
    defaultPosts: {}
  }

  static styles = css`
    .container {
      max-width: 800px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content:center;

    }

    h2 {
      text-align: center;
      font-size: 32px;
      text-decoration: dotted;
      text-transform: uppercase;
    }

    input {
    
      width: 95%;
      border-radius: 4px;
      padding: 8px 16px;
      background-color: #393E46;
      outline: none;
      border: 1px solid white;
      color: white;
      font-size: 20px;
      transition: background-color 0.2s ease-in-out;
    }

    input:hover, input:focus {
      background-color: inherit;
    }

    .list-container {
      display:flex;
      gap: 16px;
      flex-direction: column;
      flex-wrap: no-wrap;
    }
  `;

 

  renderPostList() {
    return html`<div class="list-container">${map(this.posts, (post) => html`<post-item .post=${post}></post-item>`)} </div>`
  }

  searchText(event){
    const searchResult = event.target.value;

    if(!searchResult) {
      this.posts = this.defaultPosts;
      return;
    }
    
      this.posts = this.posts.filter((post) => {      
      if(post.title.includes(searchResult)) {
        return true
      };
      return false;

    })

  }


  render() {
    return html`
    <div class='container'>
      <h2>NinjaCamp</h2>
      <input @keydown="${this.searchText}" placeholder="Search post"></input>
    ${when(this.posts.length > 0, this.renderPostList.bind(this) ,() => html`<p>no posts found</p>`)}
    </div>
    `;
  }
}
