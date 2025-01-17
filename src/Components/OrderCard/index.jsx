import { useContext } from "react"
import { MdClose } from "react-icons/md"
import { ShoppingCartContext } from "../../Context"

const OrderCard = ({ id, title, price, amount, images, removeProduct }) => {
  const { cartProducts, setCartProducts, count, setCount } = useContext(ShoppingCartContext)

  let renderCloseIcon

  if (removeProduct) {
    renderCloseIcon = <MdClose className='bg-black text-white h-5 w-5 cursor-pointer rounded-full mr-4' onClick={() => {
      removeProduct(id)
    }} />
  }

  return (
    <div className="flex items-center justify-between w-11/12 my-2 mx-auto rounded-2xl">
      <div className=" flex">
        <figure className="h-24 aspect-square ml-4 rounded-lg">
          <img className="max-h-full max-w-f p-2 object-cover m-auto" src={images[1]} alt={title} />
        </figure>
        <div><p className="ml-4 text-sm font-light overflow-y-scroll overflow-x-hidden  my-order">{title}</p>
          <p className="text-xs ml-4 mt-1 font-medium">Cantidad: {amount}</p>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse items-end h-16">
        <p className="font-bold mr-4">${Number(price).toLocaleString('es-CO')}</p>
        {renderCloseIcon}
      </div>
    </div>
  )
}
export { OrderCard }