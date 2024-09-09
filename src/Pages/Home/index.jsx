import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { useFetchProducts } from '../../Service/useService';

const Home = () => {
  const items = useFetchProducts();
  return (
    <Layout>
      Home
      <div div className=" mt-5 grid gap-10 grid-cols-4 justify-items-center w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
};
export { Home };
