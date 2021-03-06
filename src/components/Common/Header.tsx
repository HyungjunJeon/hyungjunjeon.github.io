import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

type HeaderProps = {
  toggleMenu: () => void
  isOpen: boolean
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  line-height: 3;
  border-bottom: 1px solid #eaecef;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`
const HeaderNavWrapper = styled.div<{ isOpen: boolean }>`
  width: 180px;
  display: flex;
  justify-content: space-between;
  transition: all ease-in 0.3s;

  @media (max-width: 768px) {
    position: absolute;
    top: 49px;
    right: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
    width: 100%;
    padding: 0 calc((100% - 300px) / 2);
    background: #ffffff;
    z-index: 99;
  }
`
const HeaderLink = styled(Link)`
  font-weight: 600;
  color: #2c3e50;
`

const ExternalLinkIcon = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  color: #aaa;
  margin-left: 10px;
`
const MobileMenuButton = styled.button`
  display: none;
  font-size: 20px;
  background: transparent;
  border: none;

  @media (max-width: 768px) {
    display: inline-block;
  }
`

const Header: FunctionComponent<HeaderProps> = function ({
  toggleMenu,
  isOpen,
}) {
  return (
    <HeaderWrapper>
      <HeaderLink to="/">JHJ Blog</HeaderLink>
      <HeaderNavWrapper isOpen={isOpen}>
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink
          to="https://github.com/HyungjunJeon/HyungjunJeon-gitbub.io"
          target="_blank"
        >
          Repository
          <ExternalLinkIcon>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLinkIcon>
        </HeaderLink>
      </HeaderNavWrapper>
      <MobileMenuButton onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </MobileMenuButton>
    </HeaderWrapper>
  )
}

export default Header
