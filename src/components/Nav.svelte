<script lang="ts">
  export let segment: string;
</script>

<style>
  nav {
    position: sticky;
    top: 0;
    left: 0;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    background: #fff;
    border-radius: 0 0 32px 32px;
    overflow: hidden;
    flex-wrap: wrap;
  }

  nav,
  nav ul {
    display: flex;
  }

  ul li:not(:last-child) {
    margin-right: 16px;
  }

  li {
    position: relative;
  }

  nav > a:first-child {
    font-weight: bolder;
    font-size: 20px;
  }

  .active::after {
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
    height: 4px;
    background: #f38c2c;
    content: "";
  }

  ul {
    min-width: 245px;
  }

  @media screen and (max-width: 375px) {
    ul,
    nav {
      justify-content: center;
    }
  }
</style>

<nav>
  <a href="/">Vansoundz</a>
  <ul>
    <li class:active={segment === 'resume'}><a href="resume">Resume</a></li>
    <li class:active={segment === 'projects'}>
      <a href="projects">Projects</a>
    </li>
    <li class:active={segment === 'contact'}><a href="contact">Contact</a></li>
  </ul>
</nav>
