function Card({ product }) {
  const {
    id,
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
  } = product;

  let content;

  switch (type) {
    case 'Product':
      content = (
        <div className='flex justify-between mt-2'>
          <h3 className='font-bold'>{title}</h3>
          <div className='flex flex-col text-right gap-2'>
            <span className='font-bold text-[#452CDD]'>{discountPercentage}%</span>
            <span>{price}</span>
          </div>
        </div>
      );
      break;
    case 'Category':
      content = (
        <div className='mt-2'>
          <h3 className='font-bold'># {title}</h3>
        </div>
      );
      break;
    case 'Exhibition':
      content = (
        <div className='mt-2'>
          <h3 className='font-bold mb-2'>{title}</h3>
          <span>{sub_title}</span>
        </div>
      );
      break;
    default:
      content = (
        <div className='flex justify-between mt-2'>
          <h3 className='font-bold'>{brand_name}</h3>
          <div className='flex flex-col text-right gap-2'>
            <span className='font-bold'>관심고객수</span>
            <span>{follower.toLocalString()}</span>
          </div>
        </div>
      );
  }

  return (
    <section className='w-[264px]'>
      <img
        src={type === 'Brand' ? brand_image_url : image_url}
        alt={type === 'Brand' ? `${brand_name} image` : `${title} image`}
        className='rounded-xl'
      />
      {content}
    </section>
  );
}

export default Card;
