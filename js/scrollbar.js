const container = document.querySelector('.container');
const content = document.querySelector('.content');

content.addEventListener('scroll', function() {
  const scrollTop = content.scrollTop;
  const maxScrollTop = content.scrollHeight - content.clientHeight;
  
  container.style.setProperty('--scroll', `${scrollTop / maxScrollTop}`);
});