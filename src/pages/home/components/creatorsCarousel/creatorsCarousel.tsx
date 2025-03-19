import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/ui/components/ui/carousel'
import { Creator } from '../creator/creator'
import { CreatorsData } from '@/app/data/creatorsData'

export function CreatorsCarousel() {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {CreatorsData.map((creator) => (
          <CarouselItem key={creator.id} className="md:basis-1/2 lg:basis-1/3">
            <Creator info={creator} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex w-full items-center justify-center gap-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
