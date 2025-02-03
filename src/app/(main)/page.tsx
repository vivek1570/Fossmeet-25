'use client'

import Container from "@/components/Container";
import Section from "@/components/Section";
import { lato } from "@/fonts";
import styles from './styles.module.css'
import Marquee from "@/components/Marquee";
import Image from 'next/image'
// import { getWorkshops } from "@/lib/workshops";
// import { getSpeakers } from "@/lib/speakers";
import Dialog from "@/components/Dialog";
import TownScriptWidget from "@/components/TownScriptWidget";
import Link from "next/link";
import Button from "@/components/Button";
// import WorkshopCard, { WorkshopCardProps } from "@/components/Cards/WorkshopCard";
// import SpeakerCard, { SpeakerCardProps } from "@/components/Cards/SpeakerCard";
// import Carousel from "@/components/Carousel";
// import Button from "@/components/Button";

export default function Home() {
  // const workshops = await getWorkshops();
  // const speakers = await getSpeakers();
  const sponsors = [
    {
      name: "nilenso",
      image: "/landing-page/nilenso.svg",
      link: "https://nilenso.com/",
    },
    {
      name: "saeloun",
      image: "/landing-page/saeloun.svg",
      link: "https://www.saeloun.com/",
    },
    {
      name: "foss-united",
      image: "/landing-page/fossunited.svg",
      link: "https://fossunited.org/",
    },
  ];

  return (
    <Container>
      <Section className="flex items-center justify-start h-full lg:h-screen w-screen relative" id="hero">
        <div className="h-full w-full flex flex-col items-start justify-center py-24">
          <div className="flex flex-col gap-8">
            <h1 className={`${lato.className} font-medium text-center lg:text-left text-5xl lg:text-8xl`}> FOSSMeet&apos;25 </h1>
            <div>
              <span className={`text-2xl lg:text-5xl font-normal !leading-[68px]`}>
                Celebrating
                <span className={`text-primary ${styles.outlinedText} !leading-[68px]`}> 20 years </span>
              </span>
              <br />
              <span className="text-2xl lg:text-5xl font-normal !leading-[68px]"> of FOSSMeet </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-14 lg:mt-24">
            <span className="text-base lg:text-2xl font-normal"> March 14th - 16th 2025 </span>
            <div className={`${lato.className} flex flex-col lg:flex-row`}>
              <div className="flex items-center justify-center bg-primary ps-0 px-[20px] lg:px-[36px] py-[7px] gap-0">
                <img src="/landing-page/map-marker.svg" alt="location" height={25} width={25} />
                <span> NIT CALICUT </span>
              </div>
              <TownScriptWidget />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 -right-4 md:-right-16 h-fit w-fit z-[-2]">
          <Image
            src="/landing-page/hero-imagae.png"
            alt="landing-page-image"
            width={1024}
            height={1024}
          />
        </div>
      </Section>
      <Marquee />
      <Section className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-[75dvh] h-full w-full" id="about-us" borderTop>
        <Dialog />
        <div className="w-full lg:w-2/3 ps-0 lg:ps-[64px] pt-[24px] lg:py-[87px] flex flex-col gap-4 items-start justify-between lg:min-h-[75dvh] h-full">
          <div className="flex flex-col gap-4">
            <span className={`${lato.className} font-normal text-2xl lg:text-5xl`}> About </span>
            <span className={`${styles.outlinedText} text-primary text-2xl lg:text-5xl`}> FOSSMeet </span>
          </div>

          <p className="!leading-[24px] lg:!leading-[44px] text-sm lg:text-2xl font-normal w-full lg:w-2/3">
            Since its inception in 2005, FOSSMeet has been a premier platform for promoting Free and Open Source Software, fostering innovation, collaboration, and open standards. Bringing together brilliant minds from India and beyond, it has a rich history of inspiring and empowering the FOSS community through engaging talks, workshops, and discussions, continuing to connect enthusiasts and advocates worldwide.
          </p>

          <div className="!leading-[24px] lg:!leading-[44px] text-sm lg:text-2xl font-normal flex flex-col gap-4">
            <br />

            <span> Check out our past meet </span>
            <Button className="text-base lg:text-2xl" href='/gallery'> Gallery </Button>
          </div>
        </div>
      </Section>

      {/* <Section className="flex flex-col items-center justify-start h-full lg:min-h-screen h-full w-full p-0 py-4 lg:py-14" id="workshops" borderTop>
        <div className="flex justify-between gap-4 w-full items-center">
          <div className="flex flex-col gap-0 lg:gap-4 w-full">
            <span className={`${lato.className} font-normal text-2xl lg:text-5xl`}> Engaging </span>
            <span className={`${styles.outlinedText} text-primary text-2xl lg:text-5xl`}> Workshops </span>
          </div>

          <Button className="text-sm lg:text-xl text-nowrap" disabled> View all Workshops </Button>

        </div>

        <div className="mt-10 lg:mt-0 w-full h-full flex items-center justify-center">
          <Carousel className="w-full h-full" maxPerPage={3}>
            {
              workshops.map((data, index) => (
                <div key={index} className="flex items-center justify-center">
                  <WorkshopCard {...data} />
                </div>
              ))
            }
          </Carousel>

        </div>
      </Section>
      <Section className="flex flex-col-reverse lg:flex-row items-center justify-start h-full lg:min-h-screen h-full w-full" id="speakers" borderTop>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <Carousel className="w-full" maxPerPage={2}>
            {
              speakers.map((data, index) => (
                <div key={index} className="flex items-center justify-center">
                  <SpeakerCard {...data} orientation={index % 2 ? 'left' : 'right'} />
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2 h-full flex lg:ps-14 flex-col items-start justify-center gap-4">
          <span className={`${lato.className} font-normal text-2xl lg:text-5xl`}> Meet our  </span>
          <span className={`${styles.outlinedText} text-primary text-2xl lg:text-5xl`}> Speakers </span>

          <p className="!leading-[24px] lg:!leading-[44px] text-base lg:text-xl font-normal leading-[44px] w-full lg:w-2/3">
            Join us to explore a dynamic lineup of speakers as they share their expertise, ignite ideas, and inspire meaningful change within our community.
          </p>

          <Button disabled className="text-sm lg:text-xl" > View All Speakers </Button>
        </div>
      </Section> */}

      <Section borderTop className="flex flex-col gap-[46px] items-center justify-center my-14 h-full">
        <div className="flex flex-col items-center justify-center ">
          <h3 className={`text-2xl lg:text-5xl font-bold ${lato.className}`}> FOSSMeet&apos;25 </h3>
          <span className={`${styles.outlinedText} text-primary text-2xl lg:text-5xl`}> powered by </span>
        </div>


        <div className="w-2/3 h-full flex items-center justify-center gap-16 flex-wrap">
          {
            sponsors.map((sponsor, index) => (
              <Link key={index} className="w-[250px] h-[150px] flex items-center justify-center cursor-pointer hover:scale-[1.05] active:scale-[0.99] transition-transform duration-300" href={sponsor.link}>
                <Image src={sponsor.image} alt={sponsor.name} className="w-full h-full object-fit-cover" width={250} height={150} />
              </Link>
            ))
          }
        </div>
      </Section>
    </Container>
  );
}
