import Searchbar from "@/components/Searchbar";
import Sidebar from "@/components/Sidebar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Meal from "@/components/Meal";
import { Button } from "@/components/ui/button";

function Meals() {
  return (
    <>
    <div className="flex bg-black justify-start p-20 bg-meals">
        <div className="flex flex-col gap-8 w-3/4 p-20 grow z-10">
            <div>
                <h2 className="text-white text-7xl">EAT GOOD STAY FIT</h2>
            </div>
            <div>
                <p className="text-white text-xl w-1/2">
                Fuel your gains with our nutritious meals, tailored for gym enthusiasts. Eat good, stay fit, and conquer your fitness goals. 
                Our carefully crafted dishes provide the perfect balance of protein, carbs, and essential nutrients. 
                Elevate your workout routine with our delicious and wholesome options. Nourish your body, fuel your passion, 
                and thrive with every bite.
                </p>
            </div>
        </div>
    </div>
    <div className="flex justify-center w-fit">
        <Sidebar/>
        <div className="flex flex-col p-10 bg-white justify-center ">
            <Searchbar />
            <div className="p-6">
            <Carousel opts={{
                loop: true
            }}>
                <CarouselContent className="flex flex-row justify-center">
                    <CarouselItem className="basis-1/3"> <Meal/> </CarouselItem>
                    <CarouselItem className="basis-1/3"> <Meal/> </CarouselItem>
                    <CarouselItem className="basis-1/3"> <Meal/> </CarouselItem>
                    <CarouselItem className="basis-1/3"> <Meal/> </CarouselItem>
                    <CarouselItem className="basis-1/3"> <Meal/> </CarouselItem>
                    <CarouselItem className="basis-1/3"> <Meal/> </CarouselItem>
                </CarouselContent>
                <CarouselNext/>
                <CarouselPrevious />
            </Carousel>
            </div>
        </div>
    </div>
    <div className="flex flex-col gap-6 w-full bg-[#201C1C] p-20 justify-center items-center">
        <h2 className="text-white text-5xl">NEW MEALS PLANS TO YOUR INBOX</h2>
        <Button className="bg-white text-2xl p-6 rounded-3xl hover:bg-white">SUBSCRIBE</Button>
    </div>
    </>
  )
}

export default Meals