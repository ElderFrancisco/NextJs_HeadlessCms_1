import { getModules } from "@/app/services/getModules";
import ImageInfo from "@/app/components/ImageInfo";
import SliderInfo from "@/app/components/SliderInfo";
import HeroImage from "@/app/components/HeroImage";

const componentMap = {
  ImageInfo: ImageInfo,
  SliderInfo: SliderInfo,
  HeroImage: HeroImage,
  // Otros componentes y sus referencias aquí
};

export default async function MainContent() {
  const modules = await getModules();
  if (!modules) {
    return null;
  }

  return (
    <>
      {modules.map((module) => {
        console.log(module);
        const Component = componentMap[module.attributes.type];
        return <Component key={module.id} id={module.id} />;
      })}
    </>
  );
}
