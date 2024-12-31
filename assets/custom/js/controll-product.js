document.getElementById('priceRange').addEventListener('input', function () {
    document.getElementById('priceRangeLabel').textContent = this.value;
});

// Function to filter products by search, category, and price
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    const maxPrice = parseFloat(document.getElementById('priceRange').value);
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const productCategory = card.getAttribute('data-category');
        const productPrice = parseFloat(card.getAttribute('data-price'));

        // Show or hide card based on filter conditions
        if (
            (productName.includes(searchInput)) &&
            (selectedCategory === "" || productCategory === selectedCategory) &&
            (productPrice <= maxPrice)
        ) {
            card.style.display = 'block';  // Show the product
        } else {
            card.style.display = 'none';  // Hide the product
        }
    });
}