import Assets from './assets';
import HUD from './hud';

const App = () => {
  const scene = document.createElement('a-scene');
  const createScene = () => {
    scene.setAttribute('background', 'color: #202020');
    document.body.appendChild(scene);
  };

  const init = () => {
    createScene();

    Assets.init(scene);
    HUD.init(scene);
  };

  return {
    init,
  };
};

App().init();
