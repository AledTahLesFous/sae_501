<script>
  import Page1 from './routes/page1.svelte';
  import Router from 'svelte-spa-router';

  const routes = {
    '/': Page1,
  };
</script>

<Router {routes} />
