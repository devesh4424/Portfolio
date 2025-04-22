import  AnimeImageCard  from "../Components/Cards/AnimeImageCard";
import { AnimeData } from "../Utils/AnimeData";
// import { LatestFilm } from "@/components/misc/(anime)/latest-film";
import Navbar from "../Components/NavBar";



const AnimePage = () => {
  return (
    <div className="bg-black w-screen">
    <Navbar/>
    <div className="bg-black flex flex-col   ">
      <section className="max-w-3xl px-4 pb-16 mx-auto  lg:mt-10">
      <div className="">
        <h1 className="text-4xl font-bold mb-4 mt-2 text-white ">Anime</h1>
        <p className="pb-5 text-zinc-50">
          I've been a fan of anime since I was a kid, and it all started with Death Note, which is widely known and loved. A friend recommended it to me, and I've been hooked ever since. Over the years, I've delved into various genres, but I always find myself drawn to seinen, shounen, and slice of life series.
        </p>
        
        <p className="pt-2 text-zinc-50">Below are some of my all-time favorite anime.</p>
      </div>


      <div className="grid md:grid-cols-2 gap-6 mt-5">
        {AnimeData.map((anime) => (
          <AnimeImageCard
            key={anime.href}
            title={anime.title}
            altTitle={anime.altTitle}
            href={anime.href}
            imgName={anime.imgName}
            starred={anime.starred}
          />
        ))}
      </div>
    </section>
    </div>
    </div>
    
    
  );
};

export default AnimePage;
