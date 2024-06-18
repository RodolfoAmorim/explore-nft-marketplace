import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Creator } from '../creator/creator'

export function CreatorsCarousel() {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <Creator />
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
