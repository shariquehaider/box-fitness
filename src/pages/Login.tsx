import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="bg-black p-20"></div>
            <div className="custom-img flex flex-col p-20 justify-between items-center">
                <Card className="custom-bg w-1/3 ">
                    <CardHeader>
                        <CardTitle className="text-black text-2xl"><center>SIGN IN</center></CardTitle>
                    </CardHeader>
                    <br />
                    <CardContent className="flex flex-col gap-6">
                        <Input placeholder="Email" type="email" className="text-black text-xl py-5 border-0 border-b-2"/>
                        <Input placeholder="Password" type="password" className="text-black text-xl py-5 border-0 border-b-2"/>
                        <div className="flex gap-4">
                            <input type="checkbox" className="p-3 border-black" id="remember"/>
                            <Label htmlFor="remember" className="text-black">Remember Me</Label>
                        </div>
                        <div className="flex justify-center p-4">
                            <Button variant="ghost" size="lg" 
                            className="bg-black text-white space-x-2 hover:!bg-black hover:!text-white tracking-wide">LOGIN</Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center p-2 pb-6">
                        <Link to="signup" className="text-black hover:text-black">Don't Have an account? Register Here</Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Login