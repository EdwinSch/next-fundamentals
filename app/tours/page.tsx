import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

// Example (1): Fetch in separate function (optional)
// --- const fetchTours = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   const response = await fetch(url);
//   const data: Tour[] = await response.json();
//   return data;
// };

const ToursPage = async () => {
  // Example (2): Invoke fetch from the separate function here into the page
  // --- const data = await fetchTours();

  // OR: Fetch directly into the page, not from separate function

  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log(data);
  return (
    <section>
      <h1 className="mb-10 italic capitalize text-green-700">
        server component example with fetch
      </h1>

      <h2 className="text-3xl mb-2">Tours</h2>

      {data.map((tour) => {
        return (
          <Link
            className="hover:underline hover:text-blue-500"
            key={tour.id}
            href={`/tours/${tour.id}`}
          >
            <h2>{tour.name}</h2>
          </Link>
        );
      })}
    </section>
  );
};
export default ToursPage;
