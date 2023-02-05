import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    return new Response("GET works");
};

export const post = async () => {
    return {msg: 'it works'}
}
