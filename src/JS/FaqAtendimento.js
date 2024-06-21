// scripts.js
function filterFAQs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const question = faq.querySelector('h2').innerText.toLowerCase();
        const answer = faq.querySelector('p').innerText.toLowerCase();

        if (question.includes(searchInput) || answer.includes(searchInput)) {
            faq.style.display = '';
        } else {
            faq.style.display = 'none';
        }
    });
}
