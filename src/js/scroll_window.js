const navBtns = document.querySelectorAll('.btn-nav');
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entrie => {
        if (entrie.isIntersecting) {
            navBtns.forEach(btn => {
                let id = btn.getAttribute('href').replace('#', '');
                if (entrie.target.id === id) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section)
});