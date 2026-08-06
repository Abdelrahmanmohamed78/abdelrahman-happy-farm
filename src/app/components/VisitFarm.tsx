import Image from "next/image";
import Link from "next/link";

function VisitFarmSection() {
  return (
    <section className="main-container visit-sec py-80 bg-second-color flex-col md:flex-row flex items-center">
      <div className="image-holder basis-[50%]">
        <Image
          className="mx-auto"
          src={"/farm-visit.jpg"}
          alt="visit image"
          width={550}
          height={640}
        ></Image>
      </div>
      <div className="text-holder basis-[50%] mt-10 md:mt-0">
        <div className="child-holder max-w-141.25 px-5">
          <h2 className="text-3xl lg:text-4xl font-semibold">Visit Our Dairy Farm</h2>
          <p className="my-10 leading-[1.3] text-hover-color text-[17px] font-semibold">
            The process of storing and ripening the cheese in equipped ripening
            chambers with constant humidity and temperature takes several
            months, and we show curious tourists this kingdom of cheese during a
            tour of the cheese factory.
          </p>
          <p className="my-10 leading-[1.3] text-hover-color text-[17px] font-semibold">
            The process of storing and ripening the cheese in equipped ripening
            chambers with constant humidity and temperature takes several
            months, and we show curious tourists this kingdom of cheese during a
            tour of the cheese factory.
          </p>
          <Link className="py-4 px-10 rounded-[50px] border-2 border-main-color text-main-color duration-[0.4s] font-bold text-sm hover:text-second-color hover:bg-main-color" href={"/about-us"}>About Farm</Link>
        </div>
      </div>
    </section>
  );
}

export default VisitFarmSection;
