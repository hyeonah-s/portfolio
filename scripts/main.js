
(()=>{const dialog=document.getElementById('poster-dialog'),expanded=document.getElementById('expanded-poster');let opener;
document.querySelectorAll('[data-poster]').forEach(button=>button.addEventListener('click',()=>{const image=document.getElementById(button.dataset.poster);opener=button;expanded.src=image.src;expanded.alt=image.alt;dialog.showModal();}));
document.getElementById('close-poster').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{expanded.removeAttribute('src');opener?.focus();});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
})();
