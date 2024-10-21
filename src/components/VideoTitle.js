const VideoTitle = ({title,overview}) =>{
   
  return ( 
    <div className="absolute pt-48 px-12 text-white bg-gradient-to-r from-black w-screen aspect-video">
      
      <h1 className="text-4xl my-4 font-bold">{title}</h1>
      <h1 className="my-2 w-1/3 font-small">{overview}</h1>
      <div>
       <button className="py-2 px-8 bg-white font-semibold text-black rounded-lg"> ▷ Play</button>
       <button className="py-2 px-8 bg-white font-semibold text-black m-2 rounded-lg" > ⓘ More info</button>
      </div>
      </div> 
  )
}
export default VideoTitle;