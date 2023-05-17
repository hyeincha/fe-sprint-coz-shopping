import Category from '../ui/Category.jsx';
import { CATEGORY_LIST } from '../../helpers/constants.js';

function CategoryList() {
  return (
    <ul className='flex m-5 gap-8 justify-center'>
      {CATEGORY_LIST.map((category) => (
        <Category key={category.name} {...category} />
      ))}
    </ul>
  );
}

export default CategoryList;
