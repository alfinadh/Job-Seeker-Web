'use client'
import axios from 'axios'
import NavbarComponent from '../navbar'
import CardComponent from './card'
import SidebarComponent from './sidebar'
import {useState, useEffect} from 'react'

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    console.log('Searching for:', searchTerm);
    
  };

  useEffect(() => {
    const getJob = async () => {
      try {
        const response = await axios('/api/job/read');
        const jobs = await response.data;
        setData(jobs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getJob();
  }, []);

  return (
    <div>

      <form>
        <div className="relative mt-2">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative w-1/2 ml-8">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Jobs"
              value={searchTerm}
              onChange={handleSearchInputChange}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-cyan-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSearchButtonClick}
            >
              Search
            </button>
          </div>
        </div>
      </form>


      <div className='flex'>
        <SidebarComponent />
        <div className='flex flex-wrap justify-center pt-6'>
          {data.map((item) => (
            <CardComponent key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
