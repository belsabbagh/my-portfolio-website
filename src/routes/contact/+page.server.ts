import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
  return { msg: 'hey' };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const message = data.get('message');
    return { code: 200, body: { email, message } };
  }
} satisfies Actions;
