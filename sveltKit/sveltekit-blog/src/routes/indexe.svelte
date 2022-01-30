<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  import { post } from "./todos/index.json";

  export let posts;
</script>

<h1>Posts</h1>
<div class="posts">
  {#each posts as item}
    <div class="post">
      <h2>{item.title.substring(0, 20)}</h2>
      <p>{item.body.substring(0, 80)}</p>
      <p class="link">
        <a sveltekit:prefetch href={`/blog/${item.id}`}>Read More</a>
      </p>
    </div>
  {/each}
</div>

<!-- {JSON.stringify(posts)} -->
<style>
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .post {
    border: 1px solid #ddd;
    padding: 10px;
    box-shadow: 0 0 15px;
  }
  h2 {
    margin: 0;
    font-weight: bold;
  }
  .link {
    text-align: right;
  }
</style>
