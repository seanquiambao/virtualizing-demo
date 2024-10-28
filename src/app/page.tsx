import Link from "next/link";
const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-2 text-4xl text-white">
      <Link className="bg-blue-800" href="without">
        Without Virtualizing
      </Link>
      <Link className="bg-blue-800" href="virtualizer">
        Virtualizer Demo
      </Link>
    </div>
  );
};

export default Home;
