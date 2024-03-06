import { Button } from "./ui/button";
import { GiBoxingGlove } from "react-icons/gi";

function Navbar() {
  return (
    <>
        <div className='flex justify-between w-full px-20 py-10 bg-transparent z-10 absolute'>
            <div>
                <Button className="text-white text-2xl flex gap-2"><GiBoxingGlove/>BOXFITNESS</Button>
            </div>
            <div>
                <ul className="flex flex-row justify-between gap-5 items-center">
                    <li><Button className="text-white text-base">HOME</Button></li>
                    <li><Button className="text-white text-base">LOCATION</Button></li>
                    <li><Button className="text-white text-base">PLANS</Button></li>
                    <li><Button className="text-white text-base">CONTACT</Button></li>
                    <li><Button variant="link" className="bg-red-500 text-white">SIGN UP</Button></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar