import { nftData } from '@/app/data/nftData'
import { Card } from '../card/card'

export function CardsList() {
  return (
    <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {nftData.map((nft) => (
        <Card key={nft.id} info={nft} />
      ))}
    </div>
  )
}
