import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/b94dec0c-d01d-4715-a914-2532c3f316b9-rhxw1r.jpg",
  "https://utfs.io/f/23b7eabb-64ec-483c-8e63-fa49406da05b-rhxw1s.jpg",
  "https://utfs.io/f/879ef0c2-5264-42ed-b794-78234f37dd82-rhxw1p.jpg",
  "https://utfs.io/f/58810ccf-bc01-499d-b168-2f48ac588dc8-umr70j.jpg",
  "https://utfs.io/f/b94dec0c-d01d-4715-a914-2532c3f316b9-rhxw1r.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap p-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 gap-4 p-2">
            <img src={image.url} className="" />
          </div>
        ))}
      </div>
    </main>
  );
}
