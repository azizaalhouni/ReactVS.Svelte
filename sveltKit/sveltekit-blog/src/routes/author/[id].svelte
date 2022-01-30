<script context="module">
  export const load = async ({ params, fetch }) => {
    console.log(params);
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    const author = await res.json();

    return {
      props: {
        author,
      },
    };
  };
</script>

<script>
  export let author;
</script>

<h1>Author Info</h1>

<h1>{author.name}</h1>
<p>{author.website}</p>
<p>{author.company.catchPhrase}</p>
