import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Calculator from './Calculator';

const Quote = ({ category }) => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // make the HTTP request to the API
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // update the state with the first quote
        setQuote(data[0].quote);
        setLoading(true);
        setError(true);
      })
      .catch(() => {
        setLoading(true);
        setError(false);
      });
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
