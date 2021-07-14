<script>
  import { onMount } from "svelte";
  import authService from "./auth/auth-service";
  import Navbar from "./components/Navbar.svelte";
  import Welcome from "./components/Welcome.svelte"
  import Home from "./components/Home.svelte"

  import { Route, Router } from "svelte-routing";
  import { isAuthenticated } from "./store";

  onMount(async () => authService.init());


</script>

<style>
  #main-application {
    margin-top: 50px;
  }
</style>

<main>

  <Router url="">
    <Navbar/>
    <div>
      <Route path="/other">hello</Route>
      {#if $isAuthenticated}
        <Route path="/" component={Home}/>
      {:else}
        <Route path="/" component={Welcome}/>
      {/if}
    </div>
  </Router>

</main>
