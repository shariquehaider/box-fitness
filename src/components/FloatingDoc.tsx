import { Button } from "./ui/button";
import { GiMeal } from "react-icons/gi";
import { TbBarbell } from "react-icons/tb";
import { IoMdStopwatch } from "react-icons/io";

function FloatingDoc() {
  return (
    <>
        <div className="flex justify-between bg-white p-2 w-2/5 relative inset-x-1/4 bottom-4">
            <Button><GiMeal/><br />MEAL</Button>
            <Button><TbBarbell/><br />WEIGHT LIFTING</Button>
            <Button><IoMdStopwatch/><br />PERSONAL TRAINER</Button>
        </div>
    </>
  )
}

export default FloatingDoc