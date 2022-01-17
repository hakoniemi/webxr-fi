import { registerComponent } from 'aframe';
import { threeToCannon, ShapeType } from 'three-to-cannon';

interface Object3D_Node {
  name: string;
  material?: {
    color: {
      set: (val: string) => void;
    };
  };
}

const Assets = () => {
  const assets = document.createElement('a-assets');

  const registerComponents = () => {
    registerComponent('car_001', {
      init: function () {
        const { el } = this;

        el.addEventListener('model-loaded', () => {
          const obj = el.getObject3D('mesh');

          const result = threeToCannon(obj);

          console.log(result);

          obj.traverse((node: Object3D_Node) => {
            const { name, material } = node;
            const attributes = ['car_body'];

            if (attributes.includes(name)) {
              material!.color.set('#4060f0');
            }
          });
        });
      },
    });

    registerComponent('car_002', {
      init: function () {
        const { el } = this;

        el.addEventListener('model-loaded', () => {
          const obj = el.getObject3D('mesh');

          const result = threeToCannon(obj);

          console.log(result);

          obj.traverse((node: Object3D_Node) => {
            const { name, material } = node;
            const attributes = ['car_body'];

            if (attributes.includes(name)) {
              material!.color.set('#ffffff');
            }
          });
        });
      },
    });
  };

  const createAssets = () => {
    const car_001 = document.createElement('a-asset-item');
    car_001.setAttribute('id', 'car_001');
    car_001.setAttribute('src', './assets/car_001.gltf');

    const car_002 = document.createElement('a-asset-item');
    car_002.setAttribute('id', 'car_002');
    car_002.setAttribute('src', './assets/car_001.gltf');

    assets.appendChild(car_001);
    assets.appendChild(car_002);
  };

  const addCarEntity = (ref: string, position: string) => {
    const entity = document.createElement('a-entity');

    entity.setAttribute('gltf-model', `#${ref}`);
    entity.setAttribute(ref, '');
    entity.setAttribute('position', position);
    entity.setAttribute('light', 'type: ambient; color:#FFFFFF; intensity: 8;');

    return entity;
  };

  const init = (scene: HTMLElement) => {
    registerComponents();
    createAssets();

    scene.appendChild(assets);
    scene.appendChild(addCarEntity('car_001', '0 0 -5'));
    scene.appendChild(addCarEntity('car_002', '-3 0 -5'));
  };

  return {
    init,
  };
};

export default Assets();
