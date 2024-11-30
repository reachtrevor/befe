import { useMemo } from 'react';

import {
  AppShell,
  Avatar,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';

import {
  faBuildings,
  faChartLineUpDown,
  faCircleNodes,
  faIdCard,
  faPeopleGroup,
  faPollPeople,
} from '@fortawesome/pro-light-svg-icons';

import { MainNavSection } from './MainNavSection';

import classes from './MainNav.module.css';

const sectionsDef: Record<string, any[]> = {
  system: [
    { icon: faChartLineUpDown, label: 'Dashboard', path: '/console' },
    {
      icon: faBuildings,
      label: 'Tenants',
      path: '/console/tenants',
    },
    { icon: faCircleNodes, label: 'Operations', path: '/console/operations' },
  ],
  support: [
    { text: 'System' },
    { icon: faIdCard, label: 'Account', path: '/console/account' },
    { icon: faPeopleGroup, label: 'Customers', path: '/console/customers' },
    { icon: faPollPeople, label: 'Staff', path: '/console/staff' },
  ],
};

export function MainNav() {
  const sections = useMemo(() => Object.keys(sectionsDef), []);

  return (
    <>
      <AppShell.Section>Header</AppShell.Section>
      {sections.map((sectionKey, index) => (
        <MainNavSection
          key={sectionKey}
          links={sectionsDef[sectionKey]}
          isLast={index + 1 === sections.length}
        />
      ))}
      <AppShell.Section>
        <UnstyledButton w="100%" className={classes.userButton}>
          <Group>
            <Avatar size="md" color="bright-pink" />
            <Stack gap={0}>
              <Text>James</Text>
              <Text size="sm" c="dimmed">
                james@gmail.com
              </Text>
            </Stack>
          </Group>
        </UnstyledButton>
      </AppShell.Section>
    </>
  );
}
