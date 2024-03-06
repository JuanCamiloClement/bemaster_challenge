import CategoryCard from "../CategoryCard";
import { data } from "../../assets/data";

const Home = () => {
  const categoryNames = data.map(({ categoryName }) => categoryName)

  return (
    <div>
      {
        categoryNames.map((name, index) => {
          return (
            <div key={index}>
              <CategoryCard categoryName={name} />
            </div>
          )
        })
      }
    </div>
  );
};

export default Home;