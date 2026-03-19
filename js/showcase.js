const demoList = [
  {
    name: "Pak Din Mamak",
    url: "./sites/mamak/index.html",
    thumbnail: "./sites/mamak/images/hero.png"
  },
  {
    name: "Golden Dragon",
    url: "./sites/chinese/index.html",
    thumbnail: "https://images.unsplash.com/photo-1514326640560-7d063030384a"
  },
  {
    name: "SORA Rooftop",
    url: "./sites/rooftop/index.html",
    thumbnail: "https://images.unsplash.com/photo-1570733117311-d990c7816c47"
  },
  {
    name: "Altitude 42",
    url: "./sites/rooftop_bar/index.html",
    thumbnail: "https://images.unsplash.com/photo-1544145945-f904253d0c7b"
  },
  {
    name: "Sweet Haven Café",
    url: "./sites/sweet-haven-cafe/dist/index.html",
    thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
  },
  {
    name: "Sakura Essence",
    url: "./sites/omakase/index.html",
    thumbnail: "https://images.unsplash.com/photo-1553621042-f6e147245754"
  }
];

let currentIndex = 0;
let currentDevice = 'laptop'; // 'phone', 'laptop', 'desktop'

const frameContainer = document.getElementById('frameContainer');
const deviceAura = document.getElementById('deviceAura');
const app = document.getElementById('app');

/* ─── SWIPE NAVIGATION ─── */
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
  const threshold = 50;
  if (touchEndX < touchStartX - threshold) navigate(1); // Swipe left -> next
  if (touchEndX > touchStartX + threshold) navigate(-1); // Swipe right -> prev
}

function attachTouchListeners(doc) {
  doc.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  doc.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
}

// Attach to main document
attachTouchListeners(document);


/* ─── INITIALIZATION ─── */
function init() {
  buildDots();
  updateView();
  
  // Keyboard Listeners
  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === 'ArrowRight') navigate(1);
    if (e.shiftKey && e.key === 'ArrowLeft') navigate(-1);
  });
}

/* ─── NAVIGATION ─── */
function navigate(direction) {
  if (demoList.length === 0) return;
  
  currentIndex = (currentIndex + direction + demoList.length) % demoList.length;
  updateView();
}

function goTo(index) {
  currentIndex = index;
  updateView();
}

/* ─── UPDATE VIEW ─── */
function updateView() {
  if (demoList.length === 0) {
    showPlaceholder();
    return;
  }

  const demo = demoList[currentIndex];
  
  // Update Iframe
  const iframe = frameContainer.querySelector('iframe');
  if (iframe) {
    if (iframe.src !== new URL(demo.url, window.location.href).href) {
      iframe.src = demo.url;
    }
  } else {
    const newIframe = document.createElement('iframe');
    newIframe.src = demo.url;
    newIframe.onload = () => {
      try {
        const iframeDoc = newIframe.contentDocument || newIframe.contentWindow.document;
        if (iframeDoc) attachTouchListeners(iframeDoc);
      } catch (e) {
        console.warn("Could not attach touch listeners to iframe due to CORS or timing", e);
      }
    };
    frameContainer.innerHTML = '';
    frameContainer.appendChild(newIframe);
  }

  // Update Aura (Phone View)
  if (demo.thumbnail) {
    deviceAura.style.backgroundImage = `url('${demo.thumbnail}')`;
  }

  // Update Dots
  updateDots();
}

function showPlaceholder() {
  frameContainer.innerHTML = `
    <div class="placeholder">
      <div class="placeholder-card">Demo Placeholder</div>
      <p>No demos available in the list.</p>
    </div>
  `;
}

/* ─── DEVICE SWITCHING ─── */
function setDevice(device) {
  currentDevice = device;
  
  // Update UI Classes
  app.classList.remove('mode-laptop', 'mode-phone', 'mode-desktop');
  app.classList.add(`mode-${device}`);

  // Update Menu Active State
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.toggle('active', item.id === `item-${device}`);
  });

  // Re-calculate Laptop Scaling if needed
  if (device === 'laptop') {
    handleLaptopScaling();
  } else {
    frameContainer.style.transform = 'none';
  }
}

/* ─── LAPTOP SCALING LOGIC ─── */
// Ensures the 1280x800 laptop frame fits within any screen
function handleLaptopScaling() {
  if (currentDevice !== 'laptop') return;
  
  const width = window.innerWidth * 0.9;
  const height = window.innerHeight * 0.8;
  
  const scale = Math.min(width / 1280, height / 800, 1);
  frameContainer.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', handleLaptopScaling);

/* ─── DOTS BUILDER ─── */
function buildDots() {
  const container = document.getElementById('dotsContainer');
  container.innerHTML = '';
  
  demoList.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = i === currentIndex ? 'dot active' : 'dot';
    dot.onclick = () => goTo(i);
    container.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

// Start
init();

if (window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent)) {
  app.classList.add('is-mobile-device');
  setDevice('phone');
} else {
  setDevice('laptop');
}
