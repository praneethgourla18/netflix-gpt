const GptSearchBar = () => {
  return(
    <div className="">
      <form>
        <input type="text" placeholder="Search" className="w-full p-4 bg-black text-white"/>
        <button className="p-2 bg-white text-black font-semibold rounded-lg">Search</button>
      </form>
    </div>
  );
}
export default GptSearchBar;