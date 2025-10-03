import type {FC} from 'react';
import Header from './Header';
import ProductSearch from './ProductSearch';
import ProductDetail from './ProductDetail';

const DetailPage: FC = () => {
  return(
    <>    
      <Header />
      <ProductSearch />
      
      <main className='bg-gray-50 w-full min-h-screen'>
        <ProductDetail />

      </main>
    </>
  );
};

export default DetailPage;