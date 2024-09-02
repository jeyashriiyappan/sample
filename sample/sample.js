document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-content');
    const extraContent = document.getElementById('extra-content');

    toggleButton.addEventListener('click', function() {
        if (extraContent.classList.contains('hidden')) {
            extraContent.classList.remove('hidden');
            toggleButton.textContent = 'Hide Content';
        } else {
            extraContent.classList.add('hidden');
            toggleButton.textContent = 'Show Content';
        }
    });
});
