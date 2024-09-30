import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { ProductDetail } from '../../Components/ProductDetail';
import { useFetchProducts } from '../../Service/useService';

const Home = () => {
  const items = useFetchProducts();
 
  return (
    <Layout>

      <div className=" mt-5 grid gap-4 grid-cols-4 justify-items-center w-full max-w-screen-lg max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};
export { Home };
