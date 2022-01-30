<script context="module">
  // We added page becasue we need the page id number
  export const load = async ({ params, fetch }) => {
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const post = await res.json();

    const userRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const user = await userRes.json();
    //   export const load = async ({ page, fetch }) => {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/posts/100");
    //     const post = await res.json();
    // const resUser = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return {
      props: {
        post,
        user,
      },
    };
  };
</script>

<script>
  import { stringify } from "postcss";

  export let post;
  export let user;
</script>

<h1>{post.title}</h1>
<p>{post.body}</p>
<!-- <p>{user.name}</p> -->
<!-- <h2><a href={`/author/${user.id}`}>{user.name}</a></h2> -->
<a sveltekit:prefetch href={`/author/${user.id}`}>{user.name}</a>
<!-- <p>Written by {JSON.stringify(user)}</p> -->

<!-- {JSON.stringify(post)} -->
