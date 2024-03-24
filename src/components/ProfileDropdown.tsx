import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function ProfileDropdown({ userLogin }: { userLogin : any}) {
    console.log(userLogin)
  return (
    <>
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white text-base font-medium uppercase">{ userLogin.name }</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black p-10 text-left">
                <DropdownMenuLabel className="text-white text-base text-left">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Button className="text-white text-base" asChild><Link to={`/profile/${userLogin.userId}`}>Profile</Link></Button></DropdownMenuItem>
                <DropdownMenuItem><Button className="text-white text-base text-left" asChild><Link to={`/plans/${userLogin.userId}`}>My Plans</Link></Button></DropdownMenuItem>
                <DropdownMenuItem><Button className="text-white text-base text-left">Logout</Button></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </>
  )
}

export default ProfileDropdown