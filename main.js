/* ============================================
   ANTIFORM studios - Project Data & Lightbox
   ============================================

   To add a new project, just add an entry to the
   PROJECTS object below. The key must match the
   data-project attribute on the artwork-item in
   the HTML.

   Fields:
     title        - Project name (required)
     subtitle     - Subheader info (optional)
     description  - Body text (optional)
     tags         - Array of tag strings for filtering
     images       - Array of { src, label } objects.
                    First image is shown in the lightbox.
                    Gallery thumbnails appear if 2+ images.
                    Each label shows centered under the image.
*/

const PROJECTS = {
  'ghaul-cd': {
    title: 'Ghaul cd',
    subtitle: 'cd packaging design',
    description: 'Local hardcore rock band Ghaul approached me to design their full CD release, including album artwork, inner sleeve, and disk. The band gave me creative freedom to shape the visual aesthetic, with input mainly on colour themes and tone. The goal was to create a look that matched their dark and urban sound.',
    tags: ['cd-art', 'album-art'],
    images: [
      { src: 'assets/Ghaul CD/main.png', label: 'EP Cover' },
      { src: 'assets/Ghaul CD/Ghaulep.png', label: 'Pre CC Cover' },
      { src: 'assets/Ghaul CD/Bsideinsert.png', label: 'B-Side Insert' },
      { src: 'assets/Ghaul CD/Back outside + Spine.png', label: 'Back + Spine' },
      { src: 'assets/Ghaul CD/LyricsReverse.png', label: 'Lyrics Reverse' },
      { src: 'assets/Ghaul CD/Behind disk2.png', label: 'Behind Disk' },
      { src: 'assets/Ghaul CD/Cd Silver.png', label: 'CD Silver' }

    ]
  },
  'elite-patches': {
    title: 'Elite Patches',
    subtitle: 'merchandise design',
    description: 'For this collaboration, Third World Elite© commissioned me to design six military-inspired patches for print, merchandising, and sales. The only requirements were a few specific text elements; I handled the visual concept, layout, and overall design, creating cohesive patches that combined tactical aesthetics with a unique, brand-driven style.',
    tags: ['branding', 'merchandise'],
    images: [
      { src: 'assets/Elite patches/main.png', label: 'Spiritual Navigator' },
      { src: 'assets/Elite patches/patch 3.png', label: 'UAV Team' },
      { src: 'assets/Elite patches/PATCH 6.png', label: 'Masonic' },
      { src: 'assets/Elite patches/Patch 5 Alien.png', label: 'Patch 4 Alien' },
      { src: 'assets/Elite patches/patch 4.png', label: 'Patch 5' },
      { src: 'assets/Elite patches/patch 5.png', label: 'Patch 6' },
      { src: 'assets/Elite patches/patch 7 (freebie).png', label: 'Patch 6 (Freebie)' },
      { src: 'assets/Elite patches/elite patch 2 (PMC).png', label: 'Patch 8 (PMC)' },
      { src: 'assets/Elite patches/elite patch 2.png', label: 'Patch 8' },
      { src: 'assets/Elite patches/patch 8 (freebie).png', label: 'Patch 9 ' }
    ]
  },
  'evil-street': {
    title: 'Evil Street',
    subtitle: 'concept artwork',
    description: '',
    tags: ['concept-art'],
    images: [
      { src: 'assets/Evil Street/main.png', label: 'Main' },
      { src: 'assets/Evil Street/vislang mockup 1.png', label: 'Mockup' },
      { src: 'assets/Evil Street/vislang design 1.png', label: 'Design' },
      { src: 'assets/Evil Street/Vislang backside.png', label: 'Backside' }
    ]
  },
  '3rd-world-poster': {
    title: '3rd World Poster',
    subtitle: 'poster design',
    description: 'For this project, Third World Elite© commissioned a custom Grand Theft Auto-style poster. The only guideline was to keep it bold and reflective of the artist\'s aesthetic. I developed the visual concept, composition, and stylization, crafting a poster that balanced the iconic GTA vibe with a unique spin tied to his personal brand.',
    tags: ['promotional'],
    images: [
      { src: 'assets/3rd world poster/main.png', label: 'Main' },
      { src: 'assets/3rd world poster/3rd world elite 1.png', label: 'Elite 1' },
            { src: 'assets/3rd world poster/3rd world elite R star.png', label: 'R Star' }
    ]
  },
  'playlist': {
    title: 'Playlist',
    subtitle: 'promotional material',
    description: 'Playlist reached out from denmark to design a poster for an underground rave event',
    tags: ['promotional'],
    images: [
      { src: 'assets/Playlist/main.png', label: 'Playlist' },
      { src: 'assets/Playlist/playlist rave.png', label: 'Merchandise version' },
      { src: 'assets/Playlist/Unvvtitled-1.png', label: 'Instagram version' }
    ]
  },
  'elite-coin': {
    title: 'Elite Coin',
    subtitle: 'branding asset',
    description: 'For this project, Third World Elite© commissioned a custom digital cryptocurrency coin design for personal branding use. The only creative guideline was to make it resemble Bitcoin, with a focus on the circuit board aesthetic. I handled the visual concept, layout, and detailing aiming to match the tech-heavy look of real cryptocurrency while giving it a unique edge tied to his brand.',
    tags: ['branding'],
    images: [
      { src: 'assets/Elite Coin/main.png', label: 'Red version' },
      { src: 'assets/Elite Coin/elite coin 3.png', label: 'Gold' },
    ]
  },
  'headcheck-3': {
    title: 'Headcheck 3',
    subtitle: 'promotional material',
    description: '',
    tags: ['promotional'],
    images: [
      { src: 'assets/Headcheck 3/main.png', label: 'Main' },
      { src: 'assets/Headcheck 3/Headcheck3IG.png', label: 'Unused version' }
    ]
  },
  'headcheck-4': {
    title: 'Headcheck 4',
    subtitle: 'promotional material',
    description: '',
    tags: ['promotional'],
    images: [
      { src: 'assets/Headcheck 4/main.png', label: 'Main' },
      { src: 'assets/Headcheck 4/HU4REALTHISTIME.png', label: 'Unused version' }
    ]
  },
  'ghaul-dsi-tour': {
    title: 'Ghaul DSI Tour',
    subtitle: 'promotional material',
    description: 'promotional tour graphic material for local event organizer NBK Records ',
    tags: ['promotional'],
    images: [
      { src: 'assets/Ghaul dsi tour/main.png', label: 'Main' },
      { src: 'assets/Ghaul dsi tour/GHAUL_DSI AUGUST TOUR ICEDANCER (1).png', label: 'Icedancer' }
    ]
  },
  '5xl-logo': {
    title: '5XL Logo',
    subtitle: 'artwork/social media graphic',
    description: '5xl',
    tags: ['branding'],
    images: [{ src: 'assets/5xl logo.png', label: '' }]
  },
  '7a7p-poster': {
    title: '7a7p RIP Poster',
    subtitle: 'promotional material',
    description: 'promotional tour graphic material for local event organizer NBK Records',
    tags: ['promotional'],
    images: [{ src: 'assets/7a7pRIPposter.png', label: '' }]
  },
  'balenci-ad': {
    title: 'Balenci Mockup',
    subtitle: 'school project',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/Balenci insta ad 3 slides.png', label: '' }]
  },
  'crushed': {
    title: 'CRUSHED',
    subtitle: 'concept artwork',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/CRUSHED.png', label: '' }]
  },
  'bullys-dose': {
    title: 'Bullys Dose',
    subtitle: 'promotional material',
    description: '',
    tags: ['promotional'],
    images: [{ src: 'assets/Feb 9 2025 Bullys Dose ghaul por stunlock.png', label: '' }]
  },
  'fighting-time': {
    title: 'Fighting Time',
    subtitle: 'album art',
    description: '',
    tags: ['album-art'],
    images: [{ src: 'assets/Fighting time.png', label: '' }]
  },
  'front-brochure': {
    title: 'Front Brochure',
    subtitle: 'promotional material',
    description: '',
    tags: ['promotional'],
    images: [{ src: 'assets/front brochure.png', label: '' }]
  },
  'geeked': {
    title: 'Geeked',
    subtitle: 'concept artwork',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/geeked.png', label: '' }]
  },
  'ghaul-floppy': {
    title: 'Ghaul Floppy',
    subtitle: 'promotional material',
    description: 'Digital release promotional material commissioned by the band Ghaul ',
    tags: ['promotional'],
    images: [{ src: 'assets/ghaul floppy.png', label: '' }]
  },
  'head-stomp': {
    title: 'Head Stomp',
    subtitle: '',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/Head stomp.png', label: '' }]
  },
  'ice-castle': {
    title: 'Ice Castle',
    subtitle: 'concept artwork',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/Ice_castle_1.png', label: '' }]
  },
  'jason': {
    title: 'Jason',
    subtitle: 'concept artwork',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/Jason2.png', label: '' }]
  },
  'nbk-crest': {
    title: 'NBK Crest',
    subtitle: 'branding asset',
    description: 'NBK Records Instagram asset',
    tags: ['branding'],
    images: [{ src: 'assets/Nbk crestbb 1.png', label: '' }]
  },
  'poster1': {
    title: 'Poster',
    subtitle: 'promotional material',
    description: 'Local professional Disk Jockeys DJ Everall & Lennard Digital comissioned me for a flyer to an exclusive event.',
    tags: ['promotional'],
    images: [{ src: 'assets/poster1.png', label: '' }]
  },
  'subway': {
    title: 'Subway',
    subtitle: 'concept artwork',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/Subway.png', label: '' }]
  },
  'urbling': {
    title: 'Urbling',
    subtitle: 'concept artwork',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/urbling1.png', label: '' }]
  },
  'y1': {
    title: 'Y1',
    subtitle: 'concept artwork',
    description: '',
    tags: ['concept-art'],
    images: [{ src: 'assets/Y1.png', label: '' }]
  }
};

/* ============================================
   FILTERING, PINNING & EDIT MODE SYSTEM
   ============================================ */

const FilterSystem = {
  currentFilter: 'all',
  pinnedItems: new Set(),
  customOrder: [],
  editMode: false,
  draggedElement: null,
  draggedOverElement: null,

  init() {
    this.loadPinnedItems();
    this.loadCustomOrder();
    this.createFilterUI();
    this.createEditModeUI();
    this.attachEventListeners();
    this.applyFilter();
  },

  loadPinnedItems() {
    const stored = localStorage.getItem('antiform-pinned-items');
    if (stored) {
      try {
        this.pinnedItems = new Set(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load pinned items:', e);
      }
    }
  },

  savePinnedItems() {
    localStorage.setItem('antiform-pinned-items', JSON.stringify([...this.pinnedItems]));
  },

  loadCustomOrder() {
    const stored = localStorage.getItem('antiform-custom-order');
    if (stored) {
      try {
        this.customOrder = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to load custom order:', e);
      }
    }
  },

  saveCustomOrder() {
    localStorage.setItem('antiform-custom-order', JSON.stringify(this.customOrder));
  },

  togglePin(projectId) {
    if (this.pinnedItems.has(projectId)) {
      this.pinnedItems.delete(projectId);
    } else {
      this.pinnedItems.add(projectId);
    }
    this.savePinnedItems();
    this.applyFilter();
  },

  createFilterUI() {
    const featuredSection = document.querySelector('.featured-section');
    const sectionHeading = featuredSection.querySelector('.section-heading');
    
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';
    filterContainer.innerHTML = `
      <div class="filter-dropdown">
        <button class="filter-btn" aria-label="Filter artwork" title="Filter artwork">
          <svg class="filter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
        </button>
        <div class="filter-menu" hidden>
          <button class="filter-option active" data-filter="all">all work</button>
          <button class="filter-option" data-filter="album-art">album art</button>
          <button class="filter-option" data-filter="cd-art">cd art</button>
          <button class="filter-option" data-filter="concept-art">concept art</button>
          <button class="filter-option" data-filter="branding">branding</button>
          <button class="filter-option" data-filter="promotional">promotional</button>
          <button class="filter-option" data-filter="merchandise">merchandise</button>
          <button class="filter-option" data-filter="pinned">pinned only</button>
        </div>
      </div>
    `;
    
    sectionHeading.parentNode.insertBefore(filterContainer, sectionHeading);
  },

  createEditModeUI() {
    const featuredSection = document.querySelector('.featured-section');
    const sectionHeading = featuredSection.querySelector('.section-heading');
    
    const editModeContainer = document.createElement('div');
    editModeContainer.className = 'edit-mode-container';
    editModeContainer.innerHTML = `
      <button class="edit-mode-toggle" aria-label="Toggle edit mode" title="Edit layout">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </button>
      <div class="edit-mode-panel" hidden>
        <button class="edit-action-btn" data-action="export" title="Export layout to console">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>Export</span>
        </button>
        <button class="edit-action-btn" data-action="reset" title="Reset to default order">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"/>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
          <span>Reset</span>
        </button>
      </div>
    `;
    
    const filterContainer = document.querySelector('.filter-container');
    filterContainer.appendChild(editModeContainer);
  },

  attachEventListeners() {
    const filterBtn = document.querySelector('.filter-btn');
    const filterMenu = document.querySelector('.filter-menu');
    const filterOptions = document.querySelectorAll('.filter-option');
    const editModeToggle = document.querySelector('.edit-mode-toggle');
    const editModePanel = document.querySelector('.edit-mode-panel');

    // Filter dropdown
    filterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = filterMenu.hasAttribute('hidden');
      if (isHidden) {
        filterMenu.removeAttribute('hidden');
        filterBtn.classList.add('active');
      } else {
        filterMenu.setAttribute('hidden', '');
        filterBtn.classList.remove('active');
      }
    });

    filterOptions.forEach(option => {
      option.addEventListener('click', () => {
        filterOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        this.currentFilter = option.dataset.filter;
        filterMenu.setAttribute('hidden', '');
        filterBtn.classList.remove('active');
        this.applyFilter();
      });
    });

    // Edit mode toggle
    editModeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.editMode = !this.editMode;
      
      if (this.editMode) {
        editModeToggle.classList.add('active');
        editModePanel.removeAttribute('hidden');
        document.body.classList.add('edit-mode-active');
        this.enableDragAndDrop();
      } else {
        editModeToggle.classList.remove('active');
        editModePanel.setAttribute('hidden', '');
        document.body.classList.remove('edit-mode-active');
        this.disableDragAndDrop();
      }
    });

    // Edit mode actions
    document.querySelectorAll('.edit-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.dataset.action;
        if (action === 'export') {
          this.exportLayout();
        } else if (action === 'reset') {
          this.resetLayout();
        }
      });
    });

    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.filter-dropdown')) {
        filterMenu.setAttribute('hidden', '');
        filterBtn.classList.remove('active');
      }
    });

    // Pin button listeners
    document.addEventListener('click', (e) => {
      if (e.target.closest('.pin-btn')) {
        e.stopPropagation();
        const item = e.target.closest('.artwork-item');
        const projectId = item.dataset.project;
        this.togglePin(projectId);
      }
    });
  },

  enableDragAndDrop() {
    const items = document.querySelectorAll('.artwork-item');
    
    // Store bound handlers for removal
    this._dragHandlers = this._dragHandlers || new WeakMap();
    
    items.forEach(item => {
      item.draggable = true;
      item.classList.add('draggable');
      
      const handlers = {
        dragstart: this.handleDragStart.bind(this),
        dragend:   this.handleDragEnd.bind(this),
        dragover:  this.handleDragOver.bind(this),
        drop:      this.handleDrop.bind(this),
        dragenter: this.handleDragEnter.bind(this),
        dragleave: this.handleDragLeave.bind(this)
      };
      this._dragHandlers.set(item, handlers);
      
      item.addEventListener('dragstart', handlers.dragstart);
      item.addEventListener('dragend',   handlers.dragend);
      item.addEventListener('dragover',  handlers.dragover);
      item.addEventListener('drop',      handlers.drop);
      item.addEventListener('dragenter', handlers.dragenter);
      item.addEventListener('dragleave', handlers.dragleave);
    });
  },

  disableDragAndDrop() {
    const items = document.querySelectorAll('.artwork-item');
    
    items.forEach(item => {
      item.draggable = false;
      item.classList.remove('draggable', 'dragging', 'drag-over');
      
      // Remove stored handlers
      if (this._dragHandlers && this._dragHandlers.has(item)) {
        const handlers = this._dragHandlers.get(item);
        item.removeEventListener('dragstart', handlers.dragstart);
        item.removeEventListener('dragend',   handlers.dragend);
        item.removeEventListener('dragover',  handlers.dragover);
        item.removeEventListener('drop',      handlers.drop);
        item.removeEventListener('dragenter', handlers.dragenter);
        item.removeEventListener('dragleave', handlers.dragleave);
        this._dragHandlers.delete(item);
      }
    });
  },

  handleDragStart(e) {
    this.draggedElement = e.currentTarget;
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
  },

  handleDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
    
    // Remove all drag-over classes
    document.querySelectorAll('.drag-over').forEach(item => {
      item.classList.remove('drag-over');
    });
    
    this.draggedElement = null;
    this.draggedOverElement = null;
  },

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  },

  handleDragEnter(e) {
    if (e.currentTarget !== this.draggedElement) {
      e.currentTarget.classList.add('drag-over');
      this.draggedOverElement = e.currentTarget;
    }
  },

  handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
  },

  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    
    e.currentTarget.classList.remove('drag-over');
    
    if (this.draggedElement !== e.currentTarget) {
      const grid = document.querySelector('.modular-grid');
      const allItems = Array.from(grid.querySelectorAll('.artwork-item'));
      const draggedIndex = allItems.indexOf(this.draggedElement);
      const targetIndex = allItems.indexOf(e.currentTarget);
      
      if (draggedIndex < targetIndex) {
        e.currentTarget.parentNode.insertBefore(this.draggedElement, e.currentTarget.nextSibling);
      } else {
        e.currentTarget.parentNode.insertBefore(this.draggedElement, e.currentTarget);
      }
      
      // Save new order
      this.saveCurrentOrder();
    }
    
    return false;
  },

  saveCurrentOrder() {
    const grid = document.querySelector('.modular-grid');
    const items = Array.from(grid.querySelectorAll('.artwork-item'));
    this.customOrder = items.map(item => item.dataset.project);
    this.saveCustomOrder();
  },

  applyFilter() {
    const grid = document.querySelector('.modular-grid');
    const items = Array.from(document.querySelectorAll('.artwork-item'));
    
    // Determine order
    let orderedItems = items;
    
    if (this.customOrder.length > 0) {
      // Use custom order
      orderedItems = [];
      this.customOrder.forEach(projectId => {
        const item = items.find(i => i.dataset.project === projectId);
        if (item) orderedItems.push(item);
      });
      // Add any items not in custom order
      items.forEach(item => {
        if (!orderedItems.includes(item)) {
          orderedItems.push(item);
        }
      });
    } else {
      // Sort: pinned first, then original order
      orderedItems.sort((a, b) => {
        const aId = a.dataset.project;
        const bId = b.dataset.project;
        const aPinned = this.pinnedItems.has(aId);
        const bPinned = this.pinnedItems.has(bId);
        
        if (aPinned && !bPinned) return -1;
        if (!aPinned && bPinned) return 1;
        return 0;
      });
    }

    // Filter and display
    orderedItems.forEach(item => {
      const projectId = item.dataset.project;
      const project = PROJECTS[projectId];
      const isPinned = this.pinnedItems.has(projectId);
      
      // Update pin button state
      this.updatePinButton(item, isPinned);
      
      let shouldShow = false;
      
      if (this.currentFilter === 'all') {
        shouldShow = true;
      } else if (this.currentFilter === 'pinned') {
        shouldShow = isPinned;
      } else if (project && project.tags) {
        shouldShow = project.tags.includes(this.currentFilter);
      }
      
      if (shouldShow) {
        item.style.display = '';
        grid.appendChild(item); // Re-append to reorder
      } else {
        item.style.display = 'none';
      }
    });
  },

  updatePinButton(item, isPinned) {
    let pinBtn = item.querySelector('.pin-btn');
    
    if (!pinBtn) {
      pinBtn = document.createElement('button');
      pinBtn.className = 'pin-btn';
      pinBtn.setAttribute('aria-label', 'Pin this artwork');
      pinBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 17v5"/>
          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>
        </svg>
      `;
      item.appendChild(pinBtn);
    }
    
    if (isPinned) {
      pinBtn.classList.add('pinned');
    } else {
      pinBtn.classList.remove('pinned');
    }
  },

  exportLayout() {
    const layoutData = {
      pinnedItems: [...this.pinnedItems],
      customOrder: this.customOrder,
      timestamp: new Date().toISOString()
    };
    
    console.log('='.repeat(60));
    console.log('ANTIFORM STUDIOS - LAYOUT EXPORT');
    console.log('='.repeat(60));
    console.log('\nCopy this data to save your layout:\n');
    console.log(JSON.stringify(layoutData, null, 2));
    console.log('\n' + '='.repeat(60));
    console.log('\nTo apply this layout globally:');
    console.log('1. Copy the customOrder array');
    console.log('2. Paste it as the DEFAULT_ORDER constant in main.js');
    console.log('3. Update the HTML to match this order');
    console.log('\n' + '='.repeat(60));
    
    // Also show code snippet
    console.log('\nAdd this to your HTML in the featured-section:');
    console.log('\n<div class="modular-grid">');
    this.customOrder.forEach(projectId => {
      console.log(`  <div class="artwork-item" data-project="${projectId}">`);
      console.log(`    <img src="[path]" alt="${PROJECTS[projectId]?.title || projectId}">`);
      console.log(`  </div>`);
    });
    console.log('</div>\n');
    
    // Show alert
    alert('Layout exported to console! Press F12 to view.');
  },

  resetLayout() {
    if (confirm('Reset layout to default order? This will clear your custom arrangement.')) {
      this.customOrder = [];
      this.saveCustomOrder();
      this.applyFilter();
      alert('Layout reset to default order.');
    }
  }
};

// Initialize filter system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  FilterSystem.init();
});

/* ============================================
   LIGHTBOX with 3D tilt, shine, holographic
   ============================================ */

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const artworkItems = document.querySelectorAll('.artwork-item');
  const closeBtn  = lightbox.querySelector('.lightbox-close');
  const prevBtn   = lightbox.querySelector('#lightbox-prev');
  const nextBtn   = lightbox.querySelector('#lightbox-next');
  const imgEl     = lightbox.querySelector('#lightbox-image');
  const titleEl   = lightbox.querySelector('#lightbox-title');
  const subtitleEl= lightbox.querySelector('#lightbox-subtitle');
  const descEl    = lightbox.querySelector('#lightbox-description');
  const galleryEl = lightbox.querySelector('#lightbox-gallery');
  const labelEl   = lightbox.querySelector('#lightbox-image-label');

  if (!imgEl) return;

  /* ── Transparent Click Detection ──────────────────────────────── */
  let offscreenCanvas = null;
  let offCtx          = null;
  let imgBounds       = null;

  function refreshOffscreenCanvas() {
    if (!imgEl.complete || !imgEl.naturalWidth) return;
    const w = imgEl.naturalWidth, h = imgEl.naturalHeight;
    if (!offscreenCanvas || offscreenCanvas.width !== w || offscreenCanvas.height !== h) {
      offscreenCanvas = document.createElement('canvas');
      offscreenCanvas.width  = w;
      offscreenCanvas.height = h;
      offCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true });
    }
    offCtx.clearRect(0, 0, w, h);
    offCtx.drawImage(imgEl, 0, 0);
    imgBounds = imgEl.getBoundingClientRect();
  }

  function isTransparentAt(clientX, clientY) {
    if (!imgBounds || !offscreenCanvas) return false;
    const rect = imgBounds;
    const x = clientX - rect.left, y = clientY - rect.top;
    if (x < 0 || x >= rect.width || y < 0 || y >= rect.height) return true;

    const scaleX = offscreenCanvas.width  / rect.width;
    const scaleY = offscreenCanvas.height / rect.height;
    const px = Math.floor(x * scaleX);
    const py = Math.floor(y * scaleY);
    if (px < 0 || px >= offscreenCanvas.width || py < 0 || py >= offscreenCanvas.height) return true;

    const data = offCtx.getImageData(px, py, 1, 1).data;
    return data[3] < 10;
  }

  /* load listener moved below — see alpha mask section */

  /* ── Tilt container & shine canvas ──────────────────────────────  */
  const tiltEl = document.createElement('div');
  tiltEl.className = 'lightbox-image-tilt';

  const shineCvs = document.createElement('canvas');
  shineCvs.className = 'lightbox-shine-canvas';

  const imageWrap = lightbox.querySelector('.lightbox-image-wrap');
  const parent = imgEl.parentNode;
  parent.insertBefore(tiltEl, imgEl);
  tiltEl.appendChild(imgEl);
  tiltEl.appendChild(shineCvs);

  const shineCtx = shineCvs.getContext('2d', { alpha: true });

  /* ── Zoom panel & lens — append to LIGHTBOX for correct absolute positioning ── */
  const zoomPanel = document.createElement('div');
  zoomPanel.className = 'lightbox-zoom-panel';
  const zoomCvs = document.createElement('canvas');
  zoomPanel.appendChild(zoomCvs);
  lightbox.appendChild(zoomPanel);   /* on the lightbox itself, not imageWrap */
  const zoomCtx = zoomCvs.getContext('2d', { alpha: true });

  const zoomLens = document.createElement('div');
  zoomLens.className = 'lightbox-zoom-lens';
  tiltEl.appendChild(zoomLens);

  /* ── Alpha mask canvas (built ONCE per image load, reused every frame) ── */
  let alphaMask = null;
  let alphaMaskW = 0, alphaMaskH = 0;

  function buildAlphaMask() {
    if (!offscreenCanvas || !offCtx) return;
    /* Match the display size so we can composite directly */
    const displayRect = imgEl.getBoundingClientRect();
    const dw = Math.round(displayRect.width);
    const dh = Math.round(displayRect.height);
    if (dw < 1 || dh < 1) return;

    if (!alphaMask || alphaMaskW !== dw || alphaMaskH !== dh) {
      alphaMask  = document.createElement('canvas');
      alphaMask.width  = dw;
      alphaMask.height = dh;
      alphaMaskW = dw;
      alphaMaskH = dh;
    }
    const actx = alphaMask.getContext('2d');
    actx.clearRect(0, 0, dw, dh);
    actx.drawImage(imgEl, 0, 0, dw, dh);
  }

  /* Rebuild alpha mask when image changes */
  const origOnLoad = imgEl.addEventListener('load', () => {
    refreshOffscreenCanvas();
    alphaMask = null;          /* force rebuild on next tick */
  });

  /* ── Settings ─────────────────────────────────────────────────── */
  const S = { parallax: true, shine: false, holo: false, zoom: false };

  /* ── Gear button ─────────────────────────────────────────────── */
  const gearBtn = document.createElement('button');
  gearBtn.className = 'lightbox-gear-btn';
  gearBtn.setAttribute('aria-label', 'Viewer settings');
  gearBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>`;
  lightbox.appendChild(gearBtn);

  /* ── Settings panel ───────────────────────────────────────────── */
  const panel = document.createElement('div');
  panel.className = 'lightbox-settings-panel';
  lightbox.appendChild(panel);

  function mkRow(id, label, on, note) {
    return `<label class="settings-toggle">
      <span class="toggle-track">
        <input type="checkbox" id="${id}"${on ? ' checked' : ''}>
        <span class="toggle-thumb"></span>
      </span>
      <span class="toggle-label">${label}${note ? `<span class="toggle-note">${note}</span>` : ''}</span>
    </label>`;
  }

  panel.innerHTML = `
    <p class="settings-panel-heading">viewer settings</p>
    <span class="settings-group-label">movement</span>
    ${mkRow('s-parallax', '3d parallax tilt',  S.parallax)}
    <span class="settings-group-label">surface</span>
    ${mkRow('s-shine',    'shine overlay',      S.shine)}
    ${mkRow('s-holo',     'holographic',        S.holo)}
    <span class="settings-group-label">tools</span>
    ${mkRow('s-zoom',     'magnifier',          S.zoom)}
  `;

  function wire(id, key, cb) {
    panel.querySelector('#' + id).addEventListener('change', (e) => {
      S[key] = e.target.checked;
      if (cb) cb(e.target.checked);
      schedTick();
    });
  }

  wire('s-parallax', 'parallax', on => { if (!on) tiltEl.style.transform = 'rotateX(0deg) rotateY(0deg)'; });
  wire('s-shine',    'shine',    ()  => { if (!S.shine && !S.holo) shineCvs.style.opacity = '0'; });
  wire('s-holo',     'holo',    on  => {
    if (!on && !S.shine) shineCvs.style.opacity = '0';
    if (on && overImage && !rafId) rafId = requestAnimationFrame(tick);
  });
  wire('s-zoom', 'zoom', on => {
    if (!on) { zoomPanel.style.opacity = '0'; zoomLens.style.opacity = '0'; }
    if (on && overImage && !rafId) rafId = requestAnimationFrame(tick);
  });

  /* Toggle .open class */
  function openPanel()  { panel.classList.add('open');    gearBtn.classList.add('active'); }
  function closePanel() { panel.classList.remove('open'); gearBtn.classList.remove('active'); }
  function panelOpen()  { return panel.classList.contains('open'); }

  gearBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    panelOpen() ? closePanel() : openPanel();
  });
  panel.addEventListener('click', e => e.stopPropagation());

  /* ── State ───────────────────────────────────────────────────── */
  let mx = 0, my = 0, inside = false, overImage = false;
  let rafId = null, lastT = 0;
  const dt = 1 / 60;

  function schedTick() { if (!rafId && overImage) rafId = requestAnimationFrame(tick); }

  function tick(t) {
    rafId = null;
    if (!inside || !overImage) return;

    const elapsed = lastT ? (t - lastT) / 1000 : dt;
    lastT = t;

    const rect  = tiltEl.getBoundingClientRect();
    const cx    = rect.left + rect.width  / 2;
    const cy    = rect.top  + rect.height / 2;
    const normX = (mx - cx) / (rect.width  / 2);
    const normY = (my - cy) / (rect.height / 2);

    /* ── Parallax tilt ─────────────────────────────────────────── */
    if (S.parallax) {
      const maxTilt = 6;
      const rx = -normY * maxTilt;
      const ry =  normX * maxTilt;
      tiltEl.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }

    /* ── Shine / Holographic ──────────────────────────────────────  */
    if (S.shine || S.holo) {
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);

      /* Only resize canvas when dimensions actually change */
      if (shineCvs.width !== w || shineCvs.height !== h) {
        shineCvs.width  = w;
        shineCvs.height = h;
        alphaMask = null;  /* force alpha mask rebuild at new size */
      }
      shineCtx.clearRect(0, 0, w, h);

      /* Lazy-build the alpha mask (once per image, not per frame) */
      if (!alphaMask && imgEl.complete && imgEl.naturalWidth) {
        buildAlphaMask();
      }

      if (S.holo) {
        const angle = Math.atan2(normY, normX);
        const dist  = Math.sqrt(normX * normX + normY * normY);
        const time  = t * 0.001;

        /* Sweeping rainbow gradient */
        const gx = (normX * 0.5 + 0.5) * w;
        const gy = (normY * 0.5 + 0.5) * h;
        const grad = shineCtx.createLinearGradient(
          gx - w * 0.7, gy - h * 0.7,
          gx + w * 0.7, gy + h * 0.7
        );
        const hueShift = (normX + normY) * 60 + time * 30;
        for (let s = 0; s <= 1; s += 0.14) {
          const hue = (hueShift + s * 360) % 360;
          grad.addColorStop(s, `hsla(${hue}, 75%, 62%, ${0.15 + dist * 0.1})`);
        }
        shineCtx.fillStyle = grad;
        shineCtx.fillRect(0, 0, w, h);

        /* Iridescent hotspot */
        const rg = shineCtx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(w, h) * 0.5);
        rg.addColorStop(0,   `hsla(${(hueShift + 180) % 360}, 85%, 72%, 0.18)`);
        rg.addColorStop(0.5, `hsla(${(hueShift + 90)  % 360}, 65%, 58%, 0.07)`);
        rg.addColorStop(1,   'hsla(0,0%,100%,0)');
        shineCtx.fillStyle = rg;
        shineCtx.fillRect(0, 0, w, h);

        /* Sparkles */
        for (let i = 0; i < 10; i++) {
          const seed = Math.floor(time * 1.2);
          const sx = ((Math.sin(i * 127.1 + seed * 0.15) * 0.5 + 0.5) * 0.8 + 0.1) * w;
          const sy = ((Math.cos(i * 269.5 + seed * 0.15) * 0.5 + 0.5) * 0.8 + 0.1) * h;
          const pulse = Math.sin(time * 2 + i * 2.3 + angle * 1.5) * 0.5 + 0.5;
          const a = pulse * pulse * (0.2 + dist * 0.4);
          if (a > 0.05) {
            const r = 0.6 + pulse * 1.0;
            shineCtx.beginPath();
            shineCtx.arc(sx, sy, r, 0, Math.PI * 2);
            shineCtx.fillStyle = `rgba(255,255,255,${a.toFixed(2)})`;
            shineCtx.fill();
            if (a > 0.3) {
              const arm = r * 3.5;
              shineCtx.strokeStyle = `rgba(255,255,255,${(a * 0.3).toFixed(2)})`;
              shineCtx.lineWidth = 0.4;
              shineCtx.beginPath();
              shineCtx.moveTo(sx - arm, sy); shineCtx.lineTo(sx + arm, sy);
              shineCtx.moveTo(sx, sy - arm); shineCtx.lineTo(sx, sy + arm);
              shineCtx.stroke();
            }
          }
        }

        /* Clip to image shape */
        if (alphaMask) {
          shineCtx.globalCompositeOperation = 'destination-in';
          shineCtx.drawImage(alphaMask, 0, 0);
          shineCtx.globalCompositeOperation = 'source-over';
        }
        shineCvs.style.opacity = '1';

      } else if (S.shine) {
        const grad = shineCtx.createRadialGradient(
          (normX * 0.5 + 0.5) * w,
          (normY * 0.5 + 0.5) * h,
          0, w / 2, h / 2,
          Math.max(w, h) * 0.7
        );
        grad.addColorStop(0,   'rgba(255,255,255,0.12)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0.03)');
        grad.addColorStop(1,   'rgba(255,255,255,0)');
        shineCtx.fillStyle = grad;
        shineCtx.fillRect(0, 0, w, h);

        if (alphaMask) {
          shineCtx.globalCompositeOperation = 'destination-in';
          shineCtx.drawImage(alphaMask, 0, 0);
          shineCtx.globalCompositeOperation = 'source-over';
        }
        shineCvs.style.opacity = '1';
      }
    }

    /* ── Magnifier ─────────────────────────────────────────────── */
    if (S.zoom && imgEl.complete && imgEl.naturalWidth) {
      const imgRect = imgEl.getBoundingClientRect();
      const relX = (mx - imgRect.left) / imgRect.width;
      const relY = (my - imgRect.top)  / imgRect.height;

      if (relX >= 0 && relX <= 1 && relY >= 0 && relY <= 1) {
        const panelW = 320, panelH = 320;
        const scale = 2.5;

        if (zoomCvs.width !== panelW) zoomCvs.width = panelW;
        if (zoomCvs.height !== panelH) zoomCvs.height = panelH;

        const srcW = imgEl.naturalWidth  / scale;
        const srcH = imgEl.naturalHeight / scale;
        const srcX = Math.max(0, Math.min(imgEl.naturalWidth  - srcW, relX * imgEl.naturalWidth  - srcW / 2));
        const srcY = Math.max(0, Math.min(imgEl.naturalHeight - srcH, relY * imgEl.naturalHeight - srcH / 2));

        zoomCtx.clearRect(0, 0, panelW, panelH);
        zoomCtx.drawImage(imgEl, srcX, srcY, srcW, srcH, 0, 0, panelW, panelH);

        /* Lens on image */
        const lensSize = 70;
        zoomLens.style.width  = lensSize + 'px';
        zoomLens.style.height = lensSize + 'px';
        zoomLens.style.left   = (mx - imgRect.left - lensSize / 2) + 'px';
        zoomLens.style.top    = (my - imgRect.top  - lensSize / 2) + 'px';
        zoomLens.style.opacity = '1';

        /* Position: bottom-right corner of viewport, like a picture-in-picture */
        const margin = 20;
        zoomPanel.style.left = (window.innerWidth - panelW - margin) + 'px';
        zoomPanel.style.top  = (window.innerHeight - panelH - margin) + 'px';
        zoomPanel.style.width  = panelW + 'px';
        zoomPanel.style.height = panelH + 'px';
        zoomPanel.style.opacity = '1';
      } else {
        zoomPanel.style.opacity = '0';
        zoomLens.style.opacity  = '0';
      }
    } else {
      zoomPanel.style.opacity = '0';
      zoomLens.style.opacity  = '0';
    }

    rafId = requestAnimationFrame(tick);
  }

  /* ── Mouse tracking ───────────────────────────────────────────── */
  lightbox.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

  lightbox.addEventListener('mouseenter', () => { inside = true; schedTick(); });
  lightbox.addEventListener('mouseleave', () => {
    inside = false;
    overImage = false;
    tiltEl.classList.remove('tilt-active');
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    /* Let CSS transition handle the slow snap-back */
    tiltEl.style.transform  = 'rotateX(0deg) rotateY(0deg)';
    shineCvs.style.opacity  = '0';
    zoomPanel.style.opacity = '0';
    zoomLens.style.opacity  = '0';
  });

  tiltEl.addEventListener('mouseenter', () => { overImage = true; tiltEl.classList.add('tilt-active'); schedTick(); });
  tiltEl.addEventListener('mouseleave', () => {
    overImage = false;
    tiltEl.classList.remove('tilt-active');
    /* Slow snap-back handled by CSS transition on .lightbox-image-tilt */
    tiltEl.style.transform = 'rotateX(0deg) rotateY(0deg)';
    shineCvs.style.opacity  = '0';
    zoomPanel.style.opacity = '0';
    zoomLens.style.opacity  = '0';
  });

  /* ── Navigation ─────────────────────────────────────────────── */
  let currentProject = null, currentImageIndex = 0;

  function navigate(dir) {
    if (!currentProject || currentProject.images.length < 2) return;
    currentImageIndex = (currentImageIndex + dir + currentProject.images.length) % currentProject.images.length;
    setMainImage(currentProject, currentImageIndex, imgEl, labelEl);
    galleryEl.querySelectorAll('.lightbox-gallery-thumb')
      .forEach((t, i) => t.classList.toggle('active', i === currentImageIndex));
  }

  if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));

  /* ── Open lightbox ───────────────────────────────────────────── */
  artworkItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Don't open lightbox if in edit mode or clicking pin button
      if (FilterSystem.editMode || e.target.closest('.pin-btn')) return;
      
      const project = PROJECTS[item.dataset.project];
      if (!project) return;

      currentProject    = project;
      currentImageIndex = 0;

      titleEl.textContent    = project.title    || '';
      subtitleEl.textContent = project.subtitle || '';
      descEl.textContent     = project.description || '';

      setMainImage(project, 0, imgEl, labelEl);
      buildGallery(project, imgEl, labelEl, galleryEl);

      const multi = project.images.length > 1;
      if (prevBtn) prevBtn.hidden = !multi;
      if (nextBtn) nextBtn.hidden = !multi;

      inside = false;
      overImage = false;
      alphaMask = null;        /* force rebuild for new image */
      tiltEl.style.transform  = 'rotateX(0deg) rotateY(0deg)';
      shineCvs.style.opacity  = '0';
      zoomPanel.style.opacity = '0';
      zoomLens.style.opacity  = '0';
      closePanel();

      openLightbox(lightbox);
    });
  });

  /* ── Close — with transparent click-through ──────────────────── */
  closeBtn.addEventListener('click', () => closeLightbox(lightbox));

  lightbox.addEventListener('click', (e) => {
    if (panelOpen() &&
        !e.target.closest('.lightbox-settings-panel') &&
        !e.target.closest('.lightbox-gear-btn')) {
      closePanel(); return;
    }

    // Check if click is on the image area but on a transparent pixel
    const clickedImage = e.target.closest('.lightbox-image-tilt') || e.target === imgEl;
    if (clickedImage) {
      if (isTransparentAt(e.clientX, e.clientY)) {
        closeLightbox(lightbox);
        return;
      }
      return; // clicked on opaque part of image, do nothing
    }

    const safe = e.target.closest('.lightbox-info, .lightbox-image-wrap, button, .lightbox-settings-panel, .lightbox-zoom-panel');
    if (!safe) closeLightbox(lightbox);
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('lightbox-active')) return;
    if (e.key === 'Escape') {
      if (panelOpen()) closePanel();
      else closeLightbox(lightbox);
    }
    else if (e.key === 'ArrowRight') navigate(1);
    else if (e.key === 'ArrowLeft')  navigate(-1);
  });
}

/* ---- Set main image + label ---- */

function setMainImage(project, index, imgEl, labelEl) {
  const img = project.images[index] || project.images[0];
  imgEl.style.opacity = '0';
  setTimeout(() => {
    imgEl.src = img.src;
    imgEl.alt = project.title || '';
    imgEl.onload = () => { imgEl.style.opacity = '1'; };
    if (imgEl.complete) imgEl.style.opacity = '1';
  }, 110);
  labelEl.textContent = img.label || '';
}

/* ---- Build gallery thumbnails ---- */

function buildGallery(project, mainImgEl, labelEl, galleryEl) {
  galleryEl.innerHTML = '';

  if (!project.images || project.images.length < 2) return;

  project.images.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.alt = img.label || (project.title || 'Image') + ' ' + (i + 1);
    thumb.className = 'lightbox-gallery-thumb';
    if (i === 0) thumb.classList.add('active');

    thumb.addEventListener('click', () => {
      mainImgEl.src = img.src;
      labelEl.textContent = img.label || '';
      galleryEl.querySelectorAll('.lightbox-gallery-thumb')
        .forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });

    galleryEl.appendChild(thumb);
  });
}

/* ---- Open / Close ---- */

function openLightbox(lightbox) {
  lightbox.removeAttribute('hidden');
  lightbox.offsetHeight;
  lightbox.classList.add('lightbox-active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(lightbox) {
  lightbox.classList.remove('lightbox-active');
  document.body.style.overflow = '';

  function onEnd() {
    lightbox.setAttribute('hidden', '');
    lightbox.removeEventListener('transitionend', onEnd);
  }
  lightbox.addEventListener('transitionend', onEnd);
}

let lastScrollY = window.scrollY;
const nav = document.querySelector('.top-nav');
const SCROLL_THRESHOLD = 8;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const diff = currentScrollY - lastScrollY;

  if (diff > SCROLL_THRESHOLD) {
    nav.classList.add('nav-hidden');
  } else if (diff < -SCROLL_THRESHOLD) {
    nav.classList.remove('nav-hidden');
  }

  lastScrollY = currentScrollY;
}, { passive: true });

// Initialize lightbox when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLightbox);
} else {
  initLightbox();
}
