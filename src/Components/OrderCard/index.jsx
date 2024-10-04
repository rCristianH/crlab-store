import { useContext } from "react"
import { MdClose } from "react-icons/md"
import { ShoppingCartContext } from "../../Context"

const OrderCard = ({ id, title, imgURL, price, amount, removeProduct }) => {

  const { cartProducts, setCartProducts, count, setCount } = useContext(ShoppingCartContext)

  let renderCloseIcon 

  if(removeProduct){
    renderCloseIcon = <MdClose className='bg-black text-white h-5 w-5 cursor-pointer rounded-full mr-4' onClick={() => {
      removeProduct(id)
    }} />
  }

  return (
    <div className="flex items-center justify-between w-11/12 h-24 my-2 mx-auto rounded-2xl">
      <div className=" flex">
        <figure className="h-16 aspect-square ml-4 rounded-lg">
          <img  className="max-h-full max-w-f p-2 object-cover m-auto" src={imgURL} alt={title} />
        </figure>
        <div><p className="ml-4 text-sm font-light">{title}</p>
          <p className="text-xs ml-4 mt-1 font-normal">Cantidad: {amount}</p>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse items-end  h-16">
        <p className="font-bold mr-4">${price}</p>
        {renderCloseIcon}
      </div>
    </div>
  )
}
export { OrderCard }