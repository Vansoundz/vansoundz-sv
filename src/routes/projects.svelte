<script lang="ts">
  import Project from "../components/Project.svelte";
  import { store } from "../store";
</script>

<style>
  .container {
    padding: 16px;
  }

  h3 {
    text-transform: uppercase;
  }

  .projects {
    padding: 24px 0;
    display: grid;
    grid-row-gap: 16px;
  }
</style>

<div class="container">
  <h3>Projects</h3>

  <div class="projects">
    {#each $store.projects as project (project.id)}
      <Project {project} />
    {/each}
  </div>
</div>
