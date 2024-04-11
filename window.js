document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const scrollableWidth = document.body.scrollWidth - windowWidth;
    const scrollableHeight = document.body.scrollHeight - windowHeight;
    
    // Calculate the scroll position based on mouse position
    const scrollX = (mouseX / windowWidth) * scrollableWidth;
    const scrollY = (mouseY / windowHeight) * scrollableHeight;
    
    // Scroll the page to the calculated position
    window.scrollTo(scrollX, scrollY);
});
