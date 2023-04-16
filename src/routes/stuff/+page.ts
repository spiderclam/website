import { title } from '$lib/config';

export const load = async () => {
  return {
    title: title('Stuff'),
  };
};
