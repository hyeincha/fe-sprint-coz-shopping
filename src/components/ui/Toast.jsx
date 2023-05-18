function Toast({ isBookmarked }) {
  return (
    <div className='flex items-center gap-3 w-max mt-2 px-8 py-4 bg-white shadow-[0px_0px_20px_#0000002c] rounded-lg'>
      <img src={isBookmarked ? '/greystar.png' : '/yellowstar.png'} width={22} />
      <span className='font-semibold text-lg'>
        {isBookmarked ? '상품이 북마크에서 제거되었습니다.' : '상품이 북마크에 추가되었습니다.'}
      </span>
    </div>
  );
}

export default Toast;
