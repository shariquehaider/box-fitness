import FloatingDoc from "@/components/FloatingDoc";
import BOYFIGHT from "../assets/Boyfight.jpg";
import CROSSFIT from "../assets/mainpage.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>  
       <div className="flex bg-black justify-start p-20 ">
        <div className="shrink z-10 p-20">
          <h2 className="text-9xl text-white">FIGHT LIKE</h2>
          <h2 className="text-9xl text-white">A <span className="text-red-500">CHAMPION</span></h2>
        </div>
        <div> 
          <img src={BOYFIGHT} alt="Background IMG" className="contrast-150 absolute top-0 right-0 w-3/5 h-3/4"/>
        </div>
       </div>
       <div className="flex bg-slate-100 p-20 gap-10">
        <div className="w-1/2 h-9/12">
          <img src={CROSSFIT} alt="CROSSFIT"/>
        </div>
        <div className=" flex flex-col gap-6 w-1/2">
          <div className="flex flex-col border-red-500 border-s-8 px-3 py-2 gap-2">
            <h2 className="text-5xl tracking-wider font-bold">WHY TRAIN</h2>
            <h2 className="text-5xl tracking-wider font-bold">WITH US?</h2>
          </div>
          <div className="flex flex-col gap-8 mx-4 w-3/4">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, illo reiciendis. Explicabo quae nostrum error molestiae ipsam voluptas, impedit provident, dignissimos quia inventore et quibusdam, sint in ex saepe repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, tempore sint maiores necessitatibus doloribus quam culpa sed eligendi veniam commodi et ipsa sit perferendis distinctio voluptatibus, aliquid harum nobis ad.</p>
          </div>
          <div className="flex gap-2 mx-4">
            <Button variant="link" className="bg-red-500 text-white" asChild>
              <Link to='/plans'>PLANS</Link></Button>
            <Button variant="link" className="bg-red-500 text-white" asChild>
              <Link to="/meals">MEALS</Link></Button>
            <Button variant="link" className="bg-red-500 text-white">LOCATIONS</Button>
            <Button variant="link" className="bg-red-500 text-white" asChild><Link to='/signup'>SIGNUP</Link></Button>
          </div>
        </div>
       </div>
    </>
  )
}

export default Home