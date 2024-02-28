import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const fetchDataFromApi = async (simulatedData) => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return simulatedData;
};

const DataFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleFetchData = async () => {
    setLoading(true);

    const simulatedData = Math.random().toString(36)

    try {
      const result = await fetchDataFromApi(simulatedData);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { }, [data]);

  return (
    <div className='fetcher-component'>
      <button className='fetch-button' onClick={handleFetchData} disabled={loading}>
        {loading ? <Loader/> : 'Fetch Data'}
      </button>
      <div>
        {data && (
          <div>
            <h2>Fetched Data:</h2>
            <p>{data}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFetcher;
