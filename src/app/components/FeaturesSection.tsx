import Image from "next/image";

function FeaturesSection() {
  return (
    <section className="main-container">
      <div className=" p-10 rounded-lg -mt-45 mb-20 bg-second-bg text-second-color gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className="box">
          <Image
            src={"/farm-infobox-1-1.svg"}
            height={60}
            width={60}
            alt="info image"
          ></Image>
          <h3 className="font-semibold text-2xl my-3">Tour of the Farm</h3>
          <p className="leading-normal font-semibold text-[17px]">
            A wonderful serenity has taken animal principes of spring which
            enjoy whole.
          </p>
        </div>
        <div className="box">
          <Image
            src={"/farm-infobox-2-1.svg"}
            height={60}
            width={60}
            alt="info image"
          ></Image>
          <h3 className="font-semibold text-2xl my-3">Technological Process</h3>
          <p className="leading-normal font-semibold text-[17px]">
            The process of storing and ripening the cheese in equipped ripening
            chambers.
          </p>
        </div>
        <div className="box">
          <Image
            src={"/farm-infobox-3-1.svg"}
            height={60}
            width={60}
            alt="info image"
          ></Image>
          <h3 className="font-semibold text-2xl my-3">
            Our of the Cheese Factory
          </h3>
          <p className="leading-normal font-semibold text-[17px]">
            Temperature takes several months, and we show curious tourists this
            kingdom.
          </p>
        </div>
        <div className="box">
          <Image
            src={"/farm-infobox-4-1.svg"}
            height={60}
            width={60}
            alt="info image"
          ></Image>
          <h3 className="font-semibold text-2xl my-3">
            Tasting of Dairy Products
          </h3>
          <p className="leading-normal font-semibold text-[17px]">
            Where you can familiarize yourself with the interesting process of
            animal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
