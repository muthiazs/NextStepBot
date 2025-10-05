// Deteksi apakah sedang di GitHub Pages (preview mode)
const isPages = location.host.includes('github.io');

// Kalau di GitHub Pages → backend dimatikan (pakai mock)
// Kalau di lokal → arahkan ke server Express
const DEFAULT_API_URL = isPages ? null : 'http://localhost:3000/chat';

export async function sendPrompt(prompt) {
  // Mode Preview di GitHub Pages
  if (!DEFAULT_API_URL) {
    // Simulasi delay biar terasa realistis
    await new Promise(r => setTimeout(r, 800));

    // Pesan ramah untuk pengguna
    return `Hehe, maaf ya sobat 😅  
Server Kakak Karir lagi off dulu hari ini, jadi aku belum bisa kasih jawaban asli.  
Tapi nanti kalau server udah nyala, aku siap bantu kasih tips karier beneran lagi! 🚀  
Kamu ngetik: **${prompt}**`;
  }

  // Mode Lokal (ada backend-nya)
  try {
    const res = await fetch(DEFAULT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!res.ok) throw new Error('Server error');
    const data = await res.json();

    if (data?.success) return data.data;
    throw new Error(data?.error || 'Unexpected response');
  } catch (err) {
    // Pesan ramah kalau backend-nya gagal diakses
    return `Hmm... sepertinya server-nya belum jalan nih 😅  
Coba pastikan Express server kamu aktif di port 3000 ya.`;
  }
}
