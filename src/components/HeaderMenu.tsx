'use client'

import type { FC } from 'react'
import { useState } from 'react'
import { HamburgerMenu } from './HamburgerMenu'
import { Navigation } from './Navigation'

export const HeaderMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="md:hidden">
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <div className="hidden md:block">
        <Navigation />
      </div>

      {isOpen && (
        <div className="fixed left-0 top-16 w-full bg-white shadow-lg md:hidden">
          <Navigation />
        </div>
      )}
    </>
  )
}
