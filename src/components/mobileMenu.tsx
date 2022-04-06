import React, { FC, useState } from 'react';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';

import { FiMenu, FiX } from 'react-icons/fi';
import { ArwesIcon } from './arwesIcon';
import { Menu } from './menu';

export const MobileMenu: FC<{ entered: boolean }> = ({ entered }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <ArwesIcon fontSize="2.5rem" onClick={() => setIsOpen(true)}>
        <FiMenu />
      </ArwesIcon>
      <ReactModal
        style={{
          content: { backgroundColor: 'rgba(31,35,41,0.85)' },
          overlay: { backgroundColor: 'rgba(31,35,41,0.85)' },
        }}
        isOpen={modalIsOpen}
      >
        <div
          css={css`
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 500px;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              margin-bottom: 32px;
              margin-left: auto;
            `}
          >
            <ArwesIcon fontSize="2.5rem" onClick={() => setIsOpen(false)}>
              <FiX />
            </ArwesIcon>
          </div>
          <Menu entered={entered} />
        </div>
      </ReactModal>
    </>
  );
};
