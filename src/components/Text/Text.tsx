import { Text as RNText, TextProps } from 'tamagui';
import tokens from '@/src/theme/tokens';
import { bodyFont, headingFont } from '@/src/theme/fonts';
import { Color, Size, Variant, Weight } from './types';

interface CustomTextProps extends TextProps {
    variant?: Variant;
    size?: Size;
    weight?: Weight;
    color?: Color;
    disabled?: boolean;
  }

const Text: React.FC<CustomTextProps> = ({
  children,
  variant = 'body',
  size = 'md',
  weight = 'regular',
  color = 'semanticFgText',
  disabled = false,
  ...props
}) => {
  const fontConfig = variant === 'heading' ? headingFont : bodyFont;
  const textColor = disabled
    ? tokens.color.semanticFgTextDisabled
    : tokens.color[color];
  return (
    <RNText
      fontSize={fontConfig.size[size as keyof typeof fontConfig.size]}
      lineHeight={fontConfig.lineHeight[size as keyof typeof fontConfig.size]}
      fontWeight={fontConfig.weight[weight as keyof typeof fontConfig.weight]}
      letterSpacing={
        fontConfig.letterSpacing[size as keyof typeof fontConfig.size]
      }
      color={textColor}
      opacity={disabled ? 0.5 : 1}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
