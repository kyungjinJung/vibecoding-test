import LoadingSpinner from '../../components/LoadingSpinner';

export default function PostLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation placeholder */}
        <div className="mb-6 flex items-center justify-between">
          <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
        </div>

        {/* Loading spinner in center */}
        <div className="flex justify-center items-center py-20">
          <LoadingSpinner size="lg" text="Loading article..." />
        </div>

        {/* Article header placeholder */}
        <div className="border-b border-gray-700 pb-4 mb-8 animate-pulse">
          <div className="h-12 w-4/5 bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-32 bg-gray-700 rounded"></div>
        </div>

        {/* Content placeholder */}
        <div className="space-y-6 animate-pulse">
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
          </div>
          
          <div className="h-8 w-2/3 bg-gray-700 rounded"></div>
          
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
            <div className="h-4 w-4/5 bg-gray-700 rounded"></div>
          </div>

          <div className="h-8 w-1/2 bg-gray-700 rounded"></div>
          
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* Bottom navigation placeholder */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex items-center justify-between animate-pulse">
          <div className="h-6 w-32 bg-gray-700 rounded"></div>
          <div className="h-6 w-24 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}
