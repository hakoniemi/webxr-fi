import Assets from './assets';

const App = () => {
  const scene = document.createElement('a-scene');
  const createScene = () => {
    scene.setAttribute('background', 'color: #d0d4d8');
    document.body.appendChild(scene);
  };

  const init = () => {
    createScene();

    Assets.init(scene);
  };

  return {
    init,
  };
};

App().init();
