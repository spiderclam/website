export const load = async ({ data }) => {
  return {
    title: data.title,
    blog: data.blog, // make posts available on the client
  };
};
