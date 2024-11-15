import mapsImg from "@/images/maps.jpg";
import Image from "next/image";

const imgUrl = "https://www.course-api.com/images/tours/tour-1.jpeg";

const ImagesPage = () => {
  return (
    <>
      <h1 className="mb-10 italic text-green-700">
        Using images example from local and external source.
      </h1>

      <div className="flex flex-col md:flex-row gap-2 mt-8">
        <h2>local image:</h2>
        {/* Example: Local image rendering with Next Image element */}
        <Image
          src={mapsImg}
          alt="maps"
          width={192}
          height={192}
          className="w-48 h-48 object-cover"
          priority
        />

        {/* Example: Remote image rendering. Note 1: width + height props are required! Note 2: image url/path needs to be added to supported list in Next config */}
        <h2>remote image:</h2>
        <Image
          src={imgUrl}
          alt="tour"
          width={192}
          height={192}
          className="w-48 h-48 object-cover"
          priority
        />
      </div>
    </>
  );
};
export default ImagesPage;
