import { createClient } from '@prismicio/client';

export function getPrismicClinet(req: any) {
  const prismic = createClient(process.env.API_KEY, {
    req,
    accessToken: process.env.ACCESS_TOKEN
  });
  
  return prismic;
}