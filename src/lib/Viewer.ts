import {
  ViewerApp,
  AssetManagerPlugin,
  addBasePlugins,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  PickingPlugin,
  OutlinePlugin,
  Vector3,
  Rhino3dmLoadPlugin,
  ObjMtlLoadPlugin,
  FBXLoadPlugin,
  STLLoadPlugin,
  SSGIPlugin
} from 'webgi';

export async function setupViewer(): Promise<ViewerApp> {
  const viewer = new ViewerApp({
    canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
    useRgbm: true
  });

  await viewer.addPlugin(AssetManagerPlugin);
  await viewer.addPlugin(AssetManagerBasicPopupPlugin);
  await addBasePlugins(viewer, { enableDrop: true });
  await viewer.addPlugin(SSGIPlugin, false);
  await viewer.addPlugin(ObjMtlLoadPlugin);
  await viewer.addPlugin(FBXLoadPlugin);
  await viewer.addPlugin(STLLoadPlugin);
  await viewer.addPlugin(Rhino3dmLoadPlugin);
  await viewer.addPlugin(PickingPlugin);
  await viewer.addPlugin(OutlinePlugin);
  await viewer.addPlugin(CanvasSnipperPlugin);
  viewer.renderer.refreshPipeline();


  return viewer;
}