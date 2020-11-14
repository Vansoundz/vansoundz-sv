<script lang="ts">
  import { stores } from "@sapper/app";
  import { store } from "../../store";

  const { page } = stores();
  const { id } = $page.params;
  $: project = $store.projects.find((p) => p.id === id);
</script>

<style>
  .container {
    padding: 16px 0;
  }

  h2 {
    font-weight: 200;
    font-size: 32px;
    margin-bottom: 12px;
    text-transform: capitalize;
    color: #000;
  }

  .project {
    padding: 16px;
  }

  .images {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
    flex: 0 1 350px;
  }

  img {
    width: 48%;
    margin: 24px 8px 8px 0;
  }

  .img-cont {
    margin-top: 24px;
  }

  @media screen and (max-width: 767px) {
    img {
      width: 100%;
    }
  }
</style>

<svelte:head>
  <title>Project: {project.name}</title>
</svelte:head>
<div class="container">
  {#if project}
    <div class="project">
      <h2>{project.name}</h2>
      <div>{project.description}</div>
      <div class="img-cont">
        <h2>Gallery</h2>
        <div class="images">
          {#each project.images as image (image)}
            <img src={image} alt="project images" />
          {/each}
        </div>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div>
