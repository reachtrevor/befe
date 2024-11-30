import { AppShell, Center } from '@mantine/core';
import { useMemo } from 'react';

interface Props {
  children: React.ReactNode;
}

export function PublicLayout({ children }: Props) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <AppShell>
      <AppShell.Main display="flex">{children}</AppShell.Main>
      <AppShell.Footer p="xl" withBorder={false}>
        <Center>
          &copy; {year} {'{Company Name Here}'}
        </Center>
      </AppShell.Footer>
    </AppShell>
  );
}
