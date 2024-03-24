import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validate } from "@/lib/validator";
import { useDispatch } from "react-redux";
import { userRegisterDispatchAction } from "@/dispatcher/user";


function Signup() {
    const dispatch: any = useDispatch();
    const [ user, setUser ] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const isValidEmail = validate(user.email, user.confirmEmail);
        const isValidPassword = validate(user.password, user.confirmPassword);
        if (isValidEmail && isValidPassword) {
            dispatch(userRegisterDispatchAction(user));
        }
    }
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
                        <Input placeholder="Name" type="text" name="name" 
                        className="text-black text-xl py-5 border-0 border-b-2" 
                        value={user.name} required
                        onChange={handleChange}/>
                        <Input placeholder="Email" type="email" name="email" 
                        className="text-black text-xl py-5 border-0 border-b-2" 
                        value={user.email} required
                        onChange={handleChange} />
                        <Input placeholder="Confirm Email" type="email" name="confirmEmail" 
                        className="text-black text-xl py-5 border-0 border-b-2"
                        value={user.confirmEmail} required
                        onChange={handleChange} />
                        <Input placeholder="Password" type="password" name="password" 
                        className="text-black text-xl py-5 border-0 border-b-2" 
                        value={user.password} required
                        onChange={handleChange}/>
                        <Input placeholder="Confirm Password" type="password" name="confirmPassword" 
                        className="text-black text-xl py-5 border-0 border-b-2" 
                        value={user.confirmPassword} required
                        onChange={handleChange}/>
                        <div className="flex justify-center p-4">
                            <Button variant="ghost" size="lg"
                                className="bg-black text-white space-x-2 hover:!bg-black hover:!text-white tracking-wide"
                                onClick={handleSubmit}>REGISTER</Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center p-2 pb-6">
                        <Link to="/login" className="text-black hover:text-black">Already Have an account? Login Here</Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Signup