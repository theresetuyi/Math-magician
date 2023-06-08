import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Quote = ({ category }) => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);
        const url = 'https://api.api-ninjas.com/v1/quotes';
        const keys = 'b1PZcSwRaKAwryutCkkH2A==lVNi0KrhEV3io1wO';
        const response = await fetch(url, {
          headers: { 'X-Api-Key': keys },
          contentType: 'application/json',
        });
        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].quote);
        }

        setLoading(false);
      } catch (error) {
        setError(false);
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
    <div data-testId="quote-container">
      <p>{quote}</p>

    </div>
  );
};

Quote.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Quote;
