import { Button } from "./ui/button";
import { GiBoxingGlove } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import { useEffect } from "react";


function Navbar() {
    const { userLogin } = useSelector((state: any) => state);

    useEffect(() => {
        if (userLogin.user) {
            localStorage.setItem('Token', userLogin.user.token);
            localStorage.setItem('UserID', userLogin.user.userId)
        }
    }, [userLogin]);

    return (
        <>
            <div className='flex justify-between w-full px-20 py-10 bg-transparent z-10 absolute'>
                <div>
                    <Button className="text-white text-2xl flex gap-2" asChild><Link to='/'><GiBoxingGlove />BOXFITNESS</Link></Button>
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
                        {!userLogin.user && <>
                            <li><Button variant="link" className="bg-red-500 text-white" asChild>
                            <Link to='/login'>SIGN IN</Link></Button></li>
                        </>}
                        {userLogin.user && <>
                            <li><ProfileDropdown userLogin={userLogin.user}/></li>
                        </>}
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar