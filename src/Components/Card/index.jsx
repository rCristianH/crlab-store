import { MdAdd } from 'react-icons/md';

const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 aspect-[3/4] rounded-lg border-2 border-gray-900">
      <figure className="relative mb-2 w-full h-4/5 p-2">
        <span className='border-2 border-gray-700 absolute -top-5 left-2 bg-white rounded-lg text-black text-xs m-2 px-3 py-0.5'>Laptop</span>
        <img className='w-full h-full object-cover rounded-lg' src="https://www.alkosto.com/medias/198153015641-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMTEyNnxpbWFnZS93ZWJwfGFEQTVMMmhsTmk4eE5EVXpNVGswTnpjNU1ETTJOaTh4T1RneE5UTXdNVFUyTkRGZk1EQXhYemMxTUZkNE56VXdTQXwwNWY1YzQ4OTIxMDA3MzgzZGRmMzY2NDQ4OTc0MWNkMzc1ZDRkZWRhNDczZTNlNGYwMTVhNzAyOGRmZjZjMTA3" alt="headphones" />
        <MdAdd className='absolute top-0 right-0 bg-white w-6 h-6 rounded-full m-2 p-1'/>
      </figure>
      <p className='flex justify-between m-2'>
        <span className='text-sm font-light'>IdeaPad Slim 5</span>
        <span className='text-lg font-bold'>$2.299.000</span>
      </p>
    </div>
  );
};
export { Card };
