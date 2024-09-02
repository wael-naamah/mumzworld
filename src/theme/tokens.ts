import { createTokens } from 'tamagui';
import { space, size, radius, zIndex } from '@tamagui/themes';

export default createTokens({
  color: {
    semanticFgText: '#27272a', // Darkest gray and default text color
    semanticFgTextWeak: '#71717a', // Lighter gray
    semanticFgTextDisabled: '#d4d4d8', // Lightest gray for disabled text
    semanticFgTextInvert: '#ffffff', // White text for dark backgrounds
    semanticFgIcon: '#0070BE', // Brand primary color for icons
    semanticFgAccent: '#C30045', // Accent color for important info and promo banners
    semanticFgLink: '#0583F2', // Accent color for hyperlinks
    semanticFgSuccess: '#1ac057', // Success color
    semanticFgAttention: '#c88a04', // Attention and warning color
    semanticFgError: '#f67416', // Error text color
    semanticBgMuted: '#e4e4e7', // Background color for subtle actions
    semanticBgSubtle: '#f4f4f5', // Background color for components like Page/Frame
    semanticBgWhite: '#ffffff', // Default background color
    semanticBgPrimary: '#fd6b6b', // Primary background color
    semanticBgPrimaryLight: '#fef1f1', // Light background color
    semanticBgSecondary: '#0583F2', // Secondary background color (support/blue)
    semanticBgSecondaryLight: '#23468C', // Light secondary background color
    semanticSupportCyan: '#C7E3FC', // Support background color (cyan)
    semanticSupportCyanLight: '#EFF7FF', // Light cyan background color
    semanticSupportCyanDark: '#04ADBF', // Dark cyan background color
    semanticSupportLime: '#026873', // Lime background color
    semanticSupportLimeLight: '#BEEDF2', // Light lime background color
    semanticSupportLimeDark: '#ECFDFF', // Dark lime background color
    semanticSupportYellow: '#F1BE71', // Yellow background color
    semanticSupportYellowLight: '#FCF2E3', // Light yellow background color
    semanticSupportYellowDark: '#864E0E', // Dark yellow background color

    // Feedback Colors
    feedbackBgErrorLight: '#ffedd6', // Background color for error elements
    feedbackBgError: '#f67416', // Error color for UI elements
    feedbackBgErrorDark: '#9b3b12', // Dark error background color
    feedbackBgSuccessLight: '#defce9', // Light success background color
    feedbackBgSuccess: '#1ac057', // Success color for UI elements
    feedbackBgSuccessDark: '#1c713c', // Dark success background color
    feedbackBgWarningLight: '#fef9c3', // Light warning background color
    feedbackBgWarning: '#e7b008', // Warning color for UI elements
    feedbackBgWarningDark: '#864E0E', // Dark warning background color
  },
  space,
  size: {
    ...size,
    inputHeight: 60,
    inputHeightSmall: 48,
  },
  radius,
  zIndex,
});
