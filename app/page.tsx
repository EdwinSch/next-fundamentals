import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl">Hello, welcome to Next fundamentals</h1>
      <Link href={"/about"} className="text-blue-700 hover:text-blue-500">
        Link to about page
      </Link>
    </>
  );
};
export default HomePage;
