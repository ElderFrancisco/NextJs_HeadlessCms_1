import { getModule } from "@/app/services/getModules";
import Button from "@/app/ui/Button";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function ImageInfo({ id }) {
  const data = await getModule(id);
  console.log(data);
  if (!data) {
    return null;
  }
  return (
    <section className="w-full p-4 border-2   mb-4 show1-down">
      <div className="flex flex-col-reverse h-full md:h-72 items-center h-full justify-start gap-4 md:flex-row">
        {data.image.data !== null ? (
          <img
            className="w-full md:w-1/2 h-full object-cover object-center"
            src={
              data.image.data.attributes.url
                ? data.image.data.attributes.url
                : null
            }
            alt={data.image.data.attributes.alternativeText}
          />
        ) : (
          <img className="" alt="no hay imagen" />
        )}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
          <div className=" flex flex-col mt-4 w-4/5 gap-4 show2-down">
            <h1 className="text-3xl font-bold  ">{data.title}</h1>
            <div className="w-full text-start">
              <BlocksRenderer content={data.description} />
            </div>
          </div>
          <div className="w-full">
            <Button
              url={data.buttonUrl}
              text={data.buttonText}
              target={data.buttonTarget}
              color="blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
