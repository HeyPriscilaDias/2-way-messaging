import React from 'react';
import { Box, RadioProps } from '@mui/material';
interface StyledRadioProps {
    $error?: boolean;
}
export declare const StyledRadio: React.ComponentType<RadioProps & StyledRadioProps>;
interface StyledRadioCardProps {
    $selected?: boolean;
    $disabled?: boolean;
}
export declare const StyledRadioCard: React.ComponentType<StyledRadioCardProps & React.ComponentProps<typeof Box>>;
export {};
//# sourceMappingURL=RadioGroup.styled.d.ts.map