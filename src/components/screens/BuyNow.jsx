import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { fetchProductById } from "../../customhook/fetchapi"

const emptyForm = { name: "", phone: "", email: "", address: "", city: "", payment: "cod" }

export default function BuyNow() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [form, setForm] = useState(emptyForm)
    const [errors, setErrors] = useState({})
    const [orderPlaced, setOrderPlaced] = useState(false)

    useEffect(() => {
        fetchProductById(id).then(data => {
            setProduct(data)
            setLoading(false)
        })
    }, [id])

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setErrors(prev => ({ ...prev, [e.target.name]: "" }))
    }

    const validate = () => {
        const errs = {}
        if (!form.name.trim()) errs.name = "Full name is required"
        if (!form.phone.trim()) errs.phone = "Phone number is required"
        else if (!/^\d{10,13}$/.test(form.phone.trim())) errs.phone = "Enter a valid phone number"
        if (!form.email.trim()) errs.email = "Email address is required"
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email address"
        if (!form.address.trim()) errs.address = "Delivery address is required"
        if (!form.city.trim()) errs.city = "City is required"
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="animate-spin border-4 border-pink-500 border-t-transparent rounded-full w-12 h-12"></span>
            </div>
        )
    }

    if (orderPlaced) {
        return (
            <section className="bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center px-4 py-10">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Order Confirmed!</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                        Thank you, <span className="font-semibold text-pink-500">{form.name}</span>! Your order has been placed successfully. You will receive an update soon.
                    </p>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-sm text-left text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                            <img src={product.image} alt={product.title} className="w-12 h-12 object-contain" />
                            <div>
                                <p className="font-semibold line-clamp-1">{product.title}</p>
                                <p className="text-pink-600 font-bold">${product.price}</p>
                            </div>
                        </div>
                        <p><span className="font-semibold text-gray-500">Delivery Address:</span> {form.address}, {form.city}</p>
                        <p><span className="font-semibold text-gray-500">Phone:</span> {form.phone}</p>
                        <p><span className="font-semibold text-gray-500">Email:</span> {form.email}</p>
                        <p><span className="font-semibold text-gray-500">Payment:</span> {form.payment === "cod" ? "Cash on Delivery" : "Card Payment"}</p>
                    </div>

                    <button
                        onClick={() => navigate("/")}
                        className="w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 rounded-xl transition cursor-pointer"
                    >
                        Continue Shopping
                    </button>
                </div>
            </section>
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

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Order Summary */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 h-fit">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Order Summary</h2>

                    <div className="flex gap-4 items-start">
                        <div className="bg-gray-50 dark:bg-gray-200 rounded-xl p-3 flex-shrink-0">
                            <img src={product.image} alt={product.title} className="w-20 h-20 object-contain" />
                        </div>
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-pink-500">
                                {product.category}
                            </span>
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 mt-1 leading-snug">
                                {product.title}
                            </p>
                            <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                                <span>⭐ {product.rating?.rate}</span>
                                <span>({product.rating?.count} reviews)</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-2 text-sm">
                        <div className="flex justify-between text-gray-600 dark:text-gray-400">
                            <span>Subtotal</span>
                            <span>${product.price}</span>
                        </div>
                        <div className="flex justify-between text-gray-600 dark:text-gray-400">
                            <span>Shipping</span>
                            <span className="text-green-600 font-medium">Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-gray-900 dark:text-gray-100 text-base pt-2 border-t border-gray-100 dark:border-gray-700">
                            <span>Total</span>
                            <span className="text-pink-600">${product.price}</span>
                        </div>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">Delivery Information</h2>
                    <p className="text-sm text-gray-400 mb-5">Fill in your details to complete the order</p>

                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Full Name <span className="text-pink-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Phone Number <span className="text-pink-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="e.g. 03001234567"
                                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email Address <span className="text-pink-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Delivery Address <span className="text-pink-500">*</span>
                            </label>
                            <textarea
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                placeholder="House no., street, area"
                                rows={2}
                                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                City <span className="text-pink-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                placeholder="Enter your city"
                                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Payment Method <span className="text-pink-500">*</span>
                            </label>
                            <div className="flex gap-3">
                                <label className={`flex-1 flex items-center gap-2 border-2 rounded-xl px-3 py-2.5 cursor-pointer text-sm font-medium transition ${form.payment === "cod" ? "border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-600" : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"}`}>
                                    <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={handleChange} className="accent-pink-500" />
                                    Cash on Delivery
                                </label>
                                <label className={`flex-1 flex items-center gap-2 border-2 rounded-xl px-3 py-2.5 cursor-pointer text-sm font-medium transition ${form.payment === "card" ? "border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-600" : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"}`}>
                                    <input type="radio" name="payment" value="card" checked={form.payment === "card"} onChange={handleChange} className="accent-pink-500" />
                                    Card Payment
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-md mt-2"
                        >
                            Place Order — ${product.price}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
