import { AppShell, Text } from '@mantine/core';

import { MainNavLink } from './MainNavLink';

import classes from './MainNav.module.css';

interface Props {
  links: any[];
  isLast: boolean;
}

export function MainNavSection({ links, isLast }: Props) {
  return (
    <AppShell.Section grow={isLast} my="md">
      <div className={classes.mainLinks}>
        {links.map((link) =>
          !link.text ? (
            <MainNavLink
              key={link.label}
              icon={link.icon}
              label={link.label}
              to={link.path}
            />
          ) : (
            <Text ml={8} mb={8} c="dimmed" key={link.text}>
              {link.text}
            </Text>
          )
        )}
      </div>
    </AppShell.Section>
  );
}
