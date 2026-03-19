import json
from duckduckgo_search import DDGS
import time

queries = {
    "Hero": "elegant traditional chinese restaurant interior high quality photography",
    "Peking Duck": "peking duck crispy sliced food photography high resolution",
    "Sweet and Sour Pork": "sweet and sour pork chinese food photography high resolution",
    "Steamed Fish": "chinese steamed fish whole soy sauce ginger scallion food photography high resolution",
    "Kung Pao Chicken": "kung pao chicken peanuts chili chinese food photography high resolution",
    "Black Pepper Beef": "black pepper beef stir fry chinese food photography high resolution",
    "Beef with Broccoli": "beef with broccoli chinese food photography high resolution",
    "Lemon Chicken": "chinese lemon chicken food photography high resolution",
    "Salt and Pepper Squid": "salt and pepper squid calamari fried chinese food photography high resolution",
    "Fried Rice": "chinese egg fried rice bowl food photography high resolution",
    "Char Kuey Teow": "char kway teow fried flat rice noodles chinese food photography high resolution",
    "Sesame Chicken": "sesame chicken honey glazed chinese food photography high resolution",
    "Szechuan Tofu": "mapo tofu spicy szechuan food photography high resolution"
}

results = {}
ddgs = DDGS()

for dish, query in queries.items():
    try:
        # Get 10 images, find the first horizontal one if possible, else just first one
        images = list(ddgs.images(query, max_results=5))
        found = False
        for img in images:
            # Prefer horizontal images or generic width >= height
            w, h = img.get('width', 0), img.get('height', 0)
            url = img.get('image', '')
            if 'http' in url and w >= h:
                results[dish] = url
                found = True
                break
        if not found and images:
            results[dish] = images[0].get('image')
    except Exception as e:
        results[dish] = f"Error: {str(e)}"
    time.sleep(1) # be nice

with open(r"c:\Users\bhaga\OneDrive\WEB SELLING\Show websites\sites\chinese\final_images.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
