import { getModule } from "@/app/services/getModules";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Carousel from "@/app/ui/Carousel";

export default async function SliderInfo({ id }) {
  const data = await getModule(id);
  return (
    <section id="Slider-Info" className="w-full h-full mb-4 p-4">
      <div className="md:w-full md:h-screen max-h-screen min-h-56 flex flex-col items-center justify-between gap-4">
        <div className="w-full h-1/2">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <BlocksRenderer content={data.description} />
        </div>
        {data.sliderImages.data.length === 0 ? null : (
          <div className="md:w-4/5 md:h-4/5 h-56 w-full">
            <Carousel images={data.sliderImages.data} interval={5000} />
          </div>
        )}
      </div>
    </section>
  );
}
