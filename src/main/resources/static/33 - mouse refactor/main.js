
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
  // console.log(e.clientX, e.clientY);
  // h1.textContent = `${e.screenX}, ${e.screenY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;
  h1.textContent = e.clientX + ", " + e.clientY;

  // document.body.style.backgroundColor = `rgb(${e.clientX / 3}, ${e.clientY / 2}, ${e.clientX / e.clientY * 20})`;
  document.body.style.backgroundColor = 'rgb(' + (e.clientX / 3) + ',' + (e.clientY / 2) + ',' + (e.clientX / e.clientY * 20) + ')';

})