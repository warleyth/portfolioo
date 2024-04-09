//animação
if(window.SimpleAnime){
  new SimpleAnime();
}
function scrolldescendo(){
  const section = document.querySelectorAll('.jsanime')

const metade = window.innerHeight*0.5

function scrollanime(){
  section.forEach((item)=>{
    const sectiontop = item.getBoundingClientRect().top
    if(sectiontop < metade){
      item.classList.add('ativo')
    }else{
      item.classList.remove('ativo')
    }
  })
}
window.addEventListener('scroll' ,scrollanime)

}
scrolldescendo()

function scrollautomatic(){
  const links = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollanimado(event){
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)
  const topo = section.offsetTop - 150;
 
  window.scrollTo({
    top: topo,
    behavior:"smooth",
  })
  
}

links.forEach((link)=>{
  link.addEventListener('click', scrollanimado)
})
}
scrollautomatic()

const botao = document.querySelector('.butao')
const lista = document.querySelector('.lista')

function Mobile(){
  botao.classList.toggle('ativo')
  lista.classList.toggle('ativo')
  
}

botao.addEventListener('click', Mobile)

