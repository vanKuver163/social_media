import {createClient} from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-11-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const utlFor = (source) => builder.image(source);
