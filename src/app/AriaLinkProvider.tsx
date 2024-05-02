'use client';
import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';
import { RouterProvider } from 'react-aria-components';

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

interface AriaLinkProviderProps {
  children: ReactNode;
}

export const AriaLinkProvider: FC<AriaLinkProviderProps> = ({ children }) => {
  const router = useRouter();

  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
};
