const LoadingCategories = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg w-full p-4"
            >
              <div className="bg-[#342651] bg-opacity-30 animate-pulse w-12 h-12 rounded-full"></div>
              <div className="flex flex-col gap-1">
                <div className="bg-[#342651] bg-opacity-30 animate-pulse w-20 h-4 rounded-xl"></div>
                <div className="bg-[#342651] bg-opacity-30 animate-pulse w-28 h-4 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingCategories;
