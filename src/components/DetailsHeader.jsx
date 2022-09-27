import { Link } from "react-router-dom";
const DetailsHeader = ({ artistId, artistData, songData}) => {
  const artist = artistData?.artists[artistId]?.attributes
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full relative top-[50px] bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
      </div>
      
      <div className="absolute inset-0 flex items-center justify-around">
        <img alt="art" src={artistId ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500'):songData?.images?.coverart} className="w-48 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"/>
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist?.name : songData?.title}</p>
        </div>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
          <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}
        <p className="text-gray-400  top-1 relative text-base">{artistId ? artist?.genreNames[0]: songData?.genres?.primary}</p>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
    
  )
};

export default DetailsHeader;
