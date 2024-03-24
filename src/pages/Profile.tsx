import { Input } from "@/components/ui/input";
import DEFAULT_PROFILE from "../assets/profileDefaultpng.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import { GoCheck } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { userDetailsDispatchAction, userUpdateDispatchAction } from "@/dispatcher/user";
import { useDispatch, useSelector } from "react-redux";
import { UserDetails } from "@/dispatcher/userInterface";


function Profile() {
    const dispatch: any = useDispatch();
    const { userLogin, userDetails } = useSelector((state: any) => state);

    useEffect(() => {
        dispatch(userDetailsDispatchAction());
    }, [userLogin, userDetails]);

    const [ isEditable, setIsEditable ] = useState(true);
    const [ editUser, setEditUser ] = useState<UserDetails>({
        img: userDetails.user.img,
        name: userDetails.user.name,
        email: userDetails.user.email,
        age: userDetails.user.age,
        weight: userDetails.user.weight,
        height: userDetails.user.height
    });


    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setEditUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    const handleClick = (event: any) => {
        event.preventDefault();
        setIsEditable(!isEditable);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(userUpdateDispatchAction(editUser))
    }

  return (
    <>
    <div className="flex flex-col gap-6 bg-black justify-center p-20 items-center">
        <h2 className="text-white text-6xl p-10">BOXFITNESS PROFILE</h2>
        <div className="flex flex-row justify-end items-end w-3/4">
            {!isEditable && <Button onClick={handleClick}><CiEdit size={30} color="white"/></Button>}
            {isEditable && <>
            <Button onClick={handleSubmit}><GoCheck size={30} color="white"/></Button>
            <Button onClick={handleClick}><IoIosCloseCircleOutline size={30} color="white"/></Button>
            </>}
        </div>
        <div className="flex justify-center gap-20 p-10 w-full">
            <div>
                <img src={DEFAULT_PROFILE} alt="Hello" width={200} height={200}/>
            </div>
            <div className="flex">
                <ul className="flex flex-col justify-between gap-5 items-center">
                    <li>
                        <label htmlFor="name" className="text-white text-base">Name</label>
                        <Input className="text-white text-base" 
                        value={editUser.name} id="name" name="name" type="text" readOnly={!isEditable}
                        onChange={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="email" className="text-white text-base">Email</label>
                        <Input className="text-white text-base" 
                        value={editUser.email} id="email" name="email" type="email" readOnly
                        onChange={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="height" className="text-white text-base">Height</label>
                        <Input className="text-white text-base" 
                        value={editUser.height} id="height" name="height" type="number" readOnly={!isEditable}
                        onChange={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="weight" className="text-white text-base">Weight</label>
                        <Input className="text-white text-base" 
                        value={editUser.weight} id="weight" name="weight" type="number" readOnly={!isEditable}
                        onChange={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="age" className="text-white text-base">Age</label>
                        <Input className="text-white text-base" 
                        value={editUser.age} id="age" name="age" type="number" readOnly={!isEditable}
                        onChange={handleChange}/>
                    </li>
                    <li>
                        <Button variant="link" className="bg-red-500 text-white" asChild>
                            <Link to='/password'>Change Password</Link>
                        </Button>
                        <Button variant="link" className="text-white text-base" asChild>
                            <Link to='/plans'>My Plans</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile