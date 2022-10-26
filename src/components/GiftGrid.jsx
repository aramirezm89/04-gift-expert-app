
import { GifItem } from "./GifItem";
import {useFetchGif} from "../hooks/useFetchGif"

export const GiftGrid = ({ category }) => {

  const { images, isLoading } = useFetchGif(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading ? (<h2>Cargando...</h2>):null
      }
      <div className="card-grid">
        {images.map(image => (
          <GifItem key={image.id} url={image.url} title={image.title}/>
        ))}
      </div>
    </>
  );
};
