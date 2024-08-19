/* Summary: This component contains a Uniswap-style token swap interface with choices for popular tokens. */
Vue.component("simple_cta_component_1724101013", {
    template: `
    <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-3xl font-extrabold text-center text-gray-900 dark:text-white">Swap Tokens</h2>
                </div>
                
                <div id="swap-container" class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                    <div id="from-token" class="mb-4">
                        <label for="from-amount" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">From</label>
                        <div class="flex items-center">
                            <input type="number" id="from-amount" class="flex-1 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0.0" required>
                            <select id="from-token-select" class="ml-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                <option value="eth">ETH</option>
                                <option value="usdc">USDC</option>
                                <option value="dai">DAI</option>
                                <option value="usdt">USDT</option>
                            </select>
                        </div>
                    </div>
                    
                    <div id="swap-icon" class="flex justify-center my-4">
                        <i class='bx bx-transfer-alt text-2xl text-gray-500 dark:text-gray-400'></i>
                    </div>
                    
                    <div id="to-token" class="mb-6">
                        <label for="to-amount" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">To</label>
                        <div class="flex items-center">
                            <input type="number" id="to-amount" class="flex-1 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0.0" required>
                            <select id="to-token-select" class="ml-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                <option value="eth">ETH</option>
                                <option value="usdc">USDC</option>
                                <option value="dai">DAI</option>
                                <option value="usdt">USDT</option>
                            </select>
                        </div>
                    </div>
                    
                    <button id="swap-button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Swap</button>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            fromAmount: 0,
            toAmount: 0,
            fromToken: 'eth',
            toToken: 'usdc',
        };
    },
    methods: {
        // Start of swap method
        swap() {
            // Implement swap logic here
            console.log('Swap initiated');
        },
        // End of swap method
    },
});
