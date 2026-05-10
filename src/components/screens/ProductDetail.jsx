import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { fetchProductById } from "../../customhook/fetchapi"
import { context } from "../index"

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useContext(context)

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState("")

    useEffect(() => {
        fetchProductById(id).then(data => {
            setProduct(data)
            setLoading(false)
        })
    }, [id])

    const handleAddToCart = () => {
        addToCart(product)
        setAlert("cart")
        setTimeout(() => setAlert(""), 2000)
    }

    const handleBuyNow = () => {
        addToCart(product)
        navigate("/cart")
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="animate-spin border-4 border-pink-500 border-t-transparent rounded-full w-12 h-12"></span>
            </div>
        )
    }

    return (
        <section className="bg-gray-100 dark:bg-gray-800 min-h-screen py-10 px-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 flex items-center gap-2 text-pink-600 hover:text-pink-400 font-semibold transition"
            >
                &#8592; Back
            </button>

            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-10">
                <div className="flex justify-center items-center md:w-1/2 bg-gray-50 dark:bg-gray-200 rounded-xl p-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-60 md:w-80 h-60 md:h-80 object-contain"
                    />
                </div>

                <div className="md:w-1/2 flex flex-col justify-between gap-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-pink-500">
                            {product.category}
                        </span>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2 leading-snug">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-3 mt-3">
                            <span className="text-3xl font-extrabold text-pink-600">
                                ${product.price}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <span>⭐ {product.rating?.rate}</span>
                            <span>({product.rating?.count} reviews)</span>
                        </div>

                        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button
                            onClick={handleBuyNow}
                            className="flex-1 bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-md"
                        >
                            Buy Now
                        </button>
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 border-2 border-pink-600 text-pink-600 dark:text-pink-400 dark:border-pink-400 font-bold py-3 rounded-xl hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition cursor-pointer"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {alert === "cart" && (
                <div className="fixed top-20 left-5 bg-green-600 text-white px-5 py-2 rounded shadow-lg">
                    Item added to cart!
                    <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-green-600" />
                </div>
            )}
        </section>
    )
}
