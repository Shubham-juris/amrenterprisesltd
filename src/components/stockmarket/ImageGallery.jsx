import img1 from "../../assets/stockmarket/img.jpg";
import img2 from "../../assets/stockmarket/img1.jpg";
import img3 from "../../assets/stockmarket/img2.jpg";

export default function ImageGallery() {
  const images = [img1, img2, img3];

  return (
    <div className="bg-black py-12 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {images.map((item) => (
          <Images key={item} image={item} />
        ))}
      </div>
    </div>
  );
}

const Images = ({ image }) => (
  <img
    src={image}
    alt="Stock Dashboard"
    className="w-full h-[350px] object-cover shadow-lg"
  />
);
