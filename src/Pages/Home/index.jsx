import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { useFetchProducts } from '../../service/useService';

const Home = () => {
  const items = useFetchProducts();
  return (
    <Layout>
      Home
      {items?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </Layout>
  );
};
export { Home };
