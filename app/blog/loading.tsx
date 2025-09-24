import LoadingSpinner from '../components/LoadingSpinner';

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation placeholder */}
        <div className="mb-6">
          <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
        </div>
        
        {/* Title placeholder */}
        <div className="mb-8">
          <div className="h-10 w-48 bg-gray-700 rounded animate-pulse"></div>
        </div>
        
        {/* Loading spinner in center */}
        <div className="flex justify-center items-center py-20">
          <LoadingSpinner size="lg" text="Loading blog posts..." />
        </div>
        
        {/* Article placeholders */}
        <div className="grid gap-8 mt-12">
          {[1, 2, 3].map((i) => (
            <article key={i} className="border-b border-gray-700 pb-8 animate-pulse">
              <div className="h-8 w-3/4 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-32 bg-gray-700 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-700 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
              </div>
              <div className="h-4 w-24 bg-gray-700 rounded mt-4"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
