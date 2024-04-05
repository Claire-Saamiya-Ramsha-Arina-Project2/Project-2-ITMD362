document.addEventListener('DOMContentLoaded', function() {
    const span = document.getElementById('flashingText');

    setInterval(() => {
        span.style.visibility = (span.style.visibility === 'hidden' ? 'visible' : 'hidden');
    }, 700);
});

