
(function(){
  const links = document.querySelectorAll('.toc a');
  const here = location.pathname.split('/').pop() || 'index.html';
  for(const a of links){ if(a.getAttribute('href') === here){ a.classList.add('active'); } }
})();
<script>
  (function () {
    // Remove qualquer coisa de navegação que scripts possam recriar
    function nukeMenus(){
      document.querySelectorAll(
        '.sidebar,.topnav,.bottomnav,.sidebar .menu,.toc,.kit,#menu-fab,.backdrop'
      ).forEach(el => el && el.remove());
    }
    nukeMenus();
    setTimeout(nukeMenus, 0);      // logo após o carregamento
    setTimeout(nukeMenus, 200);    // se algum JS recriar depois
  })();
</script>

