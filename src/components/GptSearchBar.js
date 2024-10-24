const GptSearchBar = () => {

  return(
    <div className="absolute py-40 w-full flex justify-center">
      <div className="flex gap-2 w-[50%]">
        <input 
          type="text" 
          placeholder="What do you want to watch today ?" 
          className="w-full py-4 px-8 bg-black text-white rounded-full focus:outline-[#E50914]"
        />
        <button className="p-2 bg-[#E50914] text-black font-semibold rounded-full">
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/FFFFFF/search--v1.png" alt="search--v1"/>
        </button>
      </div>
    </div>
  );
}
export default GptSearchBar;
