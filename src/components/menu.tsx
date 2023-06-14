import React from 'react';
import {
  AiOutlineCalendar,
  AiOutlineFileText,
  AiOutlineFolderOpen,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { Appear, Highlight, Words } from '@nbamford123/arwes';
import { css } from '@emotion/react';

import { ArwesIcon } from './arwesIcon';
import { NavLink } from './navLink';

const HeaderNavLink: React.FC<{ show: boolean; text: string; to: string }> = ({
  show,
  children,
  text,
  to,
}) => (
  <NavLink header to={to}>
    <Highlight animate layer="header">
      <Appear animate show={show}>
        {children}
      </Appear>
      <Words
        css={css`
          margin-left: 0.5rem;
        `}
        animate
        show={show}
      >
        {text}
      </Words>
    </Highlight>
  </NavLink>
);

export const Menu: React.FC<{ entered: boolean }> = ({ entered }) => (
  <>
    <HeaderNavLink show={entered} text="LATEST PAGE" to="/">
      <ArwesIcon>
        <AiOutlineCalendar />
      </ArwesIcon>
    </HeaderNavLink>
    <HeaderNavLink show={entered} text="NEWS" to="/blog">
      <ArwesIcon>
        <AiOutlineFileText />
      </ArwesIcon>
    </HeaderNavLink>
    <HeaderNavLink show={entered} text="ABOUT" to="/about">
      <ArwesIcon>
        <AiOutlineQuestionCircle />
      </ArwesIcon>
    </HeaderNavLink>
    <HeaderNavLink show={entered} text="ARCHIVE" to="/archive">
      <ArwesIcon>
        <AiOutlineFolderOpen />
      </ArwesIcon>
    </HeaderNavLink>
  </>
);
