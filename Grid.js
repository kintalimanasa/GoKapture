import Cell from './Cell';

const Grid = () => {
  const { cells } = useStore();

  return (
    <div className="grid grid-cols-12 gap-2">
      {cells.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap">
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} row={rowIndex} col={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;