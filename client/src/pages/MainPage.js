import React, { useEffect, useState } from "react";
import axios from 'axios';

function MainPage() {
  const [date, setDate] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get("http://localhost:5000/convert" , {params:{
        params: {
          date,
          sourceCurrency,
          targetCurrency,
          amountInSourceCurrency,
        }
      }});

      setAmountInTargetCurrency(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  // Fetch currency names
  useEffect(() => {
    const getCurrencyNames = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getAllCurrencies");
        // Convert object to array of [code, name] pairs
        const currencyArray = Object.entries(response.data.nameData);
        setCurrencyNames(currencyArray);
      } catch (err) {
        console.error(err);
      }
    };

    getCurrencyNames();
  }, []);

  return (
    <div>
      <h1 className="lg:mx-32 text-5xl font-bold text-green-500">
        Convert Your Currencies Today
      </h1>
      <p className="lg:mx-32 opacity-40 py-6">
        Welcome to "My Currency Converter App"
      </p>

      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id="date"
                name="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="sourceCurrency"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Source Currency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                id="sourceCurrency"
                name="sourceCurrency"
                value={sourceCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              >
                <option value="">Select source currency</option>
                {currencyNames.map(([currencyCode, currencyName]) => (
                  <option key={currencyCode} value={currencyCode}>
                    {currencyCode} - {currencyName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="targetCurrency"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Target Currency
              </label>
              <select 
                onChange={(e) => setTargetCurrency(e.target.value)}
                id="targetCurrency"
                name="targetCurrency"
                value={targetCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              >
                <option value="">Select target currency</option>
                {currencyNames.map(([currencyCode, currencyName]) => (
                  <option key={currencyCode} value={currencyCode}>
                    {currencyCode} - {currencyName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="amountInSourceCurrency"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount in source currency
              </label>
              <input
                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                type="number"
                id="amountInSourceCurrency"
                name="amountInSourceCurrency"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Amount in source currency"
                required
              />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
              Get the target Currency
            </button>
          </form>
        </section>
      </div>
      {amountInTargetCurrency}
    </div>
  );
}

export default MainPage;
