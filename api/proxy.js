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

    // Construct the correct AgilePlace API URL
    const baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    const targetUrl = `${baseUrl}${endpoint}`;

    console.log('Proxying request to:', targetUrl);
    console.log('Original URL:', url);
    console.log('Base URL:', baseUrl);
    console.log('Endpoint:', endpoint);
    console.log('Token (first 10 chars):', token.substring(0, 10));
    console.log('Authorization header:', `Bearer ${token.substring(0, 10)}...`);

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

    // Try to get the response as text first to see what we're actually getting
    const responseText = await response.text();
    console.log('AgilePlace raw response:', responseText);
    console.log('Response length:', responseText.length);
    
    try {
      const data = JSON.parse(responseText);
      console.log('AgilePlace parsed JSON:', data);
      console.log('AgilePlace response type:', typeof data);
      console.log('AgilePlace response keys:', Object.keys(data || {}));
      
      res.status(response.status).json(data);
    } catch (parseError) {
      console.error('Failed to parse JSON response:', parseError);
      console.error('Raw response was:', responseText);
      return res.status(500).json({
        error: 'Invalid JSON response from AgilePlace',
        details: responseText.substring(0, 200) + '...'
      });
    }
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Proxy request failed', 
      details: error.message 
    });
  }
}
