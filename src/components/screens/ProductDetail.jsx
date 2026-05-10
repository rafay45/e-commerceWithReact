import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { fetchProductById } from "../../customhook/fetchapi"
import { context } from "../index"

const emptyForm = { name: "", phone: "", email: "", address: "", city: "", payment: "cod" }

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useContext(context)

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [cartAlert, setCartAlert] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [form, setForm] = useState(emptyForm)
    const [errors, setErrors] = useState({})
    const [orderPlaced, setOrderPlaced] = useState(false)

    useEffect(() => {
        fetchProductById(id).then(data => {
            setProduct(data)
            setLoading(false)
        })
    }, [id])

    const handleAddToCart = () => {
        addToCart(product)
        setCartAlert(true)
        setTimeout(() => setCartAlert(false), 2000)
    }

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setErrors(prev => ({ ...prev, [e.target.name]: "" }))
    }

    const validate = () => {
        const errs = {}
        if (!form.name.trim()) errs.name = "Naam darj karein"
        if (!form.phone.trim()) errs.phone = "Phone number darj karein"
        else if (!/^\d{10,13}$/.test(form.phone.trim())) errs.phone = "Phone number sahih nahi"
        if (!form.email.trim()) errs.email = "Email darj karein"
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email sahih nahi"
        if (!form.address.trim()) errs.address = "Address darj karein"
        if (!form.city.trim()) errs.city = "City darj karein"
        return errs
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length > 0) {
            setErrors(errs)
            return
        }
        setOrderPlaced(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setForm(emptyForm)
        setErrors({})
        setOrderPlaced(false)
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
                            onClick={() => setShowModal(true)}
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

            {cartAlert && (
                <div className="fixed top-20 left-5 bg-green-600 text-white px-5 py-2 rounded shadow-lg z-50">
                    Item added to cart!
                    <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-green-600" />
                </div>
            )}

            {/* Buy Now Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-2xl font-bold cursor-pointer"
                        >
                            &times;
                        </button>

                        {orderPlaced ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                                <div className="text-6xl">🎉</div>
                                <h2 className="text-2xl font-bold text-green-600">Order Place Ho Gaya!</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    Shukriya <span className="font-semibold text-pink-500">{form.name}</span>! Aapka order confirm ho gaya hai. Jald hi aapko update milega.
                                </p>
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 w-full text-sm text-left text-gray-600 dark:text-gray-300 space-y-1">
                                    <p><span className="font-semibold">Product:</span> {product.title}</p>
                                    <p><span className="font-semibold">Price:</span> ${product.price}</p>
                                    <p><span className="font-semibold">Address:</span> {form.address}, {form.city}</p>
                                    <p><span className="font-semibold">Payment:</span> {form.payment === "cod" ? "Cash on Delivery" : "Card Payment"}</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="mt-2 bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-2 rounded-xl cursor-pointer transition"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">Order Details</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Apni delivery information fill karein</p>

                                <div className="flex items-center gap-3 bg-pink-50 dark:bg-gray-800 rounded-xl p-3 mb-5">
                                    <img src={product.image} alt={product.title} className="w-12 h-12 object-contain" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">{product.title}</p>
                                        <p className="text-pink-600 font-bold">${product.price}</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Naam *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Apna poora naam likhein"
                                            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="03xxxxxxxxx"
                                            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="example@email.com"
                                            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address *</label>
                                        <textarea
                                            name="address"
                                            value={form.address}
                                            onChange={handleChange}
                                            placeholder="Ghar ka mukammal pata likhein"
                                            rows={2}
                                            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                                        />
                                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={form.city}
                                            onChange={handleChange}
                                            placeholder="Shehar ka naam"
                                            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                        />
                                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Payment Method *</label>
                                        <div className="flex gap-3">
                                            <label className={`flex-1 flex items-center gap-2 border-2 rounded-xl px-3 py-2 cursor-pointer text-sm font-medium transition ${form.payment === "cod" ? "border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-600" : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"}`}>
                                                <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={handleChange} className="accent-pink-500" />
                                                Cash on Delivery
                                            </label>
                                            <label className={`flex-1 flex items-center gap-2 border-2 rounded-xl px-3 py-2 cursor-pointer text-sm font-medium transition ${form.payment === "card" ? "border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-600" : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"}`}>
                                                <input type="radio" name="payment" value="card" checked={form.payment === "card"} onChange={handleChange} className="accent-pink-500" />
                                                Card Payment
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-md mt-2"
                                    >
                                        Order Place Karein — ${product.price}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}
