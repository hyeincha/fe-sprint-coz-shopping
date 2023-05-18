import { AiOutlineFolderOpen } from 'react-icons/ai';

function Empty() {
  return (
    <div className='w-full h-60 flex justify-center items-center gap-2'>
      <AiOutlineFolderOpen size={40} color='#412DD4' />
      <span className='font-bold text-xl text-[#412DD4]'>아직 북마크된 상품이 없어요!</span>
    </div>
  );
}

export default Empty;
