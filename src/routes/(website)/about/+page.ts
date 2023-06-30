/** @type {import('./$types').PageLoad} */
export const load = async ({ data }) => {
  // console.dir(data.experience, { depth: null });
  
  
  return {
    title: data.title,
    experience: data.experience, // make posts available on the client
  };
};
