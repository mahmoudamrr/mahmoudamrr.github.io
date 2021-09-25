/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Mahmoud Amr &copy; {new Date().getFullYear()}.
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <div sx={{ ml: 2 }} style={{ fontSize: "12px" }}>
          Theme
        </div>
        <div sx={{ mx: 1 }} style={{ fontSize: "12px" }}>
          by
        </div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
          target="_blank"
          style={{ marginRight: "0.35rem", fontSize: "13px" }}
        >
          LekoArts
        </Link>
        {` `}
        {isDark ? (
          <img
            width="20"
            height="20"
            src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png"
            alt="LekoArts Logo"
          />
        ) : (
          <img
            width="30"
            height="30"
            src="https://img.lekoarts.de/gatsby/logo_v2_w30.png"
            alt="LekoArts Logo"
          />
        )}
      </Flex>
    </Box>
  );
};

export default Footer;
