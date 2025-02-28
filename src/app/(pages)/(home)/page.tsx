import LoopText from "@/components/home/LoopText";
import SnakeGame from "@/components/home/SnakeGame"
import StaggerText from "@/components/home/StaggerText";
const HomePage = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center flex-1 relative">
      <div className="css-blurry-gradient-blue sm:block hidden" />
      <div className="css-blurry-gradient-green sm:block hidden" />
      <div className="sm:col-span-1 col-span-2 justify-center flex flex-col text-white mx-auto gap-8">
        <div className="space-y-2">
          <span >
            Hi all, I am
          </span>
          <StaggerText>
            Ridho
          </StaggerText>
        </div>
        <div className={`flex items-center gap-2 text-[#4d5bce] sm:text-2xl md:text-3xl lg:text-4xl`}>
          <span> {">"} </span>
          <LoopText text="Software Engineer" />

        </div>
      </div>
      <div className="sm:flex hidden justify-center z-20 ">
        <SnakeGame />
      </div>

    </div>
  )
}

export default HomePage