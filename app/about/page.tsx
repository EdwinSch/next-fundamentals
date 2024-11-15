import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">About us</h2>
      <Link
        href={"/about/contact"}
        className="text-blue-700 hover:text-blue-500 block"
      >
        Link to contact information (Nested Route)
      </Link>
      <Link href={"/"} className="text-blue-700 hover:text-blue-500 block">
        Link back to home (Main Root)
      </Link>
    </div>
  );
};
export default AboutPage;
