
(function(){
  const links = document.querySelectorAll('.toc a');
  const here = location.pathname.split('/').pop() || 'index.html';
  for(const a of links){ if(a.getAttribute('href') === here){ a.classList.add('active'); } }
})();
<script>
  (function(){
    function hideMenus(){
      document.querySelectorAll(
        '.sidebar,.topnav,.bottomnav,.sidebar .menu,.toc,.kit,#menu-fab,.backdrop'
      ).forEach(el => el && el.remove());
    }
    // remove imediatamente e novamente após scripts carregarem
    hideMenus();
    setTimeout(hideMenus, 0);
    setTimeout(hideMenus, 200);
  })();
</script>

