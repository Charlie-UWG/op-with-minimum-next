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
        <div className="absolute right-0 top-full z-[100] w-full max-w-xs rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur md:hidden">
          <Navigation />
        </div>
      )}
    </>
  )
}
