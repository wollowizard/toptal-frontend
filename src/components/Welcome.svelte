<script lang="ts">
  import authService from "../auth/auth-service";
</script>
<div class="container mt-5">
  <div class="row">
    <div class="col-md-10 offset-md-1">
      <div class="jumbotron">
        <h1 class="display-4">Task Management made Easy!</h1>
        <p class="lead">Instructions</p>
        <ul>
          <li>Login to start &#128272;</li>
          <li>Create Tasks &#128221;</li>
          <li>Tick off completed tasks &#9989;</li>
        </ul>

        <a
            class="btn btn-primary btn-lg mr-auto ml-auto"
            href="/#"
            role="button"
            on:click={authService.loginWithPopup}>Log In</a>
      </div>
    </div>
  </div>
</div>
