import Image from "next/image";


import ContactUs from "./components/contact-us";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full bg-background h-svh text-foreground">
      <div className="text-center py-[67px]">
        <h1 className="text-5xl font-bold">
          Gate in{" "}
          <span className="bg-gradient-to-r from-foreground from-10% via-secondary via-95% to-primary to-5% bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p className="text-[22px] font-medium leading-[26.63px] tracking-[-2%]">
          Contact Nayem&apos;s Team
        </p>
      </div>
      <div className="w-full max-w-[1092px] mx-auto bg-[#ffffff0a] border-2 rounded-[20px] border-[#0a0d170d] h-[576px] relative">
        <div className="-left-10 -top-10 absolute size-[152px] rounded-full blur-[200px] bg-primary"></div>
        <div className="-right-10 -top-10 absolute size-[152px] rounded-full blur-[200px] bg-secondary"></div>
        <div className="-left-10 -bottom-10 absolute size-[152px] rounded-full blur-[200px] bg-secondary"></div>

        <div className="flex justify-between items-center p-5 w-full h-full">
          {/* left side */}
          <div>
            <ContactUs/>
          </div>
          
          {/* RIght side */}
          <div className="w-full max-w-[516px] relative">
            <Image
              alt="contact-form.png"
              src="/contact-form.png"
              width={516}
              height={536}
              className="w-full h-auto rounded-xl"
            ></Image>
            <div className="absolute bottom-10 px-7 space-y-1.5 w-full">
              <p className="opacity-70">
                {" "}
                For any problems or assistance, please contact the Nayem&apos;s
                team. We are always ready to help! 😊
              </p>
              <p className="font-medium opacity-80">Nayem Shanto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
