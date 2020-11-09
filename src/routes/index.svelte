<script>
  import { onDestroy, onMount } from "svelte";

  import { fly, fade } from "svelte/transition";
  let visible = false;

  onMount(() => {
    setTimeout(() => (visible = true), 200);
  });
  onDestroy(() => (visible = false));
</script>

<style>
  .content {
    min-height: 65vh;
    display: flex;
    padding: 0 16px;
    align-items: center;
  }

  .name {
    font-size: 22px;
    font-weight: 200;
  }

  .who-am-i {
    font-size: 26px;
    max-width: 400px;
    text-align: left;
    font-weight: 600;
  }

  .view {
    background: #ec9614;
    padding: 4px 18px;
    border-radius: 4px;
    color: #fff;
  }

  .contact-me {
    border: 1px solid #ec9614;
    color: #ec9614;
    padding: 4px 18px;
    border-radius: 4px;
  }
</style>

<svelte:head>
  <title>Vansoundz</title>
</svelte:head>

<div class="content">
  {#if visible}
    <div class="one" in:fly={{ x: -300 }}>
      <div in:fade class="name">Evans Kibet</div>
      <div class="who-am-i">
        I am a full stack Javascript, TypeScript and flutter developer.
      </div>
      <div style="margin-top: 16px">
        <a href="projects" class="view">View my work</a>
        <a href="contact" class="contact-me">Contact</a>
      </div>
    </div>
  {/if}
</div>
