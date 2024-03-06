import { Link } from "react-router-dom";

type TCategoryName = {
  categoryName: string
}

const CategoryCard = ({ categoryName }: TCategoryName) => {
  return (
    <Link to={`/content/${categoryName}`}>
      <div>
        {categoryName}
      </div>
    </Link >
  );
};

export default CategoryCard;