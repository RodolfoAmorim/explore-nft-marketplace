import { Header } from '@/ui/components/header'
import { ArrowRight } from 'lucide-react'
import { CreatorsCarousel } from './components/creatorsCarousel/creatorsCarousel'
import { Footer } from '@/ui/components/footer'

import HeroCard from '@/ui/assets/images/home/heroCards.svg'
import CardHighlight from '@/ui/assets/images/home/cardHiglight.svg'
import MeetCards from '@/ui/assets/images/home/meetCards.svg'
import LogoWyre from '@/ui/assets/images/home/brands/wyre.png'
import LogoOkx from '@/ui/assets/images/home/brands/okx.png'
import LogoEnjin from '@/ui/assets/images/home/brands/enjin.png'
import LogoZengo from '@/ui/assets/images/home/brands/zengo.png'
import LogoAlpha from '@/ui/assets/images/home/brands/alpha.png'
import LogoMath from '@/ui/assets/images/home/brands/math.png'
import { CardsList } from '@/ui/components/cardsList'
import { Buttons } from '@/ui/components/buttons/buttons'

export function Home() {
  return (
    <div className="min-h-svh w-full overflow-x-hidden text-gray-100">
      <Header />

      <section className="container relative flex w-full flex-col items-center justify-start gap-16 px-6 pt-12 md:mx-auto lg:flex-row lg:px-8">
        <div className="flex w-full flex-col items-start justify-start gap-8 lg:w-auto lg:flex-1 xl:w-full xl:max-w-[788px] xl:flex-auto">
          <h4 className="font-base relative inline-block px-2 py-3 uppercase leading-normal tracking-wide after:absolute after:inset-0 after:-bottom-[3px] after:top-auto after:h-[3px] after:bg-gradient xl:text-2xl">
            the nft market
          </h4>

          <h1 className="text-[2.5rem] font-black capitalize leading-snug tracking-tight text-slate-50 xl:text-7xl">
            Unlock Your Digital Destiny: Join the NFT Revolution!
          </h1>

          <p className="text-base font-normal leading-relaxed tracking-wide text-slate-50 opacity-80 xl:text-lg">
            Embark on a journey where creativity knows no bounds and imagination
            reigns supreme. Welcome to Explore, where digital dreams become
            reality, and every pixel tells a story.
          </p>

          <Buttons className="xl:mt-6 xl:w-60">
            Explore NFTs Now
            <ArrowRight />
          </Buttons>
        </div>

        <div className="flex w-full items-center justify-center after:absolute after:bottom-0 after:right-0 after:-z-10 after:h-[28rem] after:w-56 after:bg-ellipse after:bg-[length:28.6rem_28.6rem] after:bg-left-top after:bg-no-repeat md:relative md:max-w-96 md:after:-inset-20 md:after:h-auto md:after:w-auto md:after:bg-center lg:w-auto lg:flex-1 xl:max-w-none 2xl:after:h-[844px] 2xl:after:w-[844px] 2xl:after:bg-cover">
          <img src={HeroCard} alt="" />
        </div>
      </section>

      <aside className="container mx-auto my-20 grid w-full grid-cols-2 items-center justify-center justify-items-center gap-4 px-6 opacity-80 lg:grid-cols-3 lg:px-8 xl:my-20 xl:grid-cols-6 2xl:my-40">
        <img src={LogoAlpha} alt="" />
        <img src={LogoEnjin} alt="" />
        <img src={LogoMath} alt="" />
        <img src={LogoOkx} alt="" />
        <img src={LogoWyre} alt="" />
        <img src={LogoZengo} alt="" />
      </aside>

      <section className="container mx-auto flex w-full flex-col items-center justify-start gap-12 px-6 lg:flex-row lg:px-8 xl:max-w-[1384px] 2xl:gap-24">
        <div className="w-full bg-ellipse bg-cover bg-center bg-no-repeat lg:w-auto lg:flex-1">
          <img src={CardHighlight} alt="" className="mx-auto" />
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-12 lg:w-auto lg:flex-1 xl:w-full xl:max-w-[700px] xl:flex-auto">
          <h3 className="text-4xl font-black leading-snug tracking-tight xl:text-5xl">
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

              <h5 className="flex flex-1 flex-col items-start justify-start text-sm font-semibold leading-relaxed tracking-wide xl:text-base">
                <small className="text-xs font-normal lowercase leading-snug tracking-wider opacity-80 xl:text-sm">
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

          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:justify-center xl:justify-start">
            <Buttons className="xl:w-40 xl:flex-none">Place a Bid</Buttons>

            <Buttons variant={'secondary'} className="xl:w-40 xl:flex-none">
              View Art
            </Buttons>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-24 px-6 lg:px-8 2xl:mt-32">
        <h3 className="text-center text-4xl font-black leading-snug tracking-tight xl:text-5xl">
          Live Aucition
        </h3>

        <p className="mt-4 text-center text-base font-normal leading-relaxed tracking-wide opacity-80 xl:mx-auto xl:mt-6 xl:max-w-[498px] xl:text-lg">
          Own digital art like never before, connect with creators, and explore
          a universe of possibilities
        </p>

        <CardsList />
      </section>

      <section className="container mx-auto mt-24 px-6 lg:px-8 2xl:mt-32">
        <h3 className="text-center text-4xl font-black leading-snug tracking-tight xl:text-5xl">
          Popular Sellers
        </h3>

        <p className="mt-4 text-center text-base font-normal leading-relaxed tracking-wide opacity-80 xl:mx-auto xl:mt-6 xl:max-w-[498px] xl:text-lg">
          Meet the visionaries behind the pixels, the creators shaping the
          digital frontier
        </p>

        <div className="mt-12 w-full">
          <CreatorsCarousel />
        </div>
      </section>

      <section className="container mx-auto mt-24 px-6 lg:flex lg:items-center lg:justify-center lg:gap-8 lg:px-8 2xl:mt-32 2xl:justify-between">
        <div className="flex flex-col items-start justify-start gap-12 lg:flex-1 xl:w-full xl:max-w-[653px] xl:flex-none">
          <h3 className="text-left text-4xl font-black leading-snug tracking-tight xl:text-5xl">
            Meet the Visionaries: NFT Creators Spotlight
          </h3>

          <span className="h-1 w-32 rounded-full bg-gradient" />

          <p className="mt-4 text-left text-base font-normal leading-relaxed tracking-wide opacity-80 xl:text-lg">
            Dive into the world of our talented NFT creators, where innovation
            and artistry collide. Each artist brings a unique perspective,
            transforming digital canvases into extraordinary works of art.
            Discover the stories behind their creations and the passion that
            drives them to push the boundaries of what&apos;s possible.
            <br />
            <br />
            Unveil the magic of digital artistry today.
          </p>

          <Buttons size={'lg'} className="w-60">
            Explore Our Creators
          </Buttons>
        </div>

        <div className="relative mt-20 w-full before:absolute before:inset-0 before:-z-10 before:bg-ellipse before:bg-contain before:bg-center before:bg-no-repeat lg:flex-1">
          <img
            src={MeetCards}
            alt=""
            className="md:mx-auto md:max-w-[32rem] xl:max-w-[800px]"
          />
        </div>
      </section>

      <section className="container mx-auto mt-20 w-full px-6 lg:px-8 2xl:mt-32">
        <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl bg-line-blue px-4 py-20 lg:mx-auto lg:max-w-[83.125rem]">
          <h3 className="text-center text-3xl font-black leading-snug tracking-tight xl:text-4xl">
            Secure Nft Trading Platform
          </h3>

          <p className="text-center text-base font-normal leading-relaxed tracking-wide opacity-80 xl:mx-auto xl:max-w-[440px] xl:text-lg">
            An NFT is a unit of a data stored on a digital ledger, called a
            blockchain
          </p>

          <Buttons variant={'white'} size={'lg'} className=" xl:w-[270px]">
            Explore NFTs Now
          </Buttons>
        </div>
      </section>

      <Footer />
    </div>
  )
}
