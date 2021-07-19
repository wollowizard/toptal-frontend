<!-- App Bar -->
<script lang="ts">
  import { isAuthenticated, user } from "../auth/auth-store";
  import authService from "../auth/auth-service";
  import { link } from "svelte-routing";
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/#">Task Manager</a>
  <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"/>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a href='/' class="nav-link" use:link>Home</a>
      </li>
      <li class="nav-item active">
        <a href='/other' class="nav-link" use:link>Other</a>
      </li>
    </ul>

    <div class="navbar-nav mr-auto user-details">
      {#if $isAuthenticated}
          <span class="text-white">&nbsp;&nbsp;{$user.name}
            ({$user.email})</span>
      {:else}<span>&nbsp;</span>{/if}
    </div>

    <span class="navbar-text">
        <ul class="navbar-nav float-right">
          {#if $isAuthenticated}
            <li class="nav-item">
              <a class="nav-link" href="/#" on:click={authService.logout}>Log Out</a>
            </li>
          {:else}
            <li class="nav-item">
              <a class="nav-link" href="/#" on:click={authService.loginWithPopup}>Log In</a>
            </li>
          {/if}
        </ul>
      </span>
  </div>
</nav>
<style>
  .nav-item a{
    text-decoration: none;
    color: white;
  }

</style>
