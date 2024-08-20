/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1724101013", {
    template: `
    <section id="cta-component" class="bg-gradient-to-r from-purple-600 to-indigo-700 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-20 mx-auto lg:py-32 lg:px-6">
            <div id="cta-content" class="max-w-screen-md mx-auto">
                <div id="cta-title-container" class="mb-10 text-center">
                    <h2 id="cta-title" class="mb-4 text-5xl font-extrabold text-white">Join Our Crypto Newsletter</h2>
                    <p id="cta-subtitle" class="text-xl text-purple-100">Stay updated with the latest trends and insights in the crypto world</p>
                </div>
                
                <form id="newsletter-form" class="space-y-6">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <input type="email" id="email" placeholder="Your Email" class="w-full p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-md text-white placeholder-purple-200 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg">
                        <input type="text" id="address" placeholder="Your Wallet Address" class="w-full p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-md text-white placeholder-purple-200 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg">
                    </div>
                    <button type="submit" class="w-full py-4 px-6 text-lg font-semibold text-white bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Subscribe Now</button>
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
