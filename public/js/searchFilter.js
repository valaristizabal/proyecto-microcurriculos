document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-section');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            let filter = this.value.toLowerCase();
            let sections = document.querySelectorAll('.nav-item');

            sections.forEach(function(section) {
                let text = section.querySelector('p').textContent.toLowerCase();
                if (text.includes(filter)) {
                    section.style.display = '';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    }
});
