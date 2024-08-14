import { useStore } from '../store/gridStore';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useStore();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="search"
      value={searchQuery}
      onChange={handleSearch}
      className="w-full p-2 pl-10 text-sm text-gray-700"
      placeholder="Search..."
    />
  );
};

export default SearchBar;