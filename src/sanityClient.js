import {createClient} from '@sanity/client';

    const client = createClient({
    projectId: 'yydt0bri',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2024-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: import.meta.env.VITE_sanityToken // Only if you want to update content with the client
  })
  console.log(import.meta.env.VITE_sanityToken)
  export default client;


