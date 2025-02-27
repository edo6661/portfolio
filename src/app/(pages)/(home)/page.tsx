import SnakeGame from "@/components/home/SnakeGame"
import Image from "next/image"

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center flex-1">
      <div className="sm:col-span-1 col-span-2 justify-center flex items-center">
        <Image src="icons/arrow.svg" alt="arrow" width={300} height={300} />

      </div>
      <div className="sm:flex hidden justify-center z-20 ">
        <SnakeGame />
      </div>

    </div>
  )
}

export default HomePage