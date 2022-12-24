/* eslint-disable no-undef */
import React from 'react';
import axios from 'axios';
import { Box, Text } from '@primer/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEthereum,
} from "@fortawesome/free-brands-svg-icons";

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
      <FontAwesomeIcon icon={faEthereum} />
      <Text>{data}$</Text>
    </Box>
  );
}

export default Ethereum;