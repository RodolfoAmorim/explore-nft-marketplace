import { CreatorsData } from '@/app/data/creatorsData'
import { NftModel } from '@/app/models/nftModel'
import { MoreHorizontal, Star } from 'lucide-react'

interface CardProps {
  info: NftModel
}

export function Card({ info }: CardProps) {
  const creator = CreatorsData.find(
    (creator) => creator.id === Number(info.creatorId),
  )

  console.log(creator)

  return (
    <div className="relative flex w-full flex-col items-center justify-start gap-5 rounded-lg bg-slate-700 p-5 before:absolute before:-inset-0.5 before:-z-10 before:rounded-lg before:bg-line-blue">
      <header className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-1 items-center justify-start gap-2">
          <img
            src={`./images/users/${creator?.photo}`}
            alt=""
            className="aspect-square w-10 rounded-full xl:w-12"
          />

          <h5 className="flex flex-col items-start justify-start text-sm font-medium leading-normal tracking-wide xl:text-base">
            {creator?.name}
            <small className="text-xs leading-snug opacity-70">
              {creator?.username}
            </small>
          </h5>
        </div>

        <button className="flex h-5 w-5 items-center justify-center">
          <MoreHorizontal className="w-5" />
        </button>
      </header>

      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={`./images/arts/${info.image}`}
          alt=""
          className="h-48 w-full object-cover"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-start gap-6">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-col items-start justify-start">
            <strong className="text-sm font-medium leading-normal tracking-wide xl:text-base">
              {info.name}
            </strong>

            <div className="flex items-center justify-start gap-1">
              {Array.from({ length: info.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3 fill-yellow-500 text-yellow-500 xl:w-4"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end justify-end gap-1 text-right">
            <small className="text-xs font-medium leading-snug tracking-wide opacity-70 xl:text-sm">
              Auction Ending In
            </small>

            <p className="text-sm font-medium leading-normal tracking-wide xl:text-base">
              07h: 25m: 46s
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-1 flex-col items-start justify-start gap-1">
            <small className="text-xs font-medium leading-snug tracking-wide opacity-70 xl:text-sm">
              Current Bit
            </small>

            <p className="text-sm font-medium leading-normal tracking-wide xl:text-base">
              {info.price.toFixed(1)} BTC
            </p>
          </div>

          <button className="flex h-8 items-center justify-center gap-4 rounded bg-gradient px-4 text-xs font-semibold leading-normal tracking-wide xl:text-sm">
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  )
}
