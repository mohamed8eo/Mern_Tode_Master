import { Link } from 'react-router';
import { AlertTriangle } from 'lucide-react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-center items-center px-6 text-center">
      <div className="flex flex-col items-center space-y-4">
        <AlertTriangle className="text-red-500" size={64} />
        <h1 className="text-5xl font-bold text-[#121417]">404</h1>
        <p className="text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#C9DEED] hover:bg-[#B0CFE2] text-[#121417] font-semibold rounded-full transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
