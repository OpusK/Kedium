import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  // Check sanity.json for configuration
  // https://www.sanity.io/docs/studio-environment-variables
  dataset: process.env.
  NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2202-03-13",
  usdCdn: process.env.NODE_ENV === 'production',
};

// For fetching data in the getProps page functions
export const sanityClient = createClient(config);

// For generating Image URLs with only the asset reference data in your documents
// https://www.sanity.io/docs/image-url
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// For using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);