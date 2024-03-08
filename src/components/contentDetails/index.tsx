import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../assets/data/index";
import "./contentDetails.scss"

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
    <div className="detailspage-container">
      <h4>{pageContent.name}</h4>
      <video src={pageContent.file} className="video-file" controls />
      <p>Detalles:</p>
      <p>{pageContent.info}</p>
    </div>
  );
};

export default ContentDetails;