import { useStore } from '../store/gridStore';

const Cell = ({ row, col }) => {
  const { cells, updateCell } = useStore();
  const cell = cells[row][col];

  const handleInputChange = (e) => {
    updateCell(row, col, e.target.value);
  };

  return (
    <div
      className={`bg-white border border-gray-200 p-2 ${
        cell.formatting && cell.formatting.alignment ? `text-${cell.formatting.alignment}` : ''
      }`}
    >
      <input
        type="text"
        value={cell.value}
        onChange={handleInputChange}
        className="w-full p-2"
      />
    </div>
  );
};

export default Cell;