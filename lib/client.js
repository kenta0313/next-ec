import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nextec',
  apiKey: process.env.API_KEY,
});