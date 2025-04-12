import { Box, Icon, TextField } from "@components";
import { LogoTextProps } from "@typelib/components";

const LogoText = ({
  style = "",
  icon,
  text,
  iconStyle,
  textStyle,
}: LogoTextProps) => {
  return (
    <Box style={`${style} logotext-default`}>
      <Icon icon={icon} style={iconStyle} />
      <TextField text={text} style={textStyle} />
    </Box>
  );
};

export default LogoText;
