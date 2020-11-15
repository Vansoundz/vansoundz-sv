<script lang="ts">
  import { onMount } from "svelte";
  import "nprogress/nprogress.css";
  import Nav from "../components/Nav.svelte";
  import { getProjects } from "../data";
  import { store } from "../store";
  import { stores } from "@sapper/app";
  import NProgress from "nprogress";

  const { preloading } = stores();

  NProgress.configure({
    showSpinner: false,
  });

  $: {
    if ($preloading) {
      NProgress.start();
    }
    if (!$preloading) {
      NProgress.done();
    }
  }

  onMount(async () => {
    store.setPropjects(await getProjects());
  });

  export let segment: string;
</script>

<style>
</style>

<Nav {segment} />

<main>
  <slot />
</main>
