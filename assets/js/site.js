// Destaca item ativo (seu código original)
(function(){
  const links = document.querySelectorAll('.toc a');
  const here = location.pathname.split('/').pop() || 'index.html';
  for (const a of links) {
    if (a.getAttribute('href') === here) a.classList.add('active');
  }
})();

// Remove menus só nesta página (roda em qualquer página, mas só afeta se existir)
(function () {
  function nukeMenus(){
    document.querySelectorAll(
      '.sidebar,.topnav,.bottomnav,.sidebar .menu,.toc,.kit,#menu-fab,.backdrop'
    ).forEach(el => el && el.remove());
  }
  nukeMenus();
  setTimeout(nukeMenus, 0);
  setTimeout(nukeMenus, 200);
})();


