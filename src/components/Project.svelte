<script lang="ts">
  import type { IProject } from "../data";

  export let project: IProject;
</script>

<style>
  .project {
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
    background: #fff;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 0 6px #ebf3ce;
  }

  .image {
    width: 100%;
    height: 240px;
    background: #f38c2c;
    background-size: cover !important;
  }

  .details {
    padding: 16px;
  }

  .name {
    font-size: 22px;
    font-weight: 500;
    color: #000;
  }

  .view {
    padding: 4px 24px;
    background-color: #f38c2c;
    color: #fff;
    border-radius: 4px;
    margin-top: 8px;
  }

  @media screen and (max-width: 600px) {
    .project {
      grid-template-columns: unset;
    }

    .image {
      height: 270px;
    }
  }
</style>

<div class="project">
  <div>
    <div class="image" style={`background: url(${project.images[0]})`} />
  </div>
  <div class="details">
    <div class="name">{project.name}</div>
    <div class="">{project.description.slice(0, 100)}...</div>
    <a href={`projects/${project.id}`} class="view">View</a>
  </div>
</div>
