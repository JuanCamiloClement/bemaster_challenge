import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../assets/data/index";

type TVideo = {
  name: string,
  file: string,
  info: string
}

const ContentDetails = () => {
  const { category, filename } = useParams();
  const [pageContent, setPageContent] = useState<TVideo>({
    name: "",
    file: "",
    info: ""
  });

  useEffect(() => {
    const video = data.find(({ categoryName }) => categoryName === category)?.content.find(({ name }) => name === filename)

    if (!video) {
      return;
    } else {
      setPageContent(video)
    }
  }, [category, filename])

  return (
    <div>
      {pageContent.name}
      <video width="300" height="auto" controls>
        <source src={pageContent.file} type="video/mp4" />
      </video>
    </div>
  );
};

export default ContentDetails;