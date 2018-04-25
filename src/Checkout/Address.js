import axios from 'axios';
import merge from 'lodash.merge';

import Session from '../Session';
import {authParams, contentTypeJson} from '../requestConfig';

export default config => ({shippingAddress, billingAddress = {}}) => {
  return new Promise(resolve => {
    const headers = merge(
      contentTypeJson(config),
      authParams(config)
    );

    axios.put(
      `${config.baseUrl}/shop-api/checkout/${Session.Cart.id()}/address`,
      JSON.stringify({shippingAddress, billingAddress}),
      headers
    ).then(response => resolve(response.data));
  });
};
