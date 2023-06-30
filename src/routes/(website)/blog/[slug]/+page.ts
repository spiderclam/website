/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
  const component = await import(`../../../../content/blog/${data.content.slug}/index.svx`);

  return {
    ...data,
    component: component.default,
  };
}
