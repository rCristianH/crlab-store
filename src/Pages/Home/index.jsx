import { useContext, useState } from 'react';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

const Home = () => {
  const { items, setArgSearch, filteredItems } = useContext(ShoppingCartContext)
  const [searchMode, setSearchMode] = useState(false);

  const handleSearchChange = (e) => {
    const arg = e.target.value;
    setArgSearch(arg);
    setSearchMode(arg !== "");
  }
  const clearSearch = () => {
    setArgSearch("");
    setSearchMode(false);
  };
  const renderItems = (itemsList) => {
    if (!itemsList || itemsList.length === 0) {
      return <p className='font-semibold' onClick={clearSearch}>Opps, Nothing found!!</p>;
    }
    return itemsList?.map((item) => (
      <Card key={item.code_string} data={item} />
    ));
  };

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <input
          className='placeholder-gray-600 bg-gray-200 h-12 w-96 p-4 rounded-full' type='text'
          placeholder='What are you looking for today?'
          onChange={handleSearchChange}
        />
      </div>
      <div className=" mt-5 grid gap-4 grid-cols-4 justify-items-center w-full max-w-screen-lg max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {searchMode ? renderItems(filteredItems) : renderItems(items)}
      </div>
      <ProductDetail />
    </Layout>
  );
};
export { Home };
