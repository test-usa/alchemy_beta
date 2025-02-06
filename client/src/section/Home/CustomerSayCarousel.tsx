import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slide1= <CarouselItem className="w-[1024.13px] h-[392px] bg-gray-100">
    <h1>1st slide</h1>


</CarouselItem>

const CustomerSayCarousel = () => {
    return (
      <div className="w-[2690.13px] h-[698px] overflow-hidden flex justify-center">

     <Carousel className=" ">
      <CarouselContent className="-ml-1">
   {
    slide1
   }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>


      </div>
    )
  }
  
  export default CustomerSayCarousel