import { Link } from "react-router-dom";
import "./CategoryCard.scss"

type TCategoryName = {
  categoryName: string
}

const CategoryCard = ({ categoryName }: TCategoryName) => {
  return (
    <Link to={`/content/${categoryName}`} className="link-component">
      <div className="card">
        {categoryName}
      </div>
    </Link >
  );
};

export default CategoryCard;