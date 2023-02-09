<script lang="ts">
  import { setupViewer } from "$lib/Viewer";
  import { onMount } from "svelte";

  onMount(async () => {
    const viewer = await setupViewer();
    const manager = await viewer.getManager();
    const model =
      "https://demo-assets.pixotronics.com/pixo/gltf/earringScene2.glb";
    const env = "https://dist.pixotronics.com/webgi/assets/hdr/gem_2.hdr.png?v=1";

    await manager?.addFromPath(model);

    await viewer.scene.setEnvironment(
      await manager?.importer?.importSinglePath(
        env
      )
    );
  });
</script>