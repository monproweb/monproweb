import React from 'react';
import axios from 'axios';
import { Box, Text } from '@primer/react';

function Ethereum () {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      .then((response) => {
        setData(response.data.ethereum.usd);
      });
  }, []);

  return (
    <Box>
      <Text>The current price of Ethereum is {data}$.</Text>
    </Box>
  );
}

export default Ethereum;