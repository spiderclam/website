export const load = async ({ data }) => {
  return {
    title: data.title,
    gallery: data.gallery, // make posts available on the client
  };
};
