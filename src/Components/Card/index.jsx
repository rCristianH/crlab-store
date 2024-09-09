import { MdAdd } from 'react-icons/md';

const Card = (data) => {
  const { id, title, price, description, category, image } = data.data;
  return (
    <div className="bg-white cursor-pointer w-56 aspect-[3/4] rounded-lg border-2 border-gray-900">
      <figure className="relative mb-2 w-full h-4/5 p-2">
        <span className="border-2 border-gray-700 absolute -top-5 left-2 bg-white rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={description}
        />
        <MdAdd className="absolute top-0 right-0 bg-white w-6 h-6 rounded-full m-2 p-1" />
      </figure>
      <p className="flex justify-between m-2">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </div>
  );
};
export { Card };
