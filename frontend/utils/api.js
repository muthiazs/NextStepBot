const DEFAULT_API_URL = 'http://localhost:3000/chat';

export async function sendPrompt(prompt, apiUrl = DEFAULT_API_URL){
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  if(!res.ok) throw new Error('Server error');
  const data = await res.json();
  if(data?.success) return data.data;
  throw new Error(data?.error || 'Unexpected response');
}
