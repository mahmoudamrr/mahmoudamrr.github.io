/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import StackMDX from "../sections/stack.mdx";
const Stack = ({ offset, factor }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, #00416a, #e4e5e6);"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={offset - 0.3}
      factor={factor + 0.4}
      zIndex={2}
    />
    <Divider speed={0.1} offset={offset} factor={factor} zIndex={100}>
      <UpDown>
        <Svg
          icon="box"
          hiddenMobile
          width={6}
          color="icon_blue"
          left="50%"
          top="70%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="90%"
          top="35%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={20}
          color="icon_green"
          left="7%"
          top="30%"
        />
      </UpDown>
      <Svg
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg
        icon="hexa"
        width={12}
        stroke
        color="icon_orange"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset + 0.1} factor={factor}>
      <Inner>
        <StackMDX />
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "5rem",
          }}
        >
          <img
            src="/html.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />
          <img
            src="/css.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />{" "}
          <img
            src="/js.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />{" "}
          <img
            src="/typescript.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />{" "}
          <img
            src="/react.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />{" "}
          <svg
            width="50"
            height="50"
            viewBox="0 0 256 270"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            sx={{ margin: "1rem" }}
          >
            <path
              d="M127.606.341L.849 44.95 20.88 211.022l106.86 58.732 107.412-59.528L255.175 44.16 127.606.341z"
              fill="#B3B3B3"
            />
            <path
              d="M242.532 53.758L127.31 14.466v241.256l96.561-53.441 18.66-148.523z"
              fill="#A6120D"
            />
            <path
              d="M15.073 54.466l17.165 148.525 95.07 52.731V14.462L15.074 54.465z"
              fill="#DD1B16"
            />
            <path
              d="M159.027 142.898L127.31 157.73H93.881l-15.714 39.305-29.228.54L127.31 23.227l31.717 119.672zm-3.066-7.467l-28.44-56.303-23.329 55.334h23.117l28.652.97z"
              fill="#F2F2F2"
            />
            <path
              d="M127.309 23.226l.21 55.902 26.47 55.377h-26.62l-.06 23.189 36.81.035 17.204 39.852 27.967.518-81.981-174.873z"
              fill="#B3B3B3"
            />
          </svg>
          <img
            src="/python.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="50"
            viewBox="0 0 436.506 152.503"
            sx={{ margin: "1rem" }}
          >
            <g fill="#092e20">
              <path d="M51.465 0h23.871v110.496c-12.245 2.325-21.236 3.256-31.002 3.256C15.191 113.75 0 100.576 0 75.308c0-24.337 16.122-40.147 41.078-40.147 3.875 0 6.82.309 10.387 1.239V0zm0 55.62c-2.79-.929-5.115-1.239-8.061-1.239-12.091 0-19.067 7.441-19.067 20.461 0 12.712 6.666 19.687 18.912 19.687 2.635 0 4.806-.154 8.216-.619V55.62z" />
              <path d="M113.312 36.865v55.338c0 19.067-1.396 28.213-5.58 36.118-3.876 7.597-8.992 12.401-19.532 17.673l-22.167-10.541c10.541-4.961 15.656-9.3 18.911-15.968 3.411-6.819 4.497-14.726 4.497-35.497V36.865h23.871zM89.441.127h23.871v24.492H89.441V.127zM127.731 42.29c10.542-4.959 20.617-7.129 31.623-7.129 12.246 0 20.306 3.254 23.872 9.61 2.014 3.565 2.634 8.215 2.634 18.137v48.517c-10.697 1.55-24.182 2.636-34.102 2.636-19.996 0-28.988-6.978-28.988-22.478 0-16.743 11.936-24.493 41.233-26.974v-5.27c0-4.34-2.17-5.889-8.216-5.889-8.835 0-18.756 2.48-28.058 7.286l.002-18.446zm37.359 37.978c-15.812 1.55-20.928 4.03-20.928 10.231 0 4.649 2.946 6.819 9.456 6.819 3.566 0 6.82-.309 11.471-1.084l.001-15.966zM197.487 40.585c14.105-3.72 25.731-5.424 37.512-5.424 12.246 0 21.082 2.789 26.354 8.215 4.96 5.114 6.509 10.694 6.509 22.632v46.812H243.99V66.938c0-9.145-3.1-12.557-11.625-12.557-3.255 0-6.2.31-11.007 1.705v56.734h-23.871V40.585zM277.142 125.841c8.372 4.341 16.742 6.354 25.577 6.354 15.654 0 22.32-6.354 22.32-21.546v-.465c-4.649 2.324-9.301 3.255-15.5 3.255-20.927 0-34.26-13.796-34.26-35.651 0-27.129 19.688-42.474 54.564-42.474 10.231 0 19.688 1.084 31.158 3.409l-8.174 17.219c-6.355-1.24-.509-.166-5.312-.631v2.481l.309 10.074.154 13.022c.155 3.254.155 6.51.311 9.765v6.512c0 20.461-1.705 30.071-6.819 37.977-7.441 11.627-20.308 17.361-38.599 17.361-9.301 0-17.359-1.395-25.731-4.65l.002-22.012zm47.434-71.305h-2.479c-4.649-.155-10.074 1.084-13.796 3.409-5.734 3.256-8.682 9.147-8.682 17.517 0 11.937 5.893 18.757 16.433 18.757 3.255 0 5.891-.621 8.989-1.55v-8.215c0-2.791-.153-5.893-.153-9.146l-.154-11.005-.156-7.906-.002-1.861zM398.062 34.85c23.871 0 38.443 15.037 38.443 39.373 0 24.958-15.19 40.614-39.373 40.614-23.873 0-38.6-15.037-38.6-39.218.002-25.114 15.194-40.769 39.53-40.769zm-.467 60.764c9.146 0 14.572-7.596 14.572-20.772 0-13.02-5.271-20.771-14.415-20.771-9.457 0-14.884 7.597-14.884 20.771.002 13.177 5.428 20.772 14.727 20.772z" />
            </g>
          </svg>
          <img
            src="/nodejs.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />{" "}
          <img
            src="/api.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />
          <img
            src="/sql.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />
          <img
            src="/docker.png"
            width={50}
            alt=""
            color="icon_orange"
            sx={{ margin: "1rem" }}
          />
        </div>
      </Inner>
    </Content>
  </div>
);

export default Stack;
