import { registerComponent } from 'aframe';

const Assets = () => {
  const assets = document.createElement('a-assets');

  const registerComponents = () => {
    registerComponent('car_001', {
      init: () => {},
    });
  };

  const createAssets = () => {
    const car_001 = document.createElement('a-asset-item');
    car_001.setAttribute('id', 'car_001');
    car_001.setAttribute('src', './assets/car_001.gltf');

    assets.appendChild(car_001);
  };

  const addCarEntity = () => {
    const entity = document.createElement('a-entity');

    entity.setAttribute('gltf-model', '#car_001');
    entity.setAttribute('car_001', '');
    entity.setAttribute('position', '0 0 -5');

    return entity;
  };

  const init = (scene: HTMLElement) => {
    registerComponents();
    createAssets();

    scene.appendChild(assets);
    scene.appendChild(addCarEntity());
  };

  return {
    init,
  };
};

export default Assets();
