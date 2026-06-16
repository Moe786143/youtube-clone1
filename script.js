// ===== VIDEO DATA =====
const videos = [
  {
    id: 1,
    title: "Build a Complete React App - Full Tutorial",
    channel: "Traversy Media",
    views: "1.2M views",
    time: "3 days ago",
    duration: "2:14:32",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=1",
    embedId: "w7ejDZ8SWv8",
    likes: 48200,
  },
  {
    id: 2,
    title: "CSS Flexbox in 20 Minutes",
    channel: "Traversy Media",
    views: "2.4M views",
    time: "1 week ago",
    duration: "20:00",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/JJSoEo8JSnc/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=2",
    embedId: "JJSoEo8JSnc",
    likes: 31500,
  },
  {
    id: 3,
    title: "JavaScript Crash Course for Beginners",
    channel: "Traversy Media",
    views: "5.1M views",
    time: "2 weeks ago",
    duration: "1:40:29",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=3",
    embedId: "hdI2bqOjy3c",
    likes: 89100,
  },
  {
    id: 4,
    title: "Lo-fi Hip Hop Beats - Study & Relax",
    channel: "Lofi Girl",
    views: "50M views",
    time: "2 years ago",
    duration: "LIVE",
    category: "music",
    thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=4",
    embedId: "jfKfPfyJRdk",
    likes: 2100000,
  },
  {
    id: 5,
    title: "Top 10 VS Code Extensions for Web Developers",
    channel: "Fireship",
    views: "1.5M views",
    time: "5 days ago",
    duration: "8:22",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/u21W_tfPVrY/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=5",
    embedId: "u21W_tfPVrY",
    likes: 125000,
  },
  {
    id: 6,
    title: "Python for Beginners - Full Course",
    channel: "Programming with Mosh",
    views: "15M views",
    time: "1 month ago",
    duration: "6:14:07",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=6",
    embedId: "_uQrJ0TkZlc",
    likes: 450000,
  },
  {
    id: 7,
    title: "100+ JavaScript Concepts you Need to Know",
    channel: "Fireship",
    views: "3.2M views",
    time: "3 months ago",
    duration: "18:50",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/lkIFF4maKMU/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=7",
    embedId: "lkIFF4maKMU",
    likes: 98000,
  },
  {
    id: 8,
    title: "Node.js and Express.js Full Course",
    channel: "freeCodeCamp",
    views: "2.8M views",
    time: "6 months ago",
    duration: "8:16:00",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=8",
    embedId: "Oe421EPjeBE",
    likes: 12300,
  },
  {
    id: 9,
    title: "Git and GitHub for Beginners - Crash Course",
    channel: "freeCodeCamp",
    views: "4.5M views",
    time: "2 days ago",
    duration: "1:08:29",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=9",
    embedId: "RGOj5yH7evk",
    likes: 67000,
  },
  {
    id: 10,
    title: "JavaScript in 100 Seconds",
    channel: "Fireship",
    views: "3.8M views",
    time: "2 years ago",
    duration: "1:40",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/DHjqpvDnNGE/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=10",
    embedId: "DHjqpvDnNGE",
    likes: 175000,
  },
  {
    id: 11,
    title: "HTML Full Course - Build a Website Tutorial",
    channel: "freeCodeCamp",
    views: "8.2M views",
    time: "1 week ago",
    duration: "2:01:31",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/pQN-pnXPaVg/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=11",
    embedId: "pQN-pnXPaVg",
    likes: 34500,
  },
  {
    id: 12,
    title: "React JS Full Course 2024",
    channel: "Dave Gray",
    views: "1.1M views",
    time: "6 months ago",
    duration: "9:49:00",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/RVFAyFWO4go/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=12",
    embedId: "RVFAyFWO4go",
    likes: 520000,
  },
  {
    id: 13,
    title: "📹 FakeTube Project Walkthrough - Built with HTML, CSS & JS",
    channel: "Shahid Muhummad",
    views: "1 view",
    time: "Just now",
    duration: "4:30",
    category: "coding",
    thumbnail: "https://img.youtube.com/vi/DHjqpvDnNGE/maxresdefault.jpg",
    avatar: "https://i.pravatar.cc/40?img=15",
    embedId: "DHjqpvDnNGE",
    likes: 1,
    isWalkthrough: true,
  },
];

// ===== STATE =====
let currentCategory = 'all';
let currentView = 'home';
let searchQuery = '';
let likedVideos = new Set();

const WATCH_LATER_KEY = 'faketube-watch-later';

function loadWatchLater() {
  try {
    const stored = JSON.parse(localStorage.getItem(WATCH_LATER_KEY) || '[]');
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
}

let watchLaterIds = loadWatchLater();

// ===== DOM =====
const videoGrid = document.getElementById('videoGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const darkModeBtn = document.getElementById('darkModeBtn');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoIframe = document.getElementById('videoIframe');
const modalTitle = document.getElementById('modalTitle');
const modalChannel = document.getElementById('modalChannel');
const modalViews = document.getElementById('modalViews');
const modalAvatar = document.getElementById('modalAvatar');
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
const relatedGrid = document.getElementById('relatedGrid');
const homeBtn = document.getElementById('homeBtn');
const watchLaterBtn = document.getElementById('watchLaterBtn');
const watchLaterCount = document.getElementById('watchLaterCount');
const categoryBar = document.getElementById('categoryBar');

// ===== DARK MODE =====
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  darkModeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
}

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  darkModeBtn.innerHTML = isDark
    ? '<i class="fa-regular fa-sun"></i>'
    : '<i class="fa-regular fa-moon"></i>';
});

// ===== MENU TOGGLE =====
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  sidebar.classList.toggle('visible');
  mainContent.classList.toggle('expanded');
});

// ===== SIDEBAR NAVIGATION =====
function setActiveSidebarItem(item) {
  document.querySelectorAll('.sidebar-item[data-view]').forEach(el => {
    el.classList.remove('active');
  });
  if (item) item.classList.add('active');
}

homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentView = 'home';
  setActiveSidebarItem(homeBtn);
  categoryBar.hidden = false;
  renderVideos();
});

watchLaterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentView = 'watch-later';
  setActiveSidebarItem(watchLaterBtn);
  categoryBar.hidden = true;
  renderVideos();
});

// ===== WATCH LATER =====
function saveWatchLater() {
  localStorage.setItem(WATCH_LATER_KEY, JSON.stringify([...watchLaterIds]));
  updateWatchLaterCount();
}

function updateWatchLaterCount() {
  watchLaterCount.textContent = `(${watchLaterIds.size})`;
}

function toggleWatchLater(videoId) {
  if (watchLaterIds.has(videoId)) {
    watchLaterIds.delete(videoId);
  } else {
    watchLaterIds.add(videoId);
  }
  saveWatchLater();
  renderVideos();
}

// ===== CATEGORY CHIPS =====
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    currentView = 'home';
    setActiveSidebarItem(homeBtn);
    categoryBar.hidden = false;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentCategory = chip.dataset.category;
    renderVideos();
  });
});

// ===== SEARCH =====
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = searchInput.value.toLowerCase().trim();
  renderVideos();
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.toLowerCase().trim();
  renderVideos();
});

// ===== RENDER VIDEOS =====
function renderVideos() {
  const filtered = videos.filter(v => {
    if (currentView === 'watch-later' && !watchLaterIds.has(v.id)) return false;
    const matchCategory = currentView === 'watch-later' ||
      currentCategory === 'all' ||
      v.category === currentCategory;
    const matchSearch = !searchQuery ||
      v.title.toLowerCase().includes(searchQuery) ||
      v.channel.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  videoGrid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.hidden = false;
    noResults.querySelector('p').textContent =
      currentView === 'watch-later' ? 'No videos in Watch Later' : 'No videos found';
    return;
  }

  noResults.hidden = true;
  filtered.forEach(video => {
    videoGrid.appendChild(createVideoCard(video));
  });
}

// ===== HOVER PREVIEW =====
const PREVIEW_HOVER_DELAY = 1000;
const PREVIEW_FRAME_INTERVAL = 800;

function getPreviewFrames(embedId) {
  return [1, 2, 3].map((n) => `https://img.youtube.com/vi/${embedId}/${n}.jpg`);
}

function setupHoverPreview(card, embedId) {
  const container = card.querySelector('.thumbnail-container');
  const previewImg = card.querySelector('.preview-gif');
  const frames = getPreviewFrames(embedId);

  let hoverTimer = null;
  let frameTimer = null;
  let frameIndex = 0;

  function stopPreview() {
    clearTimeout(hoverTimer);
    hoverTimer = null;
    clearInterval(frameTimer);
    frameTimer = null;
    container.classList.remove('preview-active');
    frameIndex = 0;
    previewImg.src = frames[0];
  }

  function startFrameCycle() {
    frameIndex = 0;
    previewImg.src = frames[0];
    frameTimer = setInterval(() => {
      frameIndex = (frameIndex + 1) % frames.length;
      previewImg.src = frames[frameIndex];
    }, PREVIEW_FRAME_INTERVAL);
  }

  card.addEventListener('mouseenter', () => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    hoverTimer = setTimeout(() => {
      container.classList.add('preview-active');
      startFrameCycle();
    }, PREVIEW_HOVER_DELAY);
  });

  card.addEventListener('mouseleave', stopPreview);
}

// ===== CREATE VIDEO CARD =====
function createVideoCard(video) {
  const isSaved = watchLaterIds.has(video.id);
  const card = document.createElement('div');
  card.className = 'video-card';
  card.innerHTML = `
    <div class="thumbnail-container">
      <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail-main" loading="lazy"
        onerror="this.src='https://via.placeholder.com/480x270/1a1a1a/ffffff?text=Video'" />
      <img class="preview-gif" src="https://img.youtube.com/vi/${video.embedId}/1.jpg" alt="" aria-hidden="true" />
      <button class="watch-later-btn${isSaved ? ' saved' : ''}" type="button"
        aria-label="${isSaved ? 'Remove from Watch Later' : 'Save to Watch Later'}"
        title="${isSaved ? 'Remove from Watch Later' : 'Watch later'}">
        <i class="fa-${isSaved ? 'solid' : 'regular'} fa-clock"></i>
      </button>
      <span class="video-duration">${video.duration}</span>
    </div>
    <div class="video-info">
      <img src="${video.avatar}" alt="${video.channel}" class="channel-avatar"
        onerror="this.src='https://i.pravatar.cc/40'" />
      <div class="video-details">
        ${video.isWalkthrough ? '<span class="walkthrough-badge">📹 MY PROJECT</span>' : ''}
        <div class="video-title">${video.title}</div>
        <div class="video-channel">${video.channel}</div>
        <div class="video-meta">${video.views} · ${video.time}</div>
      </div>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (e.target.closest('.watch-later-btn')) return;
    openVideoModal(video);
  });

  card.querySelector('.watch-later-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWatchLater(video.id);
  });

  setupHoverPreview(card, video.embedId);
  return card;
}

// ===== OPEN VIDEO MODAL =====
let currentVideo = null;

function openVideoModal(video) {
  currentVideo = video;
  videoIframe.src = `https://www.youtube.com/embed/${video.embedId}?autoplay=1`;
  modalTitle.textContent = video.title;
  modalChannel.textContent = video.channel;
  modalViews.textContent = `${video.views} · ${video.time}`;
  modalAvatar.src = video.avatar;
  likeCount.textContent = formatLikes(video.likes);

  if (likedVideos.has(video.id)) {
    likeBtn.classList.add('liked');
  } else {
    likeBtn.classList.remove('liked');
  }

  renderRelated(video);
  videoModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODAL =====
function closeVideoModal() {
  videoIframe.src = '';
  videoModal.hidden = true;
  document.body.style.overflow = '';
  currentVideo = null;
}

closeModal.addEventListener('click', closeVideoModal);

videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) closeVideoModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoModal();
});

// ===== LIKE BUTTON =====
likeBtn.addEventListener('click', () => {
  if (!currentVideo) return;
  if (likedVideos.has(currentVideo.id)) {
    likedVideos.delete(currentVideo.id);
    currentVideo.likes--;
    likeBtn.classList.remove('liked');
  } else {
    likedVideos.add(currentVideo.id);
    currentVideo.likes++;
    likeBtn.classList.add('liked');
  }
  likeCount.textContent = formatLikes(currentVideo.likes);
});

// ===== RELATED VIDEOS =====
function renderRelated(video) {
  const related = videos
    .filter(v => v.id !== video.id && (v.category === video.category || v.channel === video.channel))
    .slice(0, 6);

  relatedGrid.innerHTML = '';
  related.forEach(v => {
    const card = document.createElement('div');
    card.className = 'related-card';
    card.innerHTML = `
      <img src="${v.thumbnail}" alt="${v.title}" class="related-thumbnail"
        onerror="this.src='https://via.placeholder.com/120x68/1a1a1a/ffffff?text=Video'" />
      <div class="related-info">
        <div class="related-title">${v.title}</div>
        <div class="related-channel">${v.channel}</div>
        <div class="related-views">${v.views}</div>
      </div>
    `;
    card.addEventListener('click', () => openVideoModal(v));
    relatedGrid.appendChild(card);
  });
}

// ===== HELPERS =====
function formatLikes(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

// ===== INIT =====
updateWatchLaterCount();
renderVideos();
