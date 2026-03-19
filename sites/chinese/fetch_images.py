import urllib.request
import urllib.parse
import json

dishes = ["Peking duck dish", "Sweet and sour pork", "Steamed fish chinese", "Kung Pao chicken", "Beef with broccoli", "Lemon chicken", "Fried calamari", "Fried rice", "Char kway teow", "Sesame chicken", "Mapo tofu", "Chinese restaurant interior red lanterns"]

res = {}
for q in dishes:
    url = f"https://en.wikipedia.org/w/api.php?action=query&generator=images&titles={urllib.parse.quote(q)}&gimlimit=5&prop=imageinfo&iiprop=url&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla'})
    try:
        data = json.loads(urllib.request.urlopen(req).read().decode())
        found = "None"
        for page in data.get('query', {}).get('pages', {}).values():
            if 'imageinfo' in page:
                candidate = page['imageinfo'][0]['url']
                if candidate.lower().endswith(('.jpg', '.jpeg', '.png')) and not candidate.lower().endswith('.svg'):
                    found = candidate
                    break
        res[q] = found
    except Exception:
        res[q] = "Error"

with open(r"c:\Users\bhaga\OneDrive\WEB SELLING\Show websites\sites\chinese\urls.json", "w", encoding="utf-8") as f:
    json.dump(res, f, indent=2)
