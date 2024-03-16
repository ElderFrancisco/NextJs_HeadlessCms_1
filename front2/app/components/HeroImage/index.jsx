import { getModule } from "@/app/services/getModules";
import styles from "./HeroImage.module.sass";

export default async function HeroImage({ id }) {
  const data = await getModule(id);

  return (
    <section className={"show1 relative bg-gray-900"}>
      <img
        className="object-cover object-center w-full h-screen"
        src={data.image.data.attributes.url} // Reemplaza esto con la URL de tu imagen
        alt="Hero"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="show2  absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{data.title}</h1>
          <p className={"text-xl text-gray-300"}>{data.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
