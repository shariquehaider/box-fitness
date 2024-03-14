import { Button } from "./ui/button";
import { GiBoxingGlove } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='flex justify-between w-full px-20 py-10 bg-transparent z-10 absolute'>
                <div>
                    <Button className="text-white text-2xl flex gap-2"><GiBoxingGlove />BOXFITNESS</Button>
                </div>
                <div>
                    <ul className="flex flex-row justify-between gap-5 items-center">
                        <li><Button className="text-white text-base" asChild>
                            <Link to="/">HOME</Link>
                        </Button></li>
                        <li><Button className="text-white text-base" asChild>
                            <Link to='/location'>LOCATION</Link></Button></li>
                        <li><Button className="text-white text-base" asChild>
                            <Link to='/plans'>PLANS</Link></Button></li>
                        <li><Button className="text-white text-base" asChild>
                            <Link to='/contact'>CONTACT</Link></Button></li>
                        <li><Button variant="link" className="bg-red-500 text-white" asChild>
                            <Link to='/login'>SIGN UP</Link></Button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar