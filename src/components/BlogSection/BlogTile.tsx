import Link from "next/link";
import Image from "next/image";

interface BlogTileProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function BlogTile({
  id,
  title,
  description,
  imageSrc,
}: BlogTileProps) {
  return (
    <div className="w-full border rounded-lg ">
      <Link href={`/posts/${id}`}>
        <div className="flex flex-col md:flex-row items-center md:h-[200px]">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={description}
              className="md:w-1/3 h-full object-cover"
              width={300}
              height={200}
              sizes="(min-width: 768px) 300px, 100vw"
            />
          )}
          <div className="p-6 md:w-2/3 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
            <p className="text-md text-gray-700">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
