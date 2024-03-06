import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import PLANONE from "../assets/plans_1.jpg";
import { Button } from "@/components/ui/button";

function Plans() {
    return (
        <>
            <div className="bg-black p-20"></div>
            <div className="bg-slate p-20">
                <center><Carousel
                    opts={{ align: "center", loop: true }}
                    className="w-full">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="w-64">
                                    <CardContent className="flex flex-col items-center justify-center p-2 gap-3">
                                        <div>
                                            <img src={PLANONE} alt="" />
                                        </div>
                                        <div className="flex flex-row gap-2 items-center">
                                            <h2 className="font-semibold">PERSONAL TRAINING</h2>
                                            <Button variant="link" className="bg-red-500 text-white">BUY</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="w-64">
                                    <CardContent className="flex flex-col items-center justify-center p-2 gap-3">
                                        <div>
                                            <img src={PLANONE} alt="" />
                                        </div>
                                        <div className="flex flex-row gap-2 items-center">
                                            <h2 className="font-semibold">PERSONAL TRAINING</h2>
                                            <Button variant="link" className="bg-red-500 text-white">BUY</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="w-64">
                                    <CardContent className="flex flex-col items-center justify-center p-2 gap-3">
                                        <div>
                                            <img src={PLANONE} alt="" />
                                        </div>
                                        <div className="flex flex-row gap-2 items-center">
                                            <h2 className="font-semibold">PERSONAL TRAINING</h2>
                                            <Button variant="link" className="bg-red-500 text-white">BUY</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel></center>
            </div>
        </>
    )
}

export default Plans