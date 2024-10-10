import { MdClose } from 'react-icons/md';
import './styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { TotalPrice } from '../../Utils/TotalPrice';
import { Link } from 'react-router-dom';

const ChekoutSideMenu = () => {
  const {
    closeProductCart,
    cartProducts,
    setCartProducts,
    isProductCartOpen,
    count,
    setCount,
    setOrder,
    order
  } = useContext(ShoppingCartContext)
  const hadleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString('es-ES'),
      products: cartProducts,
      totalProducts: count,
      totalPrice: TotalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    closeProductCart()
    setCartProducts([])
    setCount(0)
  }
  const removeProduct = (id) => {
    // Buscar el producto en el carrito por su id
    const productToRemove = cartProducts.find(product => product.code_string === id);

    // Si el producto existe en el carrito
    if (productToRemove) {
      // Restar la cantidad del producto que se va a eliminar al contador total
      setCount(count => count - productToRemove.amount);

      // Filtrar el carrito para eliminar el producto que tiene el mismo id
      const updatedCartProducts = cartProducts.filter(product => product.code_string !== id);

      // Actualizar el estado del carrito con el nuevo array sin el producto eliminado
      setCartProducts(updatedCartProducts);
    }
  };
  return (
    <aside
      className={`${isProductCartOpen ? 'flex' : 'hidden'} overflow-y-scroll overflow-x-hidden mr-1 product-cart flex-col fixed right-0 h-99 border-2 border-black rounded-lg bg-white pb-24`}
    >
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">Shopping Cart</h2>
        <MdClose className='cursor-pointer bg-black text-white h-6 w-6 rounded-full' onClick={() => closeProductCart()} />
      </div>
      {
        cartProducts.map(p => (
          <OrderCard key={p.code_string} code_string={p.code_string} name_text_es={p.name_text_es} pricevalue_cop_double={p.pricevalue_cop_double} imgUrl={p['img-750wx750h_string']} amount={p.amount} removeProduct={removeProduct} />
        ))
      }
      <div className='fixed flex justify-evenly mx-4 mt-6 w-72 bottom-14 p-2 rounded-lg'>
        <p className='font-semibold text-lg'>Total:</p>
        <span className='font-bold text-lg' >$ {TotalPrice(cartProducts).toLocaleString('es-CO')}
        </span>
      </div>
      <Link to="/my-orders/last">
        <button className='fixed mx-4 mt-6 bg-black w-72 bottom-4 text-white p-2 rounded-lg' onClick={() => hadleCheckout()}>Chekout</button>
      </Link>



    </aside>
  );
};
export { ChekoutSideMenu };
