import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import { IconType } from "react-icons/lib";

const PlatformIconList = ({ platforms }: { platforms: string[] }) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        Xbox: FaXbox,
        playStation: FaPlaystation,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe, 
    }
  return (
    <HStack gapX={2} marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform]} key={platform} color={"gray.500"} boxSize={6}/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
