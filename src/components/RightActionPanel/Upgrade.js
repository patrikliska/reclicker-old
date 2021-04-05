import React from 'react';

import {
  GiMetalBar,
  GiMinerals,
  GiGloves,
  GiMineWagon,
  GiStonePile,
  GiWoodPile,
} from 'react-icons/gi';

const Components = {
  GiMetalBar,
  GiMinerals,
  GiGloves,
};

const Upgrade = (block) => {
  if (typeof Components[block.icon] !== 'undefined') {
    return React.createElement(Components[block.icon], {
      key: block.title,
      color: block?.color,
      size: 30,
      block: block,
    });
  }

  return React.createElement(() => (
    <div>The icon {block.icon} has not been created yet.</div>
  ));
};

export default Upgrade;
