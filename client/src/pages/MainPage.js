import React from 'react'

function MainPage() {
  return (
    <div>
        <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies Today</h1>
        <p className='lg:mx-32 opacity-40 py-6' >Welcome to "My Currency Converter App"</p>

        <div>
            <section>
                <form>
                    <div>
                    <div className="mb-6">
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="date" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    </div>
                </form>
            </section>
        </div>
    </div>
  )
}

export default MainPage