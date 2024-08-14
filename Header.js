import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-2xl font-bold">Spreadsheet</h1>
      <SearchBar />
    </div>
  );
};

export default Header;