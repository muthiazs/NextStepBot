import { sendPrompt } from './utils/api.js';

const app = () => {
  const chatBox = document.querySelector('chat-box');

  addEventListener('send-message', async (e) => {
    const text = e.detail.text;
    chatBox.appendUser(text);
    const loading = chatBox.showLoading();
    try{
      const reply = await sendPrompt(text);
      chatBox.remove(loading);
      chatBox.appendBot(reply);
    }catch(err){
      chatBox.remove(loading);
      chatBox.appendBot('Oops! I couldn\'t connect to the server. Please make sure it\'s running.');
      console.error(err);
    }
  });
};

document.addEventListener('DOMContentLoaded', app);
