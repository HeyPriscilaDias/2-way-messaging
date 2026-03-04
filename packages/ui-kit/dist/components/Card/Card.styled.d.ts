import React from 'react';
import { PaperProps } from '@mui/material';
import { WillowCardVariant } from './Card.types.js';
interface StyledCardProps extends PaperProps {
    $variant: WillowCardVariant;
    $interactive?: boolean;
}
export declare const StyledCard: React.ComponentType<StyledCardProps>;
export {};
//# sourceMappingURL=Card.styled.d.ts.map