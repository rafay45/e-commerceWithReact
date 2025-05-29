import {Link} from 'react-router-dom';
export default function About() {
    return (
        <section className="bg-gray-100 text-gray-600 py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="text-center">
                    <h2 className="text-4xl text-gray-600 md:text-5xl font-bold">
                        Welcome to <span className="text-pink-600">HusnaDeals</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Your trusted online shopping destination for fashion, electronics, beauty, and more.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <img
                        src="https://media.istockphoto.com/id/670741276/photo/two-cheerful-girls-shopping-for-clothes.webp?a=1&b=1&s=612x612&w=0&k=20&c=p0Kj7BQ5jNqV5_ctY0OVuyP2AjnpiYfgZJJuXyJ2suo="
                        alt="Our Mission"
                        className="rounded-xl shadow-lg"
                    />

                    <div>
                        <h3 className="text-3xl text-gray-700 font-semibold mb-4">Who We Are</h3>
                        <p className="text-gray-600 mb-4">
                            Husna is more than just a store — it’s a movement.
                            We’re here to redefine how you experience shopping — blending affordability, style, and convenience all under one roof. Whether you're browsing from the comfort of your home, catching a deal during a break at the office, or scrolling through your phone on the go, Husna ensures a seamless and satisfying experience.

                            Our platform is designed for people who value time, trust, and taste. We carefully curate every product to reflect quality, utility, and beauty. With every click, we aim to bring joy to your life, value to your wallet, and confidence in every purchase.

                            At Husna, you don’t just shop — you become part of a community that believes in better choices, honest service, and everyday style made simple.
                        </p>
                        <p className="text-gray-600">
                            With fast delivery, 24/7 support, and a growing list of products, we’re here to give you a seamless shopping experience.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-10">Why Shop With HusnaDeals?</h3>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-left">
                        {[
                            ['🚚 Fast Delivery', 'We deliver your orders quickly and reliably.'],
                            ['💳 Secure Payments', 'Safe and encrypted payment gateways.'],
                            ['📞 24/7 Support', 'Got questions? We’re here round the clock.'],
                            ['🎁 Quality Products', 'Only the best items make it to our shelves.'],
                        ].map(([title, desc], i) => (
                            <div key={i} className="bg-gray-200 p-5 rounded-xl shadow hover:shadow-md transition">
                                <h4 className="text-lg font-bold mb-2">{title}</h4>
                                <p className="text-sm text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Our Journey</h3>
                        <p className="text-gray-600 mb-3">
                            Founded in 2025, HusnaDeals began with a simple yet powerful idea:
                            To make online shopping not just easy, but truly enjoyable for everyone. What started as a humble initiative with a few products and a passion for customer satisfaction has now grown into a trusted name in e-commerce.

                        </p>
                        <p className="text-gray-600 mb-3">
                            We saw how complicated, impersonal, and overwhelming online shopping could be — and we knew it could be better. HusnaDeals was created to simplify that experience, to bring warmth, trust, and clarity to your digital shopping journey.
                            What started as a small shop is now a growing brand with hundreds of happy customers. And we’re just getting started.
                        </p>
                        <p className="text-gray-600">
                            Our goal is to build a place where you don’t just shop — you trust.
                        </p>
                    </div>

                    <img
                        src="https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmV8ZW58MHx8MHx8fDA%3D"
                        alt="Our Story"
                        className="rounded-xl  w-2xl shadow-lg"
                    />
                </div>

                <div className="text-center mt-10">
                    <h3 className="text-2xl font-semibold mb-4">Ready to explore HusnaDeals?</h3>
                    <Link
                        to="/"
                        className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:py-2.5 hover:5.5 hover:bg-transparent hover:text-pink-600 hover:border-2 hover:text-sm cursor-pointer transition"
                    >
                        Start Shopping
                    </Link>
                </div>
            </div>
        </section>
    );
}
