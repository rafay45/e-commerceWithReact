
export const fetching = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json()
}

export const fetchProductById = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json()
}
