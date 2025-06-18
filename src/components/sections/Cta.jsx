import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import BgCta from "../../assets/imgs/paralaxe/bgParalaxe3.jpg";

export default function Cta({ colorMode = "default" }) {
  const navigate = useNavigate();

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "", // removido 'squares'
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea
      className={`${bgClass}`}
      style={{
        backgroundImage: `url(${BgCta})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <SectionWrapper>
        <SectionHeader
          colorMode="dark"
          className={`text-center ${textClass}`}
          miniTitle={content.texts.cta.miniTag}
          sectionHeaderTitle={content.texts.cta.title}
          sectionHeaderSubtitle={content.texts.cta.subtitle}
          titleColorSet={textClass}
          subtitleColorSet={textClass}
        />
        <Button
          aria-label={content.texts.hero.ctaButtonAriaLabel}
          label={content.texts.cta.ctaButtonText}
          animation
          icon={<FaWhatsapp color="white" size={24} />}
          labelColor="text-white"
          className="bg-darker"
        />
      </SectionWrapper>
    </SectionArea>
  );
}
