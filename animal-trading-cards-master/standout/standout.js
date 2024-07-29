document.querySelector('.switch input[type=checkbox]').addEventListener('change', function() {
    const head = document.head;
    const linkHref = 'standout/standout.css';
    let standoutCss = document.querySelector(`link[href="${linkHref}"]`);
    
    if (this.checked) {
        if (!standoutCss) {
            standoutCss = document.createElement('link');
            standoutCss.rel = 'stylesheet';
            standoutCss.href = linkHref;
            head.appendChild(standoutCss);
        }
    } else {
        if (standoutCss) {
            head.removeChild(standoutCss);
        }
    }
});