import { TOAST_MESSAGE } from '../../helpers/constants';

function Toast({ isBookmarked }) {
  return (
    <div className='flex items-center gap-3 w-max mt-2 px-8 py-4 bg-white shadow-[0px_0px_20px_#0000002c] rounded-lg'>
      <img src={isBookmarked ? '/greystar.png' : '/yellowstar.png'} width={22} />
      <span className='font-semibold text-lg'>
        {isBookmarked ? TOAST_MESSAGE.REMOVE : TOAST_MESSAGE.ADD}
      </span>
    </div>
  );
}

export default Toast;
