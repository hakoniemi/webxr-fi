const HUD = () => {
  const registerComponents = () => {};
  const hudEntity = document.createElement('a-entity');

  const decorateHUD = () => {
    hudEntity.setAttribute('id', 'HUD');
    //    hudEntity.setAttribute('geometry', 'primitive: plane');
    // hudEntity.setAttribute('material', 'opacity: 0.0; transparent: true');
    // hudEntity.setAttribute('position', '0, 0, -1');
  };

  const createHands = () => {
    const L = document.createElement('a-entity');
    const R = document.createElement('a-entity');

    L.setAttribute(
      'hand-controls',
      'hand: left; handModelStyle: highPoly; color: #c02020;'
    );
    L.setAttribute('id', 'leftHand');

    R.setAttribute(
      'hand-controls',
      'hand: right; handModelStyle: highPoly; color: #c02020;'
    );
    R.setAttribute('id', 'rightHand');

    hudEntity.appendChild(L);
    hudEntity.appendChild(R);
  };

  const init = (scene: HTMLElement) => {
    registerComponents();

    createHands();
    decorateHUD();

    scene.appendChild(hudEntity);
  };

  return {
    init,
  };
};

export default HUD();
