import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? 'no service domain',
  apiKey: process.env.API_KEY ?? 'no api key',
});