import Toast from '../ui/Toast.jsx';
import { useSelector } from 'react-redux';

function ToastContainer() {
  const toasts = useSelector((state) => state.toast);

  return (
    <section className='fixed bottom-7 right-7'>
      {toasts.map((toast) => (
        <Toast key={toast.id} isBookmarked={toast.isBookmarked} />
      ))}
    </section>
  );
}

export default ToastContainer;
