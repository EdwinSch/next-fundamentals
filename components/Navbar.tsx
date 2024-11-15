import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4 border-b-2">
      <Link href="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link href="/counter" className="hover:text-blue-500">
        Counter
      </Link>
      <Link href="/tours" className="hover:text-blue-500">
        Tours
      </Link>
      <Link href="/actions" className="hover:text-blue-500">
        Actions
      </Link>
    </nav>
  );
};
export default Navbar;
