
(function(){
  const links = document.querySelectorAll('.toc a');
  const here = location.pathname.split('/').pop() || 'index.html';
  for(const a of links){ if(a.getAttribute('href') === here){ a.classList.add('active'); } }
})();
