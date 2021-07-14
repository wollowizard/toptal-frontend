<script>
  import { onMount } from "svelte";
  import authService from "./auth/auth-service";
  import { isAuthenticated, user } from "./store";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./routes/Home.svelte";
  import { Route, Router } from "svelte-routing";

  onMount(async () => {
    await authService.createClient();

    isAuthenticated.set(await authService.auth0Client.isAuthenticated());
    user.set(await authService.auth0Client.getUser());
  });


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
      <Route path="/" component="{Home}"/>
    </div>
  </Router>

</main>
