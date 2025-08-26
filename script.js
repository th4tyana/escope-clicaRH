// Accordion behavior
document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('open');
    });
});

// Expand / Collapse All
const expandAll = document.getElementById('expandAll');
const collapseAll = document.getElementById('collapseAll');

expandAll.addEventListener('click', () => {
    document.querySelectorAll('.acc-item').forEach(i => i.classList.add('open'));
});

collapseAll.addEventListener('click', () => {
    document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
});

// Search filter
const searchInput = document.getElementById('search');
const sections = Array.from(document.querySelectorAll('main section.card'));

searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    sections.forEach(sec => {
        const text = (sec.innerText + ' ' + (sec.dataset.keywords || '')).toLowerCase();
        const match = q === '' || text.includes(q);
        sec.style.display = match ? '' : 'none';
    });
});

// Smooth scroll for TOC
document.querySelectorAll('.toc a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = a.getAttribute('href');
        const el = document.querySelector(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});