import { Logo } from "@/assets";
import { Text } from "@radix-ui/themes";

export const Header = () => {
  return (
    <header className="flex gap-2 items-center h-[3rem] px-[5%] border-b-[#DADCE0] border-b">
      <img src={Logo} alt="" />
      <Text as="span" className="text-[1.2rem] font-semibold text-[#1967D2]">
        Flights
      </Text>
    </header>
  );
};
