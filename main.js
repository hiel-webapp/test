const categories = [
  { name: 'Fashion', sub: 'Y2K & Gorpcore', icon: '👕' },
  { name: 'Lifestyle', sub: 'Modern Living', icon: '🪞' },
  { name: 'Food', sub: 'Global Flavors', icon: '🍜' },
  { name: 'Culture', sub: 'Art & Events', icon: '🎨' },
  { name: 'Music', sub: 'Trending Beats', icon: '🎧' }
];

const regionData = {
  Seoul: [
    { tag: 'HOT PICK', title: 'Gorpcore Minimalism', desc: 'Technical outdoor wear meets sleek urban aesthetics in Hongdae.', image: 'https://images.unsplash.com/photo-1594493247993-530f6f46e8b7?auto=format&fit=crop&w=300&q=60' },
    { tag: 'VIRAL FOOD', title: 'Custard Mochi Buns', desc: 'The latest convenience store snack taking over SNS feeds.', image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf1?auto=format&fit=crop&w=300&q=60' },
    { tag: 'CULTURE', title: 'Immersive Digital Art', desc: 'Meta-verse exhibitions are redefining the Seoul gallery scene.', image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=300&q=60' }
  ],
  Tokyo: [
    { tag: 'FASHION', title: 'Retro Phone Charms', desc: 'Colorful beaded straps dominate Harajuku accessory walls.', image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=300&q=60' },
    { tag: 'FOOD', title: 'Matcha Dessert Labs', desc: 'Hyper-creative matcha parfait bars expand into Shibuya.', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=300&q=60' },
    { tag: 'CULTURE', title: 'Night Vinyl Sessions', desc: 'Small listening rooms blend lo-fi DJ sets with tea pairings.', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300&q=60' }
  ],
  Paris: [
    { tag: 'LIFESTYLE', title: 'Soft Neutral Interiors', desc: 'Cream palettes and curved lighting define new apartment trends.', image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=300&q=60' },
    { tag: 'FOOD', title: 'Butter Board Brunch', desc: 'Social brunch spots reinvent charcuterie-style spreads.', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=300&q=60' },
    { tag: 'CULTURE', title: 'Micro Cinema Clubs', desc: 'Curated 40-minute screening communities are rapidly growing.', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300&q=60' }
  ],
  London: [
    { tag: 'MUSIC', title: 'Lo-fi Synth Waves', desc: 'Neo-underground genre blending UK garage and lo-fi textures.', image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=300&q=60' },
    { tag: 'FASHION', title: 'Trench + Sport Mix', desc: 'Classic trench coats layered with football scarves.', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=300&q=60' },
    { tag: 'FOOD', title: 'Pistachio Everything', desc: 'Pistachio cream drinks and pastries top menu charts.', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=60' }
  ],
  NYC: [
    { tag: 'FASHION', title: 'Matte Silver Accessories', desc: 'Brushed metallic textures replace shiny chrome this season.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=300&q=60' },
    { tag: 'LIFESTYLE', title: 'Grandpa Chic Knits', desc: 'Cozy oversized knitwear rules SoHo and Brooklyn streets.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=60' },
    { tag: 'CULTURE', title: 'Pocket Gallery Popups', desc: 'Tiny one-room exhibitions are attracting Gen-Z creators.', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=300&q=60' }
  ]
};

const feedItems = [
  { title: 'Matte Silver Accessories', desc: 'Brushed metal textures are replacing high-shine finishes this season.', action: 'How to Style', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=60' },
  { title: 'Pistachio Everything', desc: 'From lattes to croissants, pistachio is the flavor profile of the month.', action: 'Shop Now', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=500&q=60' },
  { title: 'Grandpa Chic Knits', desc: 'Cozy oversized and thrifted aesthetics are sweeping urban streets.', action: 'Discover', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=60' },
  { title: 'Lo-fi Synth Waves', desc: 'A new underground genre blending lo-fi indie with retro synth textures.', action: 'Listen Now', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=60' }
];

const categoryGrid = document.getElementById('category-grid');
const regionChips = document.getElementById('region-chips');
const regionList = document.getElementById('region-list');
const feedGrid = document.getElementById('feed-grid');
const mapCity = document.getElementById('map-city');
const mapCaption = document.getElementById('map-caption');

let activeRegion = 'Seoul';

function renderCategories() {
  categoryGrid.innerHTML = categories.map((item) => `
    <article class="category-item">
      <div class="category-icon">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>${item.sub}</p>
    </article>
  `).join('');
}

function renderRegionChips() {
  regionChips.innerHTML = Object.keys(regionData).map((region) => `
    <button type="button" class="${region === activeRegion ? 'active' : ''}" data-region="${region}">${region}</button>
  `).join('');

  regionChips.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      activeRegion = button.dataset.region;
      renderRegionChips();
      renderRegionCards();
    });
  });
}

function renderRegionCards() {
  const list = regionData[activeRegion] ?? [];
  mapCity.textContent = `${activeRegion}${activeRegion === 'Seoul' ? ', KR' : ''}`;
  mapCaption.textContent = `${list.length * 4} New Trend Discoveries Today`;

  regionList.innerHTML = list.map((item) => `
    <article class="region-card">
      <div class="region-thumb" style="background-image:url('${item.image}')"></div>
      <div>
        <p>${item.tag}</p>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');
}

function renderFeed() {
  feedGrid.innerHTML = feedItems.map((item) => `
    <article class="feed-card">
      <div class="feed-image" style="background-image:url('${item.image}')"></div>
      <div class="feed-content">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <button type="button">${item.action}</button>
      </div>
    </article>
  `).join('');
}

renderCategories();
renderRegionChips();
renderRegionCards();
renderFeed();
