/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import Intro from "../sections/intro.mdx";

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div className="hero">
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <img
          src="https://image.flaticon.com/icons/svg/141/141009.svg"
          alt=""
          color="icon_orange"
          sx={{
            position: `absolute`,
            width: `50px`,
            top: `20%`,
            left: `10%`,
            "@media screen and (max-width: 450px)": {
              width: "30px",
            },
          }}
        />
        <img
          src="https://image.flaticon.com/icons/svg/140/140994.svg"
          alt=""
          color="icon_orange"
          sx={{
            position: `absolute`,
            width: `100px`,
            top: `70%`,
            left: `60%`,
            "@media screen and (max-width: 450px)": {
              width: "30px",
            },
          }}
        />
        <img
          src="https://image.flaticon.com/icons/svg/141/141015.svg"
          alt=""
          color="icon_orange"
          sx={{
            position: `absolute`,
            width: `100px`,
            top: `15%`,
            left: `60%`,
            "@media screen and (max-width: 450px)": {
              width: "30px",
            },
          }}
        />
      </UpDown>
      <UpDownWide>
        <img
          src="https://image.flaticon.com/icons/svg/141/141009.svg"
          alt=""
          color="icon_orange"
          sx={{
            position: `absolute`,
            width: `30px`,
            top: `10%`,
            left: `80%`,
            "@media screen and (max-width: 450px)": {
              width: "30px",
            },
          }}
        />
        <img
          src="https://image.flaticon.com/icons/svg/140/140993.svg"
          alt=""
          color="icon_orange"
          sx={{
            position: `absolute`,
            width: `50px`,
            top: `50%`,
            left: `90%`,
            "@media screen and (max-width: 450px)": {
              width: "30px",
            },
          }}
        />
        <img
          src="https://image.flaticon.com/icons/svg/141/141015.svg"
          alt=""
          color="icon_orange"
          sx={{
            position: `absolute`,
            width: `48px`,
            top: `65%`,
            left: `30%`,
            "@media screen and (max-width: 450px)": {
              width: "30px",
            },
          }}
        />
        <img
          src="https://image.flaticon.com/icons/svg/141/141008.svg"
          alt=""
          color="icon_orange"
          sx={{
            position: `absolute`,
            width: `48px`,
            top: `65%`,
            left: `30%`,
            "@media screen and (max-width: 450px)": {
              width: "30px",
            },
          }}
        />
        <img
          src="https://image.flaticon.com/icons/svg/141/141036.svg"
          alt=""
          color="icon_orange"
          sx={{
            position: `absolute`,
            width: `48px`,
            top: `15%`,
            left: `28%`,
            "@media screen and (max-width: 450px)": {
              width: "30px",
            },
          }}
        />
      </UpDownWide>
      <Svg
        icon="circle"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="5%"
        top="70%"
      />
      <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <Svg
        icon="upDown"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="40%"
        top="80%"
      />
      <Svg
        icon="triangle"
        width={8}
        stroke
        color="icon_darker"
        left="25%"
        top="5%"
      />
      <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <Svg
        icon="box"
        hiddenMobile
        width={64}
        color="icon_purple"
        left="5%"
        top="90%"
      />
      <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <Svg
        icon="hexa"
        width={16}
        stroke
        color="icon_darker"
        left="10%"
        top="50%"
      />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_darker"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
    >
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
);

export default Hero;
