import { MdClose } from "react-icons/md"

const OrdersCard = ({ totalPrice, totalProducts, date }) => {

  return (
    <div className="flex items-center justify-between w-44 h- border-2 border-black my-2 mx-auto rounded-2xl ">
      <div className=" flex">
        
        <div>
          <p className="ml-4 text-sm font-light">{date}</p>
          <p className="ml-4 text-sm font-light">Products: {totalProducts}</p>
          <p className="ml-4 text-sm font-light"></p>    
        </div>
      </div>

      <div className="flex justify-between flex-col-reverse items-end  h-16">
        <p className="font-bold mr-4">$ {totalPrice}</p>
      </div>
    </div>
  )
}
export { OrdersCard }