export class ChatBox extends HTMLElement{
  connectedCallback(){
    this.classList.add('chat-box');
    // Render a first message
    if(!this.dataset.initialized){
      this.appendBot(`Hai! Selamat datang di NextStep! Aku di sini untuk jadi temanmu menapaki langkah pertama menuju karier impian. Yuk, mulai perjalanan besarmu hari ini! Ada yang bisa aku bantu? 🚀`);
      this.dataset.initialized = 'true';
    }
  }

  appendUser(text){
    const row = document.createElement('div');
    row.className = 'msg-row user';
    const bubble = document.createElement('div');
    bubble.className = 'message user';
    bubble.innerHTML = window.marked ? marked.parse(text) : text;
    row.appendChild(bubble);
    this.appendChild(row);
    this.toBottom();
  }

  appendBot(text){
    const row = document.createElement('div');
    row.className = 'msg-row bot';
    const ava = document.createElement('img');
    ava.src = './assets/maskot.png';
    ava.alt = 'NextStep';
    ava.className = 'bubble-avatar';
    const bubble = document.createElement('div');
    bubble.className = 'message bot';
    bubble.innerHTML = window.marked ? marked.parse(text) : text;

    row.appendChild(ava);
    row.appendChild(bubble);
    this.appendChild(row);
    this.toBottom();
  }

  showLoading(){
    const row = document.createElement('div');
    row.className = 'msg-row bot';
    const ava = document.createElement('img');
    ava.src = './assets/maskot.png';
    ava.alt = 'NextStep';
    ava.className = 'bubble-avatar';
    const bubble = document.createElement('div');
    bubble.className = 'message bot loading';
    bubble.innerHTML = '<span></span><span></span><span></span>';
    row.appendChild(ava);
    row.appendChild(bubble);
    this.appendChild(row);
    this.toBottom();
    return row;
  }

  remove(node){
    if(node && node.parentNode === this) this.removeChild(node);
  }

  toBottom() {
  requestAnimationFrame(() => {
    this.scrollTop = this.scrollHeight;
    requestAnimationFrame(() => {
      this.scrollTop = this.scrollHeight;
    });
  });
}
}


customElements.define('chat-box', ChatBox);

