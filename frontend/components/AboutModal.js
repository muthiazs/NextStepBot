export class AboutModal extends HTMLElement{
  connectedCallback(){
    this.render();
  }
  open(){ this.removeAttribute('hidden'); }
  close(){ this.setAttribute('hidden', ''); }
  render(){
    this.innerHTML = `
      <div class="about-card">
        <button id="aboutClose" class="about-close">✕</button>
        <div class="about-head">
          <img src="./assets/maskot.png" alt="NextStep" class="about-ava" />
          <div>
            <h2>NextStep 🌤️</h2>
            <p>Shine brighter with your Next Step.</p>
          </div>
        </div>
        <div class="about-body">
          <p><strong>NextStep</strong> adalah chatbot karier untuk fresh graduate:
          bantu bikin CV, latihan interview, dan kasih langkah kecil yang realistis.</p>
          <ul>
            <li>Interview Simulator – tanya-jawab & feedback singkat</li>
            <li>CV Advisor – bullet points yang ATS-friendly</li>
            <li>Daily Career Tips – insight ringan tiap hari</li>
          </ul>
          <p class="credit">Made with ☀️ by <a href="#" target="_blank">Muthia Z.</a></p>
        </div>
      </div>
      <div class="about-backdrop"></div>
    `;
    this.addEventListener('click', (e) => {
      if(e.target.closest('#aboutClose') || e.target.classList.contains('about-backdrop')) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.hasAttribute('hidden')) this.close();
    });
  }
}
customElements.define('about-modal', AboutModal);
