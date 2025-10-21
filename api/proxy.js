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
    const { url, token, endpoint } = req.query;
    
    if (!url || !token || !endpoint) {
      return res.status(400).json({ 
        error: 'Missing required parameters: url, token, and endpoint' 
      });
    }

    const targetUrl = `${url}${endpoint}`;

    console.log('Proxying request to:', targetUrl);

    // Make the request to AgilePlace
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'CrossBoard-Visibility-Tool/1.0'
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });

    console.log('AgilePlace response status:', response.status);
    console.log('AgilePlace response headers:', [...response.headers.entries()]);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AgilePlace error response:', errorText);
      return res.status(response.status).json({
        error: 'AgilePlace API error',
        status: response.status,
        details: errorText
      });
    }

    const data = await response.json();
    console.log('AgilePlace response data:', data);
    console.log('AgilePlace response type:', typeof data);
    console.log('AgilePlace response keys:', Object.keys(data || {}));
    
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Proxy request failed', 
      details: error.message 
    });
  }
}
