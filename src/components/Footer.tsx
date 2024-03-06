import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { CgMail } from "react-icons/cg";
import { Button } from "./ui/button";

function Footer() {
  return (
    <>
        <div className="flex flex-col gap-10 bg-black p-20">
            <div className="flex flex-row justify-between">
                <h2 className="text-5xl text-white"><span className="text-red-500">JOIN </span>US SOON</h2>
                <div className="flex flex-row justify-between">
                    <Button><InstagramLogoIcon color="white" height={20} width={20}/></Button>
                    <Button><LinkedInLogoIcon color="white" height={20} width={20}/></Button>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <Button className="text-white text-base flex gap-2"><CgMail/>Spontaniousman@gmail.com</Button>
                <div className="flex flex-row justify-between">
                    <Button className="text-white text-base">Terms & Conditions</Button>
                    <Button className="text-white text-base">Privacy Policy</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer