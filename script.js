















document.addEventListener('DOMContentLoaded', () => {
    // Login functionality
    const loginButton = document.querySelector('.nav-bar li:nth-child(2)');
    loginButton.addEventListener('click', () => {
        const username = prompt('Enter your username:');
        const password = prompt('Enter your password:');
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password');
        }
    });

    // Search functionality
    const searchButton = document.querySelector('.fa-magnifying-glass');
    const searchInput = document.querySelector('.search input[type="text"]');
    
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            // You can integrate a search API here, for now, it will just alert the search term
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term');
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                // You can integrate a search API here, for now, it will just alert the search term
                alert(`Searching for: ${query}`);
            } else {
                alert('Please enter a search term');
            }
        }
    });
});
