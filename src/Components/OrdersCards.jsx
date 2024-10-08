import { MdClose } from "react-icons/md"

const OrdersCard = ({ totalPrice, totalProducts, date }) => {

  return (
    <div className="flex items-center flex-col justify-between w-40 h-20 border-2 border-black my-2 mx-auto rounded-2xl p-2">
      <div className=" flex">

        <div>
          <p className="text-sm font-light">{date}</p>
          <p className="text-sm font-light">Products: {totalProducts}</p>
          <p className="text-sm font-light"></p>
        </div>
      </div>

      <div className="flex justify-between flex-col-reverse items-end  h-16">
        <p className="font-bold">$ {totalPrice.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  )
}
export { OrdersCard }