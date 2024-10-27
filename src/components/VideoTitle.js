const VideoTitle = ({title,overview}) =>{
   
  return ( 
    <div className="absolute pt-[25%] md:pt-48 px-4 md:px-12 text-white bg-gradient-to-r from-black w-screen aspect-video">
      
      <h1 className="md:text-4xl my-4 font-bold text-xl">{title}</h1>
      <h1 className="hidden md:inline-block my-2 w-1/3 font-small">{overview}</h1>
      <div>
       <button className="py-1 px-4 bg-white font-semibold text-black rounded-lg md:py-2 md:px-8 mr-2 md:my-2"> ▷ Play</button>
       <button className="py-1 px-4 bg-white font-semibold text-black rounded-lg md:py-2 md:px-8 md:my-2" > ⓘ More info</button>
      </div>
      </div> 
  )
}
export default VideoTitle;