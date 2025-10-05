export class AppHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <div class="header">
        <div class="brand">
          <img src="./assets/maskot.png" alt="NextStep mascot" class="brand-avatar" />
          <div>
            <h1>🪜 NextStep</h1>
            <p class="tagline">Langkah kecil, masa depan gemilang ✨</p>
          </div>
        </div>
        <button id="aboutBtn" class="about-btn">About</button>
      </div>
    `;
    this.querySelector('#aboutBtn')?.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
}
customElements.define('app-header', AppHeader);
