import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
      <div className="gradient-orb w-64 h-64 bg-violet-600/15 top-1/4 left-1/4" />
      <div className="gradient-orb w-48 h-48 bg-pink-500/10 bottom-1/4 right-1/4" />

      <h1 className="text-8xl md:text-9xl font-bold gradient-text relative z-10">404</h1>
      <p className="mt-4 text-xl text-gray-300 relative z-10">Page Not Found</p>
      <p className="mt-2 text-gray-500 relative z-10">Sorry, the page you are looking for does not exist.</p>
      <Link
        className="btn-premium mt-8 relative z-10"
        role="button"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;