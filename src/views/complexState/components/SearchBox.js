function SearchBox({ data }) {
  return (
    <div>
      <input value={searchKey} onChange={handleSearch} />
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default () => {
  const data = [];
  return <SearchBox data={data} />;
};
