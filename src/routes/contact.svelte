<script lang="ts">
  let link =
    "https://firebasestorage.googleapis.com/v0/b/vansoundz.appspot.com/o/_vansoundz%20on%20Instagram_%20_--%EF%B8%8F--__B9cIzYolXyM(JPG).jpg?alt=media&token=72623bab-9c87-42c6-b090-3e80770500e8";
</script>

<style>
  .contact {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }

  .card {
    min-width: 500px;
    height: 170px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 6px #ebf3ce;
    overflow: hidden;
  }
  .image {
    background: #ee9484;
    height: 100%;
    background-size: cover !important;
  }

  .content {
    padding: 12px;
  }

  a i {
    font-size: 22px;
  }

  .name {
    font-weight: bold;
    color: black;
  }

  @media screen and (max-width: 400px) {
    .card {
      min-width: 300px;
      height: 120px;
    }
  }
</style>

<svelte:head>
  <title>contact</title>
</svelte:head>
<div class="contact">
  <div>
    <div>
      <h3>Get in touch</h3>
    </div>
    <div class="card">
      <div class="image" style="background: url('{link}')" />
      <div class="content">
        <div class="name">Evans Kibet</div>
        <div class="email">
          <a href="mailto:ndiwa.ek@gmail.com">ndiwa.ek@gmail.com</a>
        </div>
        <div class="phone"><a href="tel:+254729732367">+254729732367</a></div>
        <div class="social">
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/evans-kibet/"
            style="color: #0e76a8">
            <i class="fa fab fa-linkedin" />
          </a>
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/vansoundz">
            <i class="fa fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
