import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../../assets/data/index";

type TVideo = {
  name: string,
  file: string,
  info: string
}

type TCategory = {
  categoryName: string,
  content: TVideo[]
}

const ContentCategory = () => {
  const { category } = useParams();
  const [currentCategory, setCurrentCategory] = useState<TCategory>({
    categoryName: "",
    content: []
  });

  useEffect(() => {
    const currentCategory = data.find(({ categoryName }) => categoryName === category);

    if (!currentCategory) {
      return;
    } else {
      setCurrentCategory(currentCategory);
    }
  }, [category]);

  return (
    <div>
      <h1>{category}</h1>
      <div>
        {
          currentCategory.content.map((video: TVideo, index) => {
            return (
              <Link to={`/content/${category}/${video.name}`} key={index}>
                <div>
                  {video.name}
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

export default ContentCategory;