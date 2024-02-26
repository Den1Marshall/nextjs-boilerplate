'use client';
import { MotionConfig } from 'framer-motion';
import { FC } from 'react';
import { ReactNode } from 'react';

export const FMReducedMotion: FC<{ children: ReactNode }> = ({ children }) => {
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>;
};
