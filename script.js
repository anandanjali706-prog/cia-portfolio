const texts=[
 ['Subject to Change','[Add author / editor]','A place for my response: how does this text invite change, movement or rereading?'],
 ['Cybermohalla','[Add author / collective information]','A place for my response: what does the collective form make possible for everyday voices?'],
 ['The Death of the Author','Roland Barthes','A place for my response: what happens when authorial intention is no longer the only centre of meaning?'],
 ['What Is Literature?','[Add author]','A place for my response: how would I describe literature after this reading?'],
 ['The Medium is the Message','Marshall McLuhan','A place for my response: how does the form of a message shape what I receive?'],
 ['Masks of Conquest','Gauri Viswanathan','A place for my response: what can the study of English reveal about institutions and power?'],
 ['The Juggler’s Brain','Nicholas Carr','A place for my response: how might digital habits alter attention and reading?'],
 ['From Work to Text','Roland Barthes','A place for my response: what is the difference between receiving a work and participating in a text?'],
 ['Studying English Literature','[Add author / chapter details]','A place for my response: what methods or assumptions did this reading make visible?']
];
const chapters=[
 ['01','Where I Started','Begin with the reader you were before this course. What did literature mean to you then? Place a small concrete memory, habit or assumption here.'],
 ['02','Questions I Began Asking','Describe the questions that interrupted your first ideas. What makes a text stable—or changeable? Who gets to speak, and who is listening?'],
 ['03','Text and Reader','Write about the reader’s role in making meaning. Connect this chapter to your response to the readings, without inventing quotations: add your own examples here.'],
 ['04','The Medium Matters','Explore how the medium changes the experience of a text. Consider the page, voice, print, broadcast and screen as different conditions for reading.'],
 ['05','From Voice to Screen','Follow textuality across oral stages of humanity to contemporary digital culture. What is gained, lost or transformed at each shift?'],
 ['06','Becoming a Transformative Learner','Reflect on a moment when your way of approaching a text changed. What did questioning add to your learning?'],
 ['07','What I Take Forward','End with an open future rather than a fixed conclusion. What will you notice differently in the next text, platform or story you encounter?']
];
const textGrid=document.querySelector('#text-grid');
texts.forEach((t,i)=>{const card=document.createElement('article');card.className='text-card reveal';card.innerHTML=`<small>TEXT ${String(i+1).padStart(2,'0')} · READING</small><h3>${t[0]}</h3><small>${t[1]}</small>`;card.onclick=()=>openText(t);textGrid.append(card)});
function openText(t){document.querySelector('#dialog-content').innerHTML=`<p class="dialog-meta">SEMESTER READING</p><h2 class="dialog-title">${t[0]}</h2><p class="dialog-meta">${t[1]}</p><div class="dialog-body"><p>${t[2]}</p><p><strong>My annotations:</strong> Add a link to this text’s annotation section here, or use the gallery below.</p><p><strong>My response:</strong> <em>[Write your personal response here.]</em></p></div>`;document.querySelector('#text-dialog').showModal()}
document.querySelector('.dialog-close').onclick=()=>document.querySelector('#text-dialog').close();
const list=document.querySelector('#annotation-list');texts.forEach((t,i)=>{const item=document.createElement('div');item.className='annotation-item';item.innerHTML=`<button class="annotation-trigger"><h3>${String(i+1).padStart(2,'0')} — ${t[0]}</h3><span>+</span></button><div class="annotation-pages"><div class="annotation-placeholder" data-image="images/annotations/${i+1}-page-1.jpg">ADD SCAN<br>PAGE 01</div><div class="annotation-placeholder" data-image="images/annotations/${i+1}-page-2.jpg">ADD SCAN<br>PAGE 02</div><div class="annotation-placeholder" data-image="images/annotations/${i+1}-page-3.jpg">ADD SCAN<br>PAGE 03</div></div>`;item.querySelector('.annotation-trigger').onclick=()=>{item.classList.toggle('open');item.querySelector('span').textContent=item.classList.contains('open')?'−':'+'};list.append(item)});
const lightbox=document.querySelector('#lightbox');document.addEventListener('click',e=>{if(e.target.matches('.annotation-placeholder')){lightbox.querySelector('img').src=e.target.dataset.image;lightbox.querySelector('img').alt=e.target.textContent;lightbox.classList.add('show');lightbox.setAttribute('aria-hidden','false')}});lightbox.querySelector('button').onclick=()=>{lightbox.classList.remove('show');lightbox.setAttribute('aria-hidden','true')};
const chaptersEl=document.querySelector('#chapters');chapters.forEach(c=>{const el=document.createElement('article');el.className='chapter';el.innerHTML=`<button><strong>${c[0]}</strong><span>${c[1]}</span><i>+</i></button><div class="chapter-content"><p>${c[2]}</p><p><em>[Continue this chapter in your own voice. Aim for approximately 130–160 words per chapter.]</em></p></div>`;el.querySelector('button').onclick=()=>{el.classList.toggle('open');el.querySelector('i').textContent=el.classList.contains('open')?'−':'+'};chaptersEl.append(el)});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
