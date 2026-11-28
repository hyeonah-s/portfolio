
(()=>{const dialog=document.getElementById('poster-dialog'),expanded=document.getElementById('expanded-poster');let opener;
document.querySelectorAll('[data-poster]').forEach(button=>button.addEventListener('click',()=>{const image=document.getElementById(button.dataset.poster);opener=button;expanded.src=image.src;expanded.alt=image.alt;dialog.showModal();}));
document.getElementById('close-poster').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{expanded.removeAttribute('src');opener?.focus();});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
})();

// Reflect the section currently in view without changing the URL while scrolling.
(()=>{
 const links=[...document.querySelectorAll('.site-nav a[href^="#"]')];
 const targets=links.map(link=>({link,section:document.querySelector(link.getAttribute('href'))})).filter(item=>item.section);
 let scheduled=false;
 function update(){
  scheduled=false;
  const offset=window.innerWidth>=1200?100:150;
  let current=targets[0];
  for(const item of targets){if(item.section.getBoundingClientRect().top<=offset)current=item;}
  if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-4)current=targets[targets.length-1];
  for(const item of targets){if(item===current)item.link.setAttribute('aria-current','location');else item.link.removeAttribute('aria-current');}
 }
 function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule);
 window.addEventListener('load',schedule);
 update();
})();
