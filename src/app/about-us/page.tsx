import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="pt-27.5">
      <PageHeader>About Us</PageHeader>
      <div className="main-container flex flex-col lg:flex-row gap-10">
        <div className="details-holder basis-[45%]">
          <Image
            className="w-full"
            src={"/farm-about-us-mini-1.jpg"}
            width={200}
            height={200}
            alt="farm image"
          ></Image>
          <div className="details-text-holder w-[85%]">
            <h3 className="text-2xl sm:text-3xl font-semibold text-main-color leading-[1.3] my-7.5">
              We Have a Many Years of Experience in Dairy Farming
            </h3>
            <p className="mb-5 text-hover-color font-semibold leading-normal">
              Our team includes about 15 individuals each with their own talents
              and roles. Our cheesemakers are a small but mighty team, with lots
              of <span className="text-second-bg">experience working</span> with
              our <span className="text-second-bg">products</span> and the
              intricacies of our dairy processing.
            </p>
            <p className="mb-5 text-hover-color font-semibold leading-normal">
              Our commercial kitchen boasts several cooks and bakers with an
              endless capacity to create deliciousness using many of our dairy
              products. Our retail team has a diverse skill-set that expands far
              beyond their friendly nature and attentiveness to customers.
            </p>
          </div>
        </div>
        <div className="video-holder translate-y-17.5">
          <video
            autoPlay
            muted
            loop
            className="w-full grow rounded-lg"
            src="/organic-farm-about-us-video.mp4"
          ></video>
        </div>
      </div>
      <div className="main-container bg-second-color pt-40 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-10">
        <div className="image-box overflow-hidden rounded-[10px]">
          <Image
            className="w-full"
            src={"/farm-about-us-gallary-1.jpg"}
            width={200}
            height={200}
            alt="gallery image"
          ></Image>
        </div>
        <div className="image-box overflow-hidden rounded-[10px]">
          <Image
            className="w-full"
            src={"/farm-about-us-gallary-2.jpg"}
            width={200}
            height={200}
            alt="gallery image"
          ></Image>
        </div>
        <div className="image-box overflow-hidden rounded-[10px]">
          <Image
            className="w-full"
            src={"/farm-about-us-gallary-3-430x665.jpg"}
            width={200}
            height={200}
            alt="gallery image"
          ></Image>
        </div>
        <div className="image-box overflow-hidden rounded-[10px]">
          <Image
            className="w-full"
            src={"/farm-about-us-gallary-4-430x523.jpg"}
            width={200}
            height={200}
            alt="gallery image"
          ></Image>
        </div>
        <div className="image-box overflow-hidden rounded-[10px]">
          <Image
            className="w-full"
            src={"/farm-about-us-gallary-5-430x665.jpg"}
            width={200}
            height={200}
            alt="gallery image"
          ></Image>
        </div>
      </div>
      <div className="aboutAnimationText relative w-full pt-10 pb-60 overflow-hidden whitespace-nowrap bg-second-color flex items-center">
        <p className="group text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold w-max text-second-bg pr-5">
          Fresh and Organic Products for Every Day ●
        </p>
        <p className="group text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold w-max text-second-bg pr-5">
          Fresh and Organic Products for Every Day ●
        </p>
      </div>
      <div className="main-container flex flex-col lg:flex-row gap-40 lg:gap-10 py-15">
        <div className="text-holder basis-full lg:basis-[40%] xl:basis-[45%]">
          <Image
            src={"/farm-about-us-mini-2-166x100.jpg"}
            width={150}
            height={150}
            alt="cow image"
          ></Image>
          <h3 className="font-semibold leading-normal text-3xl xl:text-[52px] my-5">
            We Raise Domestic Breeding Cows
          </h3>
          <p className="text-hover-color leading-normal font-semibold">
            Our cows are all pedigree, that means that we breed from them, keep
            the best and record their births and their family lines can be
            traced back probably in some cases 60 years. They all have 2 ear
            tags, and these numbers relate to their passport number, a number
            they keep for life.
          </p>
        </div>
        <div className="images-holder -translate-y-15 grow flex flex-col sm:flex-row gap-5 ">
          <Image
            className="rounded-[10px] w-full h-auto max-w-full"
            src={"/farm-about-us-domestic-cows-1.jpg"}
            width={100}
            height={100}
            alt="cow image 1"
          ></Image>
          <Image
            className="rounded-[10px] translate-y-0 sm:-translate-y-15 w-full h-auto max-w-full"
            src={"/farm-about-us-domestic-cows-2.jpg"}
            width={100}
            height={100}
            alt="cow image 2"
          ></Image>
        </div>
      </div>
      <div className="main-container info flex flex-wrap items-center justify-center flex-col md:flex-row gap-10">
        <div className="box md:flex-1/3 lg:flex-1/4 px-2.5 text-center">
          <Image
            className="mx-auto"
            src={"/farm-about-us-infobox-organic-128x128.png"}
            width={120}
            height={120}
            alt="info image"
          ></Image>
          <h3 className="text-2xl text-main-color font-semibold mb-5">
            Organic
          </h3>
          <p className="leading-normal text-hover-color font-semibold">
            The process of storing and ripening the cheese in equipped ripening
            chambers with constant humidity.
          </p>
        </div>
        <div className="box md:flex-1/3 lg:flex-1/4  px-2.5 text-center">
          <Image
            className="mx-auto"
            src={"/farm-about-us-infobox-handmade-128x128.png"}
            width={120}
            height={120}
            alt="info image"
          ></Image>
          <h3 className="text-2xl text-main-color font-semibold mb-5">
            Handmade
          </h3>
          <p className="leading-normal text-hover-color font-semibold">
            It’s unreal, uncanny, makes you wonder if something is wrong, it
            seems to seek your attention for all.
          </p>
        </div>
        <div className="box md:flex-1/3 lg:flex-1/4  px-2.5 text-center">
          <Image
            className="mx-auto"
            src={"/farm-about-us-infobox-healthy-food-128x128.png"}
            width={120}
            height={120}
            alt="info image"
          ></Image>
          <h3 className="text-2xl text-main-color font-semibold mb-5">
            Healthy Food
          </h3>
          <p className="leading-normal text-hover-color font-semibold">
            A client that’s unhappy for a reason is a problem, a client that’s
            unhappy though he or her can’t quite is worse.
          </p>
        </div>
      </div>
      <div className="visit-parent">
        <div className="main-container">
          <div className="visit-holder w-full lg:w-187.5 mx-auto text-center py-30">
            <h3 className="md:text-4xl lg:text-6xl font-semibold mb-5 text-main-color">
              Visit Our Dairy Farm
            </h3>
            <p className="text-hover-color font-semibold leading-normal">
              You will have the opportunity to visit our farms, where you can
              learn about the interesting process of animal husbandry. And at
              the tasting, you will feel like you are in the Swiss Alps, and you
              will also bring home unique delicacies.
            </p>
            <p className="text-hover-color font-semibold leading-normal my-5">
              Excursions are held daily from 11:00 a.m. to 5:00 p.m.
            </p>
            <Link href={"/shop"} className="text-sm font-bold text-second-color bg-second-bg py-3 px-6 rounded-[50px] w-fit block mx-auto cursor-pointer duration-[0.4s] hover:opacity-[0.9]">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;