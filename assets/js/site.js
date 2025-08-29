

// === Mobile drawer menu (no content changes) ===
(function(){
  const sidebar = document.querySelector('.sidebar');
  if(!sidebar) return;

  // Create FAB and backdrop dynamically
  const fab = document.createElement('button');
  fab.id = 'menu-fab';
  fab.setAttribute('aria-label', 'Abrir menu');
  fab.innerHTML = '☰ Menu';
  document.body.appendChild(fab);

  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  document.body.appendChild(backdrop);

  const openMenu = ()=>{ sidebar.classList.add('open'); backdrop.classList.add('show'); };
  const closeMenu = ()=>{ sidebar.classList.remove('open'); backdrop.classList.remove('show'); };

  fab.addEventListener('click', openMenu);
  backdrop.addEventListener('click', closeMenu);
  window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeMenu(); });

  // Close menu when a TOC link is clicked (better UX on mobile)
  document.querySelectorAll('.toc a').forEach(a=>{
    a.addEventListener('click', ()=>{ closeMenu(); });
  });
})();
