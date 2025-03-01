/* eslint-disable react/jsx-no-comment-textnodes */
import LoopText from "@/components/home/LoopText";
import SnakeGame from "@/components/home/SnakeGame"
import StaggerText from "@/components/home/StaggerText";
const HomePage = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center flex-1 relative">
      <div className="css-blurry-gradient-blue sm:block hidden" />
      <div className="css-blurry-gradient-green sm:block hidden" />
      <MainSection />

      <div className="sm:flex hidden justify-center z-20 ">
        <SnakeGame />
      </div>

    </div>
  )
}

const MainSection = () => {
  return (
    <div className="sm:col-span-1 col-span-2 justify-center flex flex-col text-white mx-auto gap-8 px-8">
      <div className="space-y-2">
        <span >
          hi all, i am
        </span>
        <StaggerText>
          ridho
        </StaggerText>
      </div>
      <div className={`flex items-center gap-2 text-gradient-blue sm:text-2xl md:text-3xl lg:text-4xl`}>
        <span> {">"} </span>
        <LoopText text="Frontend Engineer" />
      </div>
      <div className="gap-4 flex flex-col max-w-[200px] md:max-w-full">
        <span className="text-secondary">
          // complete the game to continue
        </span>
        <span className="text-secondary">
          // you can also see it on my Github page
        </span>
        <div className="flex gap-2 flex-wrap">
          <span className="text-gradient-blue">
            const
          </span>
          <span className="text-accent-green">
            githubLink
          </span>
          <span>
            =
          </span>
          <a href="https://github.com/edo6661" target="_blank" rel="noreferrer" className="text-accent-pink break-all">
            &quot;https://github.com/edo6661&quot;
          </a>
        </div>
      </div>

    </div>
  )
}

export default HomePage