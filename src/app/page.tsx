import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/4a717935-7c6e-46ef-aa7a-7cd93614832a-umor0a.png",
  "https://utfs.io/f/1228b2c9-17a4-43d5-b8e9-5854cea4ab0d-5poc22.png",
  "https://utfs.io/f/a20460e6-d17c-457a-a074-cf8581eae107-kfa44l.png",
  "https://utfs.io/f/430ef115-317e-47f7-91c1-b8a4031ac6fd-rddkd0.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 flex-col">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      hello gallery in progress
    </main>
  );
}
