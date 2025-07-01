import { HeroBoardImg } from "@/assets";
import { Heading } from "@radix-ui/themes";

export const PageTitle = () => {
  return (
    <div className="flex-col flex justify-center items-center relative">
      <img src={HeroBoardImg} alt="" />
      <div className="-mt-[5rem]">
        <Heading as="h1" className="!font-normal !text-4xl">
          Flights
        </Heading>
      </div>
    </div>
  );
};
