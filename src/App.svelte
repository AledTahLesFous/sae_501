<script>
  import Router from 'svelte-spa-router';

  import Page1 from './routes/page1.svelte';
  // @ts-ignore
  import Test from './routes/test.svelte';

  const routes = {
    '/': Page1,
    '/test': Test
  };
</script>

<Router {routes} useHash={true} />
