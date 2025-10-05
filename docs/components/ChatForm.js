export class ChatForm extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <form id="chat-form">
        <input type="text" id="user-input" placeholder="Tanya apa saja seputar kariermu..." autocomplete="off" required />
        <button type="submit" id="send-btn" title="Send">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
          </svg>
        </button>
      </form>
    `;
    this.querySelector('#chat-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = this.querySelector('#user-input');
      const value = input.value.trim();
      if(!value) return;
      this.dispatchEvent(new CustomEvent('send-message', { detail: { text: value }, bubbles: true }));
      input.value = '';
    });
  }
}
customElements.define('chat-form', ChatForm);
