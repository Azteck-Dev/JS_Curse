/*
    document|element.getElementById('id') => Acceder a un elemento atravez de su id.

    document|element.querySelector('selectorCSS') => Acceder al primer elemento que coincida con el selector CSS.

    document.quetySelectorAll('selectorCSS') => Accede a todos los elementos que coincidan con el selector CSS, devolviendo un nodeList.
*/
/*------------- Accediendo a un elemento por id -------------*/
const titulo = document.getElementById('title');

titulo.textContent = 'Titulo modificado mediante el DOM en JS.';

/*------------- Accediendo a un elemento por CSS selector -------------*/
const parrafo = document.querySelector('.parrafo');
const span = parrafo.querySelector('span');

/*------------- Accediendo a varios elementos por CSS selector -------------*/
const p = document.querySelectorAll('.parrafo');
// ALgunas versiones de safari y firefox no funciona 
const p_Spreed = [...document.querySelectorAll('.parrafo')];
// Es el mas seguro ya que suele ser soportado por todos los navegadores web
const p_Arrays = Array.from(document.querySelectorAll('.parrafo'));

console.log(p);

p[0].style.color = '#333';
p_Spreed.map(p => p.style.color = 'green');
p_Arrays.map(p => p.style.color = 'pink');