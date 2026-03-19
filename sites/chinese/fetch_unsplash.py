import urllib.request
import urllib.parse
import json

queries = [
    "chinese restaurant interior red",
    "peking duck chinese food",
    "sweet and sour pork chinese",
    "steamed fish chinese food",
    "kung pao chicken food",
    "beef stir fry chinese",
    "beef and broccoli food",
    "lemon chicken food",
    "fried calamari squid",
    "fried rice egg chinese",
    "char kway teow noodles",
    "sesame chicken glaze",
    "mapo tofu spicy"
]

res = {}
for q in queries:
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(q)}&per_page=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode())
        if 'results' in data and len(data['results']) > 0:
            thumb = data['results'][0]['urls']['regular']
            res[q] = thumb
        else:
            res[q] = "Not Found"
    except Exception as e:
        res[q] = f"Error: {e}"

with open("sites/chinese/unsplash.json", "w", encoding="utf-8") as f:
    json.dump(res, f, indent=2)
