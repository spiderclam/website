# Ideas

Just some ideas. Potentially silly. Potentially not. Let's see.

## CMS

I want to try and create a cms for this setup. It's a bit weird, but I think it can be cool.

The idea is to allow json source files to be edited and then have the svx files generated from that.

This allows mdsvex to keep doing what it does (provide the read-time, summary, highlighting and slug plugins). 
This is the simplest approach without having to write a custom preprocessor.

These json files would be considered metadata files/source files. It'll essentially become the database.

These will have to be stored separate from the svx files.

We _will_ have three file formats for the same (duplicate) data:

1. The json source file (with custom plugins)
2. The svx file
3. The built html file

This can be justified the following way:

1. The json file will be slightly smaller due to the custom plugins.
2. The svx file will allow the use of remark plugins.
3. Reverting to an older version can be instant, because it's part of the build artifacts.

### Alternative idea

Alternatively the json files can function as props for a generic component that renders everything JIT.

For example:

```sveltehtml
---
title: Hello world
date: '2023-04-12'
description: First blogpost of the rest of your life.
---

<script>
  import BlogPost from '$components/blog/BlogPost.svelte';
  import PostData from '$db/blog/some-blog-post.json';
</script>

<BlogPost data={PostData} />
```

The downsides:

- IO. Every post would require reading an additional file for the post data. 
- I'm also not sure how to solve preprocessed media.
- I'm also not sure how to deal with pagination. I could include the header info!
