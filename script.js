document.querySelector('.animated-button').addEventListener('mouseover', function() {
    this.textContent = "Click Me!";
});

document.querySelector('.animated-button').addEventListener('mouseout', function() {
    this.textContent = "View My Business Card";
});
