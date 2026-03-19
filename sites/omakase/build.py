import os

pages = {
    'index': {
        'title': 'Home | Sakura Essence Omakase',
        'content': '''
        <section class="hero-section">
            <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2000&auto=format&fit=crop');"></div>
            <div class="hero-content reveal-up">
                <span class="subtitle">Tokyo, Japan</span>
                <h1 class="display-text">Sakura Essence<br>Omakase</h1>
                <p class="tagline">Experience Culinary Art at Its Finest</p>
                <div class="hero-actions">
                    <a href="reservation.html" class="btn btn-primary">Reserve Table</a>
                    <a href="menu.html" class="btn btn-outline">View Menu</a>
                </div>
            </div>
            <div class="scroll-indicator">
                <span>Discover</span>
                <div class="line"></div>
            </div>
        </section>

        <section class="section about-preview">
            <div class="container container-split">
                <div class="content-side reveal-up">
                    <h2 class="section-title">The Art of <br>Omakase</h2>
                    <p class="text-lead">At Sakura Essence, we believe in the quiet dialogue between chef and guest.</p>
                    <p>Our philosophy is rooted in traditional Edomae techniques, elevated by modern sensibilities and the absolute finest seasonal ingredients. Every piece of nigiri is a testament to decades of dedication to the craft.</p>
                    <a href="about.html" class="link-arrow">Discover Our Story <i class="icon-arrow-right"></i></a>
                </div>
                <div class="image-side reveal-up delay-1">
                    <div class="img-wrapper">
                        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop" alt="Master Chef">
                    </div>
                </div>
            </div>
        </section>

        <section class="section showcase-section">
            <div class="container text-center reveal-up">
                <h2 class="section-title">A Symphony of Flavors</h2>
                <p class="text-lead">An intricate journey through twenty courses, carefully curated daily.</p>
            </div>
            <div class="marquee-wrapper reveal-fade">
                <div class="marquee">
                    <div class="marquee-group">
                        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop" alt="Sushi">
                        <img src="https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop" alt="Nigiri">
                        <img src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop" alt="Sashimi">
                    </div>
                    <div class="marquee-group">
                        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop" alt="Sushi">
                        <img src="https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop" alt="Nigiri">
                        <img src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop" alt="Sashimi">
                    </div>
                </div>
            </div>
            <div class="text-center mt-5 reveal-up">
                <a href="menu.html" class="btn btn-outline">Explore The Menu</a>
            </div>
        </section>
        '''
    },
    'menu': {
        'title': 'Menu | Sakura Essence Omakase',
        'content': '''
        <section class="page-header">
            <div class="container">
                <h1 class="display-text reveal-up">The Menu</h1>
                <p class="text-lead reveal-up delay-1">A curated 20-course experience altering daily with the seasons.</p>
            </div>
        </section>

        <section class="section menu-section">
            <div class="container">
                <!-- Appetizers -->
                <div class="menu-category reveal-up">
                    <h2 class="category-title">Appetizers<span>01</span></h2>
                    <div class="menu-list">
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Edamame with Sea Salt</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥800</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Chawanmushi</h3>
                                <p class="item-desc">Savory Egg Custard</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,200</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Sashimi Trio</h3>
                                <p class="item-desc">Chef's daily selection</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥2,500</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Seaweed Salad</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥900</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Grilled Scallops with Yuzu</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,800</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sushi / Nigiri -->
                <div class="menu-category mt-8 reveal-up">
                    <h2 class="category-title">Sushi & Nigiri<span>02</span></h2>
                    <div class="menu-list">
                        <div class="menu-item has-image">
                            <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop" alt="Toro" class="hover-img">
                            <div class="item-info">
                                <h3 class="item-name">Toro Nigiri</h3>
                                <p class="item-desc">Fatty Tuna</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥3,500</span>
                            </div>
                        </div>
                        <div class="menu-item has-image">
                            <img src="https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop" alt="Uni" class="hover-img">
                            <div class="item-info">
                                <h3 class="item-name">Uni Nigiri</h3>
                                <p class="item-desc">Sea Urchin</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥3,200</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Ebi Nigiri</h3>
                                <p class="item-desc">Sweet Shrimp</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,500</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Hamachi Nigiri</h3>
                                <p class="item-desc">Yellowtail</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,800</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Ikura</h3>
                                <p class="item-desc">Salmon Roe</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,900</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Tamago</h3>
                                <p class="item-desc">Sweet Egg Omelet</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Courses -->
                <div class="menu-category mt-8 reveal-up">
                    <h2 class="category-title">Seasonal Mains<span>03</span></h2>
                    <div class="menu-list">
                        <div class="menu-item has-image">
                            <img src="https://images.unsplash.com/photo-1558056524-97698af21ff8?q=80&w=800&auto=format&fit=crop" alt="Wagyu" class="hover-img">
                            <div class="item-info">
                                <h3 class="item-name">Wagyu Beef Tataki</h3>
                                <p class="item-desc">A5 Grade, Ponzu sauce</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥4,500</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Seared Salmon Belly</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥2,800</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Black Cod Miso</h3>
                                <p class="item-desc">Marinated for 72 hours</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥3,000</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Grilled Eel with Rice</h3>
                                <p class="item-desc">Unagi Don</p>
                                <div class="item-dots"></div>
                                <span class="item-price">¥3,200</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Seasonal Kaiseki Set</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥6,500</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dessert -->
                <div class="menu-category mt-8 reveal-up">
                    <h2 class="category-title">Dessert<span>04</span></h2>
                    <div class="menu-list">
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Matcha Tiramisu</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,500</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Yuzu Sorbet</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,200</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Mochi Ice Cream Trio</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,300</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3 class="item-name">Sakura Panna Cotta</h3>
                                <div class="item-dots"></div>
                                <span class="item-price">¥1,400</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        '''
    },
    'reservation': {
        'title': 'Reservation | Sakura Essence Omakase',
        'content': '''
        <section class="page-header">
            <div class="container text-center">
                <h1 class="display-text reveal-up">Reserve a Table</h1>
                <p class="text-lead reveal-up delay-1">Join us for an unforgettable evening in Tokyo.</p>
            </div>
        </section>

        <section class="section reservation-section">
            <div class="container container-sm reveal-up">
                <form class="reservation-form" id="resForm">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" required placeholder="John Doe">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" required placeholder="+81 ...">
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" required placeholder="john@example.com">
                        </div>
                        <div class="form-group">
                            <label for="guests">Number of Guests</label>
                            <select id="guests" required>
                                <option value="1">1 Person</option>
                                <option value="2" selected>2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5+">5+ People (Contact directly)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="date">Date</label>
                            <input type="date" id="date" required>
                        </div>
                        <div class="form-group">
                            <label for="time">Time</label>
                            <select id="time" required>
                                <option value="17:30">17:30 (1st Seating)</option>
                                <option value="18:30">18:30</option>
                                <option value="19:30">19:30</option>
                                <option value="20:30">20:30 (2nd Seating)</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group full-width">
                        <label for="requests">Special Requests (Dietary Restrictions)</label>
                        <textarea id="requests" rows="4" placeholder="Please list any allergies..."></textarea>
                    </div>
                    <div class="form-submit text-center mt-5">
                        <button type="submit" class="btn btn-primary w-full">Reserve Table</button>
                    </div>
                </form>
            </div>
        </section>
        '''
    },
    'gallery': {
        'title': 'Gallery | Sakura Essence Omakase',
        'content': '''
        <section class="page-header">
            <div class="container text-center">
                <h1 class="display-text reveal-up">The Experience</h1>
                <p class="text-lead reveal-up delay-1">A visual taste of Sakura Essence.</p>
            </div>
        </section>

        <section class="section gallery-section">
            <div class="container">
                <div class="gallery-grid">
                    <div class="gallery-item reveal-up">
                        <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000&auto=format&fit=crop" alt="Preparation">
                    </div>
                    <div class="gallery-item reveal-up delay-1">
                        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop" alt="Toro Nigiri">
                    </div>
                    <div class="gallery-item reveal-up">
                        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop" alt="Chef">
                    </div>
                    <div class="gallery-item reveal-up delay-1">
                        <img src="https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=1000&auto=format&fit=crop" alt="Uni">
                    </div>
                    <div class="gallery-item reveal-up portrait">
                        <img src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1000&auto=format&fit=crop" alt="Sashimi">
                    </div>
                    <div class="gallery-item reveal-up delay-1 landscape">
                        <img src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1000&auto=format&fit=crop" alt="Interior">
                    </div>
                </div>
            </div>
        </section>
        '''
    },
    'about': {
        'title': 'About Us | Sakura Essence Omakase',
        'content': '''
        <section class="page-header">
            <div class="container">
                <h1 class="display-text reveal-up">Our Story</h1>
            </div>
        </section>

        <section class="section about-content">
            <div class="container container-split">
                <div class="image-side reveal-up">
                    <div class="img-wrapper">
                        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop" alt="Chef Kenji">
                    </div>
                </div>
                <div class="content-side reveal-up delay-1">
                    <h2 class="section-title">Master Chef Kenji</h2>
                    <p class="text-lead">Over twenty years of silent pursuit of perfection.</p>
                    <div class="story-text">
                        <p>Born into a family of fishermen in Hokkaido, Chef Kenji developed a profound respect for the sea from an early age. His journey led him to the heart of Tokyo, where he trained rigorously under Edomae sushi masters for fifteen years.</p>
                        <p>At Sakura Essence, the philosophy is simple: source only the absolute best, apply technique only to elevate natural flavors, and serve with deep honor and respect.</p>
                        <p>Awarded two Michelin Stars in 2023, Sakura Essence continues to be a sanctuary for culinary purists.</p>
                    </div>
                </div>
            </div>
        </section>
        '''
    },
    'contact': {
        'title': 'Contact | Sakura Essence Omakase',
        'content': '''
        <section class="page-header">
            <div class="container text-center">
                <h1 class="display-text reveal-up">Contact</h1>
                <p class="text-lead reveal-up delay-1">Find us in the heart of Tokyo.</p>
            </div>
        </section>

        <section class="section contact-section">
            <div class="container container-split">
                <div class="content-side reveal-up">
                    <div class="contact-info">
                        <h3>Address</h3>
                        <p>1-chome-5-8 Ginza<br>Chuo City, Tokyo 104-0061<br>Japan</p>
                        
                        <h3>Operating Hours</h3>
                        <p>Tuesday - Sunday</p>
                        <p>1st Seating: 17:30</p>
                        <p>2nd Seating: 20:30</p>
                        <p class="text-muted">Closed on Mondays</p>

                        <h3>Connect</h3>
                        <p>Phone: +81 3-5555-0199</p>
                        <p>Email: reservations@sakuraessence.jp</p>
                        
                        <div class="social-links mt-4">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">LINE</a>
                        </div>
                    </div>
                </div>
                <div class="image-side reveal-up delay-1">
                    <div class="map-wrapper">
                        <!-- Placeholder for Google Maps iframe -->
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0560833139886!2d139.7645498!3d35.6756185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be622872323%3A0xe9f00115e0766465!2sGinza%2C%20Chuo%20City%2C%20Tokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
        '''
    }
}

template = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body class="loading">
    
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>

    <div class="music-toggle" id="musicToggle">
        <div class="bars">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <span>BGM</span>
    </div>
    <!-- Hidden ambient audio -->
    <audio id="ambientMusic" loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/01/21/audio_3101859c03.mp3?filename=japanese-koto-106511.mp3" type="audio/mpeg">
    </audio>

    <!-- Preloader -->
    <div class="preloader">
        <div class="loader-logo">Sakura Essence</div>
        <div class="loader-line"></div>
    </div>

    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="brand">SAKURA ESSENCE</a>
            
            <div class="menu-btn" id="menuBtn">
                <span></span>
                <span></span>
            </div>

            <div class="nav-links" id="navLinks">
                <a href="index.html" class="{active_index}">Home</a>
                <a href="menu.html" class="{active_menu}">Menu</a>
                <a href="reservation.html" class="{active_reservation}">Reservation</a>
                <a href="gallery.html" class="{active_gallery}">Gallery</a>
                <a href="about.html" class="{active_about}">About</a>
                <a href="contact.html" class="{active_contact}">Contact</a>
            </div>
        </div>
    </nav>

    <main class="page-wrapper">
        {content}
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">SAKURA ESSENCE</div>
                <div class="footer-links">
                    <a href="menu.html">Menu</a>
                    <a href="reservation.html">Reservation</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Sakura Essence Omakase. Tokyo, Japan.</p>
                <div class="socials">
                    <a href="#">IG</a>
                    <a href="#">FB</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
'''

for page_name, data in pages.items():
    filename = f"c:/Users/bhaga/OneDrive/WEB SELLING/Show websites/sites/omakase/{page_name}.html"
    
    # Generate active classes
    actives = {f'active_{k}': '' for k in pages.keys()}
    actives[f'active_{page_name}'] = 'active'
    
    html = template.format(
        title=data['title'],
        content=data['content'],
        **actives
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(html)
        
print("HTML templates built.")
