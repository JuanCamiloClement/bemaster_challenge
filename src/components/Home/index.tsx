import CategoryCard from "../CategoryCard";
import { data } from "../../assets/data";
import "./Home.scss"

const Home = () => {
  const categoryNames = data.map(({ categoryName }) => categoryName)

  return (
    <div className="homepage-container">
      <h4>Categorías</h4>
      <div className="cards-container">
        {
          categoryNames.map((name, index) => {
            return (
              <CategoryCard categoryName={name} key={index} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;