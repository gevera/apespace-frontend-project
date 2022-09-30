import { error, type Load } from '@sveltejs/kit';
import { VITE_BASE_URL, VITE_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ params }) => {
  try {
    const res = await fetch(`${VITE_BASE_URL}/pairs/${params.slug}/volume/daily?to=${Date.now()}&num=7`, {
      headers: {
        Authorization: `Bearer ${VITE_API_KEY}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      return {
        data
      };
    } else {
      throw error(404, 'Error loading data');
    }
  } catch (err) {
    console.log(err);
    throw error(err.status, err.body.message);
  }
}