import React ,{useState} from 'react'

function MainPage() {
    const [date, setDate] = useState(null);
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setamountInSourceCurrency] = useState("");

  return (
    <div>
        <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies Today</h1>
        <p className='lg:mx-32 opacity-40 py-6' >Welcome to "My Currency Converter App"</p>

        <div className='mt-5 flex items-center justify-center flex-col'>
            <section className='w-full lg:w-1/2'>
                <form>
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">

                            <option value="">Select source currency</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">

                            <option value="">Select target currency</option>
                        </select>
                    </div> 
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source currency</label>
                        <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
                        placeholder='Amount in source currency' required />
                    </div>
                    <button className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md'>
                        Get the target Currency
                    </button>
                    
                </form>
            </section>
        </div>
    </div>
  )
}

export default MainPage