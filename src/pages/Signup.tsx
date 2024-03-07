import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
            <div className="bg-black p-20"></div>
            <div className="custom-img flex flex-col p-20 justify-between items-center">
                <Card className="custom-bg w-1/3 ">
                    <CardHeader>
                        <CardTitle className="text-black text-2xl"><center>SIGN UP</center></CardTitle>
                    </CardHeader>
                    <br />
                    <CardContent className="flex flex-col gap-6">
                        <Input placeholder="Name" type="text" className="text-black text-xl py-5 border-0 border-b-2"/>
                        <Input placeholder="Email" type="email" className="text-black text-xl py-5 border-0 border-b-2"/>
                        <Input placeholder="Confirm Email" type="email" className="text-black text-xl py-5 border-0 border-b-2"/>
                        <Input placeholder="Password" type="password" className="text-black text-xl py-5 border-0 border-b-2"/>
                        <Input placeholder="Confirm Password" type="password" className="text-black text-xl py-5 border-0 border-b-2"/>
                        <div className="flex justify-center p-4">
                            <Button variant="ghost" size="lg" 
                            className="bg-black text-white space-x-2 hover:!bg-black hover:!text-white tracking-wide">REGISTER</Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center p-2 pb-6">
                        <Link to="signup" className="text-black hover:text-black">Already Have an account? Login Here</Link>
                    </CardFooter>
                </Card>
            </div>
        </>
  )
}

export default Signup