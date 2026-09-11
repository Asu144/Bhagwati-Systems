document.addEventListener('DOMContentLoaded', () => {

  // 1. TABS SWITCHER LOGIC
  const tabButtons = {
    printer: document.getElementById('tab-printer'),
    laptop: document.getElementById('tab-laptop'),
    pc: document.getElementById('tab-pc')
  };

  const tabContents = {
    printer: document.getElementById('content-printer'),
    laptop: document.getElementById('content-laptop'),
    pc: document.getElementById('content-pc')
  };

  Object.keys(tabButtons).forEach(key => {
    tabButtons[key].addEventListener('click', () => {
      Object.keys(tabButtons).forEach(k => {
        if (k === key) {
          tabButtons[k].classList.add('text-blue-600', 'border-blue-600', 'font-bold');
          tabButtons[k].classList.remove('text-slate-500', 'border-transparent', 'font-semibold');
          tabContents[k].classList.remove('hidden');
        } else {
          tabButtons[k].classList.remove('text-blue-600', 'border-blue-600', 'font-bold');
          tabButtons[k].classList.add('text-slate-500', 'border-transparent', 'font-semibold');
          tabContents[k].classList.add('hidden');
        }
      });
    });
  });

  // 2. MODAL LOGIC
  const modal = document.getElementById('brands-modal');
  const openModalBtn = document.getElementById('open-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const closeModalX = document.getElementById('close-modal-x');

  const toggleModal = (show) => {
    if (show) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  };

  if (openModalBtn) openModalBtn.addEventListener('click', () => toggleModal(true));
  if (closeModalBtn) closeModalBtn.addEventListener('click', () => toggleModal(false));
  if (closeModalX) closeModalX.addEventListener('click', () => toggleModal(false));

  // 3. FAQ ACCORDION LOGIC
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const ans = item.querySelector('.faq-ans');
      const icon = item.querySelector('.faq-icon');
      
      if (ans.classList.contains('hidden')) {
        ans.classList.remove('hidden');
        icon.classList.add('rotate-180');
      } else {
        ans.classList.add('hidden');
        icon.classList.remove('rotate-180');
      }
    });
  });

  // 4. WHATSAPP INVENTORY SEARCH LOGIC
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('inventory-search-input');

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        const encodedText = encodeURIComponent(`Hi Bhagwati Systems, I am inquiring about part/availability: ${query}`);
        window.open(`https://wa.me/919827606006?text=${encodedText}`, '_blank');
      }
    });
  }

});
