const titles = document.querySelectorAll('.title');
const contents = document.querySelectorAll('.content ');

titles.forEach(title => {
    title.addEventListener('click', openContent);
});

function openContent() {
    let content = this.nextElementSibling;
    if (!content.style.maxHeight) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('open');
        this.firstElementChild.classList.add('open');
    } else {
        content.style.maxHeight = null;
        content.classList.remove('open');
        this.firstElementChild.classList.remove('open');
    }
}