/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1724101013", {
    template: `
    <section id="cta-component" class="bg-gradient-to-r from-purple-500 to-indigo-600 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-16 mx-auto lg:py-24 lg:px-6">
            <div id="cta-content" class="max-w-screen-md mx-auto">
                <div id="cta-title-container" class="mb-8 text-center">
                    <h2 id="cta-title" class="mb-4 text-4xl font-extrabold text-white">Join Our Crypto Newsletter</h2>
                    <p id="cta-subtitle" class="text-lg text-purple-200">Stay updated with the latest trends and insights in the crypto world</p>
                </div>
                
                <form id="newsletter-form" class="space-y-4">
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input type="email" id="email" placeholder="Your Email" class="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg text-white placeholder-purple-200 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                        <input type="text" id="address" placeholder="Your Wallet Address" class="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg text-white placeholder-purple-200 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                    </div>
                    <button type="submit" class="w-full py-3 px-6 text-white bg-purple-700 hover:bg-purple-800 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Subscribe Now</button>
                </form>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
