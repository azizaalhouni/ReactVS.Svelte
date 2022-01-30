<script>
  import { page } from "$app/stores";
  import logo from "./svelte-logo.svg";
</script>

<header>
  <div class="corner">
    <a href="/">
      <img src="./src/lib/header/iphonelife.jpeg" alt="iphoneLife Logo" />
      <!-- <a href="https://kit.svelte.dev"> -->
      <!-- <img src={logo} alt="SvelteKit" /> -->
      <!-- </a> -->
    </a>
  </div>

  <!-- <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      <li class:active={$page.url.pathname === "/"}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === "/about"}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
      <li class:active={$page.url.pathname === "/todos"}>
        <a sveltekit:prefetch href="/todos">Todos</a>
      </li>
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav> -->

  <!-- <nav class="bg-white shadow-lg"> -->
  <nav class="bg-white ">
    <div class="max-w-6xl mx-auto px-12">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <!-- Website Logo -->
          <div />
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              href="/"
              class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
              >iPhone</a
            >

            <a
              href="/ipad"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >ipad</a
            >
            <a
              href=""
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >IOS 15</a
            >
            <a
              href=""
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Apple Watch</a
            >
            <a
              href="https://www.iphonelife.com/airpods"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >AirPods</a
            >
            <a
              href="https://www.iphonelife.com/how-to"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >How Tos</a
            >
            <a
              href="https://iphonelife.dragonforms.com/loading.do?omedasite=ipl_subscribe"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Magazine</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="corner">
    <!-- TODO put something else here? github link? -->
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    width: 9em;
    height: 3em;
  }

  /* .corner a {
    /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* width: 100%; */
  /* height: 100%; */
  /* } */
  .corner img {
    width: 122em;
    /* height: 17em; */
    object-fit: contain;
    justify-content: center;
    margin-left: 9em;
    margin-top: 8em;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 5em;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    margin-top: 10em;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
