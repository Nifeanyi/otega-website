 const links=document.querySelectorAll('nav a');
  const secs=document.querySelectorAll('section');
  links.forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault();
    links.forEach(x=>x.classList.remove('active'));
    secs.forEach(s=>s.classList.remove('active'));
    a.classList.add('active');
    document.getElementById(a.dataset.target).classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  }));