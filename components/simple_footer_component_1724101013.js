Vue.component("simple_footer_component_1724101013", {
    template: `
    <div class="bg-purple-100 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <div class="grid grid-cols-4 gap-4 mb-4">
            <div class="bg-purple-200 bg-opacity-30 backdrop-filter backdrop-blur-md p-4 rounded-md shadow-md">
                <h3 class="text-lg font-semibold text-black dark:text-white mb-2">Sell</h3>
                <div class="mb-2">
                    <label for="sell-amount" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount</label>
                    <input type="number" id="sell-amount" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white" placeholder="0.0">
                </div>
                <div>
                    <label for="sell-token" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Token</label>
                    <select id="sell-token" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white">
                        <option value="eth">ETH</option>
                        <option value="btc">BTC</option>
                        <option value="usdt">USDT</option>
                        <option value="dai">DAI</option>
                    </select>
                </div>
            </div>
            <div class="bg-purple-200 bg-opacity-30 backdrop-filter backdrop-blur-md p-4 rounded-md shadow-md">
                <h3 class="text-lg font-semibold text-black dark:text-white mb-2">Buy</h3>
                <div class="mb-2">
                    <label for="buy-amount" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount</label>
                    <input type="number" id="buy-amount" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white" placeholder="0.0">
                </div>
                <div>
                    <label for="buy-token" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Token</label>
                    <select id="buy-token" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white">
                        <option value="eth">ETH</option>
                        <option value="btc">BTC</option>
                        <option value="usdt">USDT</option>
                        <option value="dai">DAI</option>
                    </select>
                </div>
            </div>
            <div class="bg-purple-200 bg-opacity-30 backdrop-filter backdrop-blur-md p-4 rounded-md shadow-md">
                <h3 class="text-lg font-semibold text-black dark:text-white mb-2">Lending</h3>
                <div class="mb-2">
                    <label for="lending-amount" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount</label>
                    <input type="number" id="lending-amount" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white" placeholder="0.0">
                </div>
                <div class="mb-2">
                    <label for="lending-token" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Token</label>
                    <select id="lending-token" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white">
                        <option value="eth">ETH</option>
                        <option value="btc">BTC</option>
                        <option value="usdt">USDT</option>
                        <option value="dai">DAI</option>
                    </select>
                </div>
                <div>
                    <label for="lending-duration" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration</label>
                    <select id="lending-duration" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white">
                        <option value="7">7 days</option>
                        <option value="14">14 days</option>
                        <option value="30">30 days</option>
                        <option value="90">90 days</option>
                    </select>
                </div>
            </div>
            <div class="bg-purple-200 bg-opacity-30 backdrop-filter backdrop-blur-md p-4 rounded-md shadow-md">
                <h3 class="text-lg font-semibold text-black dark:text-white mb-2">Lending Options</h3>
                <div class="mb-2">
                    <label for="lending-rate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Interest Rate</label>
                    <input type="number" id="lending-rate" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white" placeholder="0.0%">
                </div>
                <div class="mb-2">
                    <label for="lending-collateral" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Collateral</label>
                    <select id="lending-collateral" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white">
                        <option value="none">None</option>
                        <option value="eth">ETH</option>
                        <option value="btc">BTC</option>
                        <option value="usdt">USDT</option>
                    </select>
                </div>
                <div>
                    <label for="lending-type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Lending Type</label>
                    <select id="lending-type" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white">
                        <option value="fixed">Fixed Rate</option>
                        <option value="variable">Variable Rate</option>
                    </select>
                </div>
            </div>
        </div>
        <button class="w-full bg-purple-600 bg-opacity-80 hover:bg-purple-700 hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 backdrop-filter backdrop-blur-sm">
            Swap / Lend
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
