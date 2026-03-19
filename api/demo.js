import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Extract the site name from the url, e.g., /demo/omakase -> omakase
  const urlParts = req.url.split('?')[0].split('/').filter(Boolean);
  const siteName = urlParts[urlParts.length - 1];

  if (!siteName) {
    return res.status(400).send('No site specified');
  }

  try {
    // Construct path to the requested site's index.html
    // Try dist/index.html first (for built projects), then falls back to root index.html
    let sitePath = path.join(process.cwd(), 'sites', siteName, 'dist', 'index.html');
    if (!fs.existsSync(sitePath)) {
      sitePath = path.join(process.cwd(), 'sites', siteName, 'index.html');
    }
    
    // Check if the file exists
    if (!fs.existsSync(sitePath)) {
      return res.status(404).send('Site not found');
    }

    // Read the original HTML file
    let html = fs.readFileSync(sitePath, 'utf8');

    // The script and CSS to inject
    const injectedAssets = `
      <!-- INJECTED SHOWCASE OVERLAY -->
      <link rel="stylesheet" href="/showcase-overlay.css">
      <script src="/showcase-overlay.js"></script>
    `;

    // Inject before closing body tag, or just append if no closing body tag
    if (html.includes('</body>')) {
      html = html.replace('</body>', `${injectedAssets}\n</body>`);
    } else {
      html += injectedAssets;
    }

    // We MUST specify a base tag if it doesn't have one to fix relative paths
    // e.g., <img src="images/hero.jpg"> needs to know it's in /sites/siteName/
    if (!html.includes('<base ')) {
      const baseTag = `<base href="/sites/${siteName}/">`;
      if (html.includes('<head>')) {
        html = html.replace('<head>', `<head>\n  ${baseTag}`);
      } else {
        html = `${baseTag}\n${html}`;
      }
    }

    // Serve the dynamically modified HTML
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate'); // Don't cache the injected version too aggressively
    res.status(200).send(html);

  } catch (error) {
    console.error('Error rendering site:', error);
    res.status(500).send('Internal Server Error');
  }
}
