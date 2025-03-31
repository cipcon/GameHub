import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/1622826_aim_arrow_bullseye_purpose_strategy_icon.png";
import meh from "../assets/emoji-38-512.webp";
import thumbsUp from "../assets/Gestures-08-512.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "35px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "35px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
