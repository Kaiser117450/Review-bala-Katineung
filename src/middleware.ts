// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.request.method === 'POST' && context.url.pathname === '/api/review') {
    // Clone the request to modify it
    const body = await context.request.json();
    
    // Create new request with JSON content type
    const newRequest = new Request(context.request.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    // Update the context with the new request
    context.request = newRequest;
  }

  return next();
});


