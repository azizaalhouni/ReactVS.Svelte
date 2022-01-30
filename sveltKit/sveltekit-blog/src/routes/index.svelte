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
  import { paginate, LightPaginationNav } from "svelte-paginate";
  export let posts;
  let searchTerm = "";
  $: searchedPosts = posts.filter((post) => {
    return post.title.includes(searchTerm) || post.body.includes(searchTerm);
  });

  let items = posts;

  let currentPage = 1;
  let pageSize = 6;
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  // Search
</script>

<h1>Posts</h1>
<div class="search">
  <input type="text" placeholder="search" bind:value={searchTerm} />
  <button class="bg-indigo-500 hover:bg-indigo-700 text-white rounded   px-4  "
    >Clear</button
  >
</div>
{#if searchTerm == ""}
  <div class="posts ">
    {#each paginatedItems as item}
      <div class="post bg-white">
        <h2>{item.title.substring(0, 20)}</h2>
        <p>{item.body.substring(0, 80)}</p>
        <p class="link">
          <a sveltekit:prefetch href={`/blog/${item.id}`}>Read More</a>
        </p>
      </div>
    {/each}
  </div>
{:else if searchedPosts.length}
  <!-- $: paginatedItems1 = paginate({(searchedPosts, pageSize, currentPage)}); -->
  <div class="posts">
    {#each searchedPosts as item}
      <div class="post">
        <h2 class="font-bold text-indigo-500">{item.title.substring(0, 20)}</h2>
        <p>{item.body.substring(0, 80)}</p>
        <p class="link">
          <a sveltekit:prefetch href={`/blog/${item.id}`}>Read More</a>
        </p>
      </div>
    {/each}
  </div>
{:else}
  <p>No post found {searchTerm}</p>
{/if}

<!-- use the navegation  -->
<LightPaginationNav
  totalItems={items.length}
  {pageSize}
  {currentPage}
  limit={1}
  showStepOptions={true}
  on:setPage={(e) => (currentPage = e.detail.page)}
/>

<style>
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    /* background-color: #ddd; */

    /* margin: 30px; */
    max-width: 800px;
    margin: 30px auto;
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
  .search {
    max-width: 800px;
    margin: 30px auto;
  }
</style>
