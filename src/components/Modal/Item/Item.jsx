import React from 'react';
import { useDrag } from 'react-dnd';

function Item({ children, setIsFirstColumn }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.name === 'column 1') {
        setIsFirstColumn(true);
      } else {
        setIsFirstColumn(false);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      {children}
    </div>
  );
}

export default Item;
