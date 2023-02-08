<script lang="ts">
  import { setupViewer } from "$lib/Viewer";
  import { onMount } from "svelte";
  onMount(async () => {
    viewer = await setupViewer();
  });
</script>