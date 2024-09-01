import { Text as RNText, TextProps } from 'tamagui';
import tokens from '@/theme/tokens';
import { bodyFont, headingFont } from '@/theme/fonts';
import { Color, Size, Variant, Weight } from './types';
import { I18nManager } from 'react-native';

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
  const isRTL = I18nManager.isRTL;
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
      textAlign={isRTL? 'right' : 'left'}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
