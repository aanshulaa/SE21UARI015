const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;
const TEST_SERVER_BASE_URL = "http://20.244.56.144/test/companies";

// Helper function to fetch products from the test server
async function fetchProducts(company, category, params) {
    try {
        const response = await axios.get(`${TEST_SERVER_BASE_URL}/${company}/categories/${category}/products`, { params });
        return response.data;
    } catch (error) {
        console.error(`Error fetching products from ${company}:`, error.message);
        return [];
    }
}

// Endpoint to get top products
app.get('/categories/:categoryname/products', async (req, res) => {
    const { categoryname } = req.params;
    const n = parseInt(req.query.n, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const sortBy = req.query.sortBy;
    const sortOrder = req.query.sortOrder || 'asc';

    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
    let products = [];

    for (const company of companies) {
        const params = {
            top: n,
            minPrice,
            maxPrice
        };
        const companyProducts = await fetchProducts(company, categoryname, params);
        products = products.concat(companyProducts);
    }

    // Log the combined products for debugging
    console.log("Combined Products:", products);

    // Sort products
    if (sortBy) {
        products.sort((a, b) => {
            const valueA = a[sortBy];
            const valueB = b[sortBy];
            if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // Paginate products
    const start = (page - 1) * n;
    const end = start + n;
    const paginatedProducts = products.slice(start, end);

    // Add unique IDs
    paginatedProducts.forEach((product, index) => {
        product.id = `${categoryname}-${index}`;
    });

    res.json(paginatedProducts);
});

// Endpoint to get product details
app.get('/categories/:categoryname/products/:productid', async (req, res) => {
    const { categoryname, productid } = req.params;
    const companyName = productid.split('-')[0]; // Assume product ID format includes company name

    try {
        const response = await axios.get(`${TEST_SERVER_BASE_URL}/${companyName}/categories/${categoryname}/products/${productid}`);
        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching product details:`, error.message);
        res.status(404).json({ error: "Product not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
