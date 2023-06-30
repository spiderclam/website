import * as fs from 'node:fs/promises';

const postTemplate = ({ title, date }) => `---
title: ${title}
date: '${date}'
description: "My thoughts about: ${title}"
generated: true
---

To do: write description
`;

const name = process.argv[2];
const slug = name
	.replaceAll(' ', '-')
	.replace(/[^\w-]/g, '')
	.toLowerCase();
const today = new Date();
const dir = `./src/content/gallery/${slug}`;
const template = postTemplate({
	title: name,
	date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
		today.getDate()
	).padStart(2, '0')}`
});

await fs.mkdir(dir);
await fs.writeFile(`${dir}/index.svx`, template);

console.log(`Gallery entry scaffolded at '${dir}'.`);
