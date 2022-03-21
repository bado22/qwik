/* eslint-disable */

// @ts-ignore
import { render } from './entry.server';

import symbols from '../server/q-symbols.json';

export const qwikSSR: PagesFunction = async (req) => {
  const ssrResult = await render({
    url: new URL(req.request.url),
    symbols,
  });

  const response = new Response(ssrResult.html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control':
        'max-age=5, s-maxage=10, stale-while-revalidate=604800, stale-if-error=604800',
    },
  });
  return response;
};