import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Calculator from './Calculator';

const Quote = ({ category }) => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': '647a531e06f737362c987227',
          },
        });
        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].quote);
        }

        setLoading(true);
        setError(false);
      } catch (error) {
        setLoading(true);
        setError(true);
      }
    };
    fetchQuote();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching quote</p>;
  }

  return (
    <div>
      <p>{quote}</p>
      <Calculator />
    </div>
  );
};

Quote.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Quote;
