import clsx from 'clsx';
import { Link } from 'react-router';

import { IconDefinition } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, UnstyledButton } from '@mantine/core';

import classes from './MainNavLink.module.css';

interface ILink {
  icon: IconDefinition;
  label: string;
  to: string;
  notifications?: number;
  isActive?: boolean;
}

export function MainNavLink({ icon, isActive, label, to }: ILink) {
  return (
    <UnstyledButton
      to={to}
      component={Link}
      className={clsx(classes.mainLink, {
        [classes.mainLinkActive]: isActive,
      })}
    >
      <Box>
        <FontAwesomeIcon
          icon={icon}
          className={classes.mainLinkIcon}
          fixedWidth
        />
        <span>{label}</span>
      </Box>
    </UnstyledButton>
  );
}
