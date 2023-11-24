import { createClient } from "next-sanity"

const projectId = 'y0v8i2ek';
const dataset = 'production';
const apiVersion = '2023-01-01';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,

})