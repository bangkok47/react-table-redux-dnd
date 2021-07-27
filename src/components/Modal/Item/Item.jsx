import React from 'react';
import { ItemTypes } from '../../../redux/constants/modal-items';

import { useDrag } from 'react-dnd';

function Item({ children, id }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ITEM,
    item: () => ({ id }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      {children}
    </div>
  );
}

export default Item;
