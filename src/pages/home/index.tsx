import { Header } from '@/components/header'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/card/card'
import { CreatorsCarousel } from './components/creatorsCarousel/creatorsCarousel'
import { Footer } from '@/components/footer'

import HeroCard from '@/assets/images/home/heroCards.svg'
import CardHighlight from '@/assets/images/home/cardHiglight.svg'
import MeetCards from '@/assets/images/home/meetCards.svg'
import LogoWyre from '@/assets/images/home/brands/wyre.png'
import LogoOkx from '@/assets/images/home/brands/okx.png'
import LogoEnjin from '@/assets/images/home/brands/enjin.png'
import LogoZengo from '@/assets/images/home/brands/zengo.png'
import LogoAlpha from '@/assets/images/home/brands/alpha.png'
import LogoMath from '@/assets/images/home/brands/math.png'

export function Home() {
  return (
    <div className="min-h-svh w-full text-gray-100">
      <Header />

      <section className="relative flex w-full flex-col items-center justify-start gap-16 px-6 pt-12">
        <div className="flex w-full flex-col items-start justify-start gap-8">
          <h4 className="font-base relative inline-block px-2 py-3 uppercase leading-normal tracking-wide after:absolute after:inset-0 after:-bottom-[3px] after:top-auto after:h-[3px] after:bg-gradient">
            the nft market
          </h4>

          <h1 className="text-[2.5rem] font-black capitalize leading-snug tracking-tight text-slate-50">
            Unlock Your Digital Destiny: Join the NFT Revolution!
          </h1>

          <p className="text-base font-normal leading-relaxed tracking-wide text-slate-50 opacity-80">
            Embark on a journey where creativity knows no bounds and imagination
            reigns supreme. Welcome to Explore, where digital dreams become
            reality, and every pixel tells a story.
          </p>

          <button className="flex h-12 items-center justify-center gap-4 rounded bg-gradient px-4 py-3 text-base font-semibold leading-relaxed tracking-wide shadow-button">
            Explore NFTs Now
            <ArrowRight />
          </button>
        </div>

        <div className="flex w-full items-center justify-center after:absolute after:bottom-0 after:right-0 after:-z-10 after:h-[28rem] after:w-56 after:bg-ellipse after:bg-[length:28.6rem_28.6rem] after:bg-left-top after:bg-no-repeat">
          <img src={HeroCard} alt="" />
        </div>
      </section>

      <aside className="my-20 grid w-full grid-cols-2 gap-4 px-6 opacity-80">
        <img src={LogoAlpha} alt="" />
        <img src={LogoEnjin} alt="" />
        <img src={LogoMath} alt="" />
        <img src={LogoOkx} alt="" />
        <img src={LogoWyre} alt="" />
        <img src={LogoZengo} alt="" />
      </aside>

      <section className="flex w-full flex-col items-center justify-start gap-12 px-6">
        <div className="w-full bg-ellipse bg-cover bg-center bg-no-repeat">
          <img src={CardHighlight} alt="" />
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-12">
          <h3 className="text-4xl font-black leading-snug tracking-tight">
            Are you ready to unlock your digital destiny?
          </h3>

          <span className="block h-1 w-36 bg-gradient" />

          <div className="flex flex-col items-start justify-start gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className="relative h-14 w-14 rounded-full p-0.5 after:absolute after:inset-0 after:-z-10 after:rounded-full after:bg-gradient">
                <img
                  src="./images/users/user.png"
                  alt=""
                  className="rounded-full"
                />
              </div>

              <h5 className="flex flex-1 flex-col items-start justify-start text-sm font-semibold leading-relaxed tracking-wide">
                <small className="text-xs font-normal lowercase leading-snug tracking-wider opacity-80">
                  Creator
                </small>
                Atharvan Maruti
              </h5>
            </div>

            <p className="text-base font-normal leading-relaxed tracking-wide opacity-80">
              The NFT revolution is here, and you&apos;re invited to be a part
              of it. Whether you&apos;re an artist, collector, or simply curious
              about the future of digital ownership, now is the time to seize
              your place in history.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-start gap-4">
            <button className="flex h-12 w-full items-center justify-center gap-4 rounded bg-gradient px-4 py-3 text-base font-semibold leading-relaxed tracking-wide">
              Place a Bid
            </button>

            <button className="relative flex w-full items-center justify-center bg-slate-900 px-4 py-3 text-base font-semibold leading-relaxed tracking-wider after:absolute after:-inset-px after:-z-10 after:rounded after:bg-gradient">
              View Art
            </button>
          </div>
        </div>
      </section>

      <section className="mt-24 px-6">
        <h3 className="text-center text-4xl font-black leading-snug tracking-tight">
          Live Aucition
        </h3>

        <p className="mt-4 text-center text-base font-normal leading-relaxed tracking-wide opacity-80">
          Own digital art like never before, connect with creators, and explore
          a universe of possibilities
        </p>

        <div className="mt-12 grid w-full grid-cols-1 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>

      <section className="mt-24 px-6">
        <h3 className="text-center text-4xl font-black leading-snug tracking-tight">
          Popular Sellers
        </h3>

        <p className="mt-4 text-center text-base font-normal leading-relaxed tracking-wide opacity-80">
          Meet the visionaries behind the pixels, the creators shaping the
          digital frontier
        </p>

        <div className="mt-12 w-full">
          <CreatorsCarousel />
        </div>
      </section>

      <section className="mt-24 px-6">
        <div className="flex flex-col items-start justify-start gap-12 ">
          <h3 className="text-left text-4xl font-black leading-snug tracking-tight">
            Meet the Visionaries: NFT Creators Spotlight
          </h3>

          <span className="h-1 w-32 rounded-full bg-gradient" />

          <p className="mt-4 text-left text-base font-normal leading-relaxed tracking-wide opacity-80">
            Dive into the world of our talented NFT creators, where innovation
            and artistry collide. Each artist brings a unique perspective,
            transforming digital canvases into extraordinary works of art.
            Discover the stories behind their creations and the passion that
            drives them to push the boundaries of what&apos;s possible.
            <br />
            <br />
            Unveil the magic of digital artistry today.
          </p>

          <button className="flex h-12 w-60 items-center justify-center gap-4 rounded bg-gradient px-4 py-3 text-base font-semibold leading-relaxed tracking-wide">
            Explore Our Creators
          </button>
        </div>

        <div className="relative mt-20 w-full before:absolute before:inset-0 before:-z-10 before:bg-ellipse before:bg-contain before:bg-center">
          <img src={MeetCards} alt="" />
        </div>
      </section>

      <section className="mt-20 w-full px-6">
        <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl bg-line-blue px-4 py-20">
          <h3 className="text-center text-3xl font-black leading-snug tracking-tight">
            Secure Nft Trading Platform
          </h3>

          <p className="text-center text-base font-normal leading-relaxed tracking-wide opacity-80">
            An NFT is a unit of a data stored on a digital ledger, called a
            blockchain
          </p>

          <button className="flex h-12 items-center justify-center gap-4 rounded bg-gray-100 px-4 py-3 text-base font-semibold leading-relaxed tracking-wide text-blue-500">
            Explore NFTs Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
