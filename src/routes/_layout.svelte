<script lang="ts">
  import { onMount } from "svelte";

  import Nav from "../components/Nav.svelte";
  import { getProjects } from "../data";
  import { store } from "../store";

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
