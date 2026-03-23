import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const sitesDir = path.join(process.cwd(), 'sites');
    
    // Fallback if directory doesn't exist
    if (!fs.existsSync(sitesDir)) {
      return res.status(200).json({ sites: [] });
    }

    // Read all directories inside /sites/
    const items = fs.readdirSync(sitesDir, { withFileTypes: true });
    
    // Filter only directories that contain an index.html
    const sites = items
      .filter(dirent => dirent.isDirectory())
      .filter(dirent => {
        const indexPath = path.join(sitesDir, dirent.name, 'index.html');
        return fs.existsSync(indexPath);
      })
      .map(dirent => {
        // Here we could parse a metadata file inside the folder if we wanted to
        // For now, we return the folder name, formatted nicely
        const id = dirent.name;
        // Basic formatting: "rooftop_bar" -> "Rooftop Bar"
        const name = id
          .split('_')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
          
        return {
          id: id,
          name: name,
          url: `/demo/${id}`
        };
      });

    // Custom sort order based on previous hardcoded defaults if we want
    const preferredOrder = ['mamak', 'chinese', 'rooftop', 'rooftop_bar', 'omakase'];
    
    sites.sort((a, b) => {
      let indexA = preferredOrder.indexOf(a.id);
      let indexB = preferredOrder.indexOf(b.id);
      
      // If a site is not in the preferred order, put it at the end
      if (indexA === -1) indexA = 999;
      if (indexB === -1) indexB = 999;
      
      if (indexA !== indexB) {
        return indexA - indexB;
      }
      return a.name.localeCompare(b.name); // alphabetical fallback
    });

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json({ sites });

  } catch (error) {
    console.error('Error reading sites directory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
