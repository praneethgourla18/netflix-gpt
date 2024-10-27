import { useSelector } from "react-redux";

const GptMovieShimmer = () => {
  const shimmer = useSelector(store => store.gpt.searchClicked);
  if(shimmer){
  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="text-2xl font-semibold text-white py-4">Loading Suggestions...</h1>
      <div className="flex overflow-x-auto hide-scrollbar w-full px-4">
        <div className="flex justify-center space-x-4 mx-auto" style={{ maxWidth: '1200px' }}>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="min-w-[150px] h-[200px] md:min-w-[180px] md:h-[250px] bg-gray-700 rounded-md animate-pulse hover:scale-[1.05] hover:shadow-lg transform transition-transform duration-300 ease-in-out"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
};

export default GptMovieShimmer;
