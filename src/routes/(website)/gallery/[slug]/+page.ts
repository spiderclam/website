/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
  const component = await import(`../../../../content/gallery/${data.content.slug}/index.svx`);

  return {
    ...data,
    component: component.default,
  };
}
