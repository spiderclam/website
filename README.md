# Spiderclam website

I went full pleb and used sveltekit (static) and tailwind. It was mildly enjoyable.

Bye.

## Structure

- `npm run gen:post 'post title here'` to scaffold a post (boilerplate)
- Blog content goes in `content/blog`. Directory name equals slug. index.svx must exist.
- That's it for now.

## Post ideas

- Explain midi parsing (in the browser) by example
- Explain this very blog and how to make your own
- Add artstation stuff

## Todo

- SEO (see what's missing)
- [Search](https://www.algolia.com/doc/tools/crawler/netlify-plugin/quick-start/)
- [analytics](https://piwik.pro/pricing/)
- Series (multiple parts, single project). Maybe not as a part of "blog" but as a part of a new tutorials section?
- I got a bit bored at the end there and left some icky code in content.ts. Not a big deal, but should clean before expanding.

## License

Excluding branding and content: MIT

for file in \*.png; do convert $file -resize 1290x2796! scaled-$file; done

convert example.png -resize 200x100 example.png
