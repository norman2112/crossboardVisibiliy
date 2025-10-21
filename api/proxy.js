// Vercel serverless function to proxy AgilePlace API requests
export default async function handler(req, res) {
  // Enable CORS for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { url, token } = req.query;
    
    if (!url || !token) {
      return res.status(400).json({ 
        error: 'Missing required parameters: url and token' 
      });
    }

    // Extract the endpoint from the request
    const endpoint = req.url.replace('/api/proxy?', '');
    const targetUrl = `${url}${endpoint}`;

    console.log('Proxying request to:', targetUrl);

    // Make the request to AgilePlace
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...req.headers
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });

    const data = await response.json();
    
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Proxy request failed', 
      details: error.message 
    });
  }
}
