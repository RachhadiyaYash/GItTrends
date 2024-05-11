import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-red-100 p-3 md:p-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-bold ml-3 md:ml-12 mb-3 md:mb-0">
          GitTrends
        </h3>
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <Link to="/" className="font-bold md:ml-0 mb-3 md:mb-0">
            Git Trends
          </Link>
          <Link to="/gitprofile" className="font-bold md:ml-0 mb-3 md:mb-0">
            Git Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
