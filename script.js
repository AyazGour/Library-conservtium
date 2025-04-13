document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Close search if open
            if (mobileSearch && !mobileSearch.classList.contains('hidden')) {
                mobileSearch.classList.add('hidden');
            }
            
            // Toggle icon
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Mobile search toggle
    const searchToggle = document.getElementById('search-toggle');
    const mobileSearch = document.getElementById('mobile-search');
    
    if (searchToggle && mobileSearch) {
        searchToggle.addEventListener('click', function() {
            mobileSearch.classList.toggle('hidden');
            // Close menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                
                // Reset menu icon
                const menuIcon = menuToggle.querySelector('i');
                if (menuIcon && menuIcon.classList.contains('fa-times')) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Mobile dropdown toggle for small screens
    const mobileDropdownBtn = document.querySelector('.mobile-dropdown .dropdown-btn');
    const mobileDropdownContent = document.querySelector('.mobile-dropdown .dropdown-content');
    
    if (mobileDropdownBtn && mobileDropdownContent) {
        mobileDropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileDropdownContent.classList.toggle('show');
        });
    }
    
    // Close dropdown when clicking outside (for mobile)
    document.addEventListener('click', function(e) {
        if (mobileDropdownContent && mobileDropdownBtn) {
            if (!mobileDropdownBtn.contains(e.target) && !mobileDropdownContent.contains(e.target)) {
                if (mobileDropdownContent.classList.contains('show')) {
                    mobileDropdownContent.classList.remove('show');
                }
            }
        }
    });
    
    // Resources slider (simple version)
    const sliderItems = document.querySelectorAll('.resource-item');
    if (sliderItems.length > 0) {
        // Add event listeners to create a simple hover effect
        sliderItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // Search form handling
    const searchForms = document.querySelectorAll('.search-bar');
    if (searchForms.length > 0) {
        searchForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const input = this.querySelector('input');
                if (input && input.value.trim() !== '') {
                    // For demo purposes, just show an alert with the search query
                    alert('Searching for: ' + input.value);
                    // In a real application, you would redirect to a search results page
                    // window.location.href = 'search-results.html?q=' + encodeURIComponent(input.value);
                }
            });
        });
    }
    
    // Add active class to current page in nav
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    
    function setActiveLink(links) {
        links.forEach(link => {
            // Get the href attribute and extract just the path
            const linkPath = link.getAttribute('href');
            
            // If the current page matches the link href, add active class
            if (currentLocation.includes(linkPath) && linkPath !== '#') {
                link.classList.add('active');
            } else if (currentLocation === '/' && linkPath === 'index.html') {
                link.classList.add('active');
            }
        });
    }
    
    setActiveLink(navLinks);
    setActiveLink(mobileLinks);
}); 