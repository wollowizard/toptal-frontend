<script>
  import { Route } from 'svelte-routing';
  import accessDenied from './routes/accessDenied.svelte';
  import { isAuthenticated } from "../store";

  export let path;
  export let component;

</script>


