import { Carousel } from "flowbite-react";

export default function Component({ images, interval }) {
  if (!images) {
    return null;
  }

  const imagesArray = images.map((image) => {
    return (
      <img
        key={image.id}
        src={image.attributes.url}
        alt={image.attributes.attributes}
      />
    );
  });

  return <Carousel slideInterval={interval}>{imagesArray}</Carousel>;
}
