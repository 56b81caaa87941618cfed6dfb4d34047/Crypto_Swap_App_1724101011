Vue.component("simple_footer_component_1724101013", {
    template: `
    <div class="bg-purple-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div class="mb-4">
            <h2 class="text-xl font-bold text-purple-800 dark:text-white mb-2">Select Token</h2>
            <div class="grid grid-cols-4 gap-4">
                <button class="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
                    <img src="./images/eth.svg" alt="ETH" class="w-6 h-6 mr-2">
                    <span class="text-purple-800 dark:text-white">ETH</span>
                </button>
                <button class="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
                    <img src="./images/btc.svg" alt="BTC" class="w-6 h-6 mr-2">
                    <span class="text-purple-800 dark:text-white">BTC</span>
                </button>
                <button class="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
                    <img src="./images/usdt.svg" alt="USDT" class="w-6 h-6 mr-2">
                    <span class="text-purple-800 dark:text-white">USDT</span>
                </button>
                <button class="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
                    <img src="./images/dai.svg" alt="DAI" class="w-6 h-6 mr-2">
                    <span class="text-purple-800 dark:text-white">DAI</span>
                </button>
            </div>
        </div>
        <div class="mb-4">
            <label for="token-amount" class="block text-sm font-medium text-purple-700 dark:text-gray-300 mb-1">Amount</label>
            <input type="number" id="token-amount" class="w-full p-2 border border-purple-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white" placeholder="0.0">
        </div>
        <button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
            Swap
        </button>
    </div>
    `,
    data() {
        return {
            // Add any necessary data properties here
        };
    },
    methods: {
        // Add any necessary methods here
    },
});
