import { createClient } from '@prismicio/client';
import type * as prismic from "@prismicio/client";

export function getPrismicClinet() {
  const prismic = createClient(process.env.API_KEY!, {
    accessToken: process.env.ACCESS_TOKEN,
  });
  
  return prismic;
}