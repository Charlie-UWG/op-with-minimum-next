export interface HamburgerMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}
export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      type="button"
      className="flex size-8 flex-col items-center justify-center space-y-1.5"
      onClick={toggleMenu}
      aria-label="メニュー"
    >
      <span
        className={`block h-0.5 w-6 bg-gray-600 transition-transform duration-300 ${
          isOpen ? 'translate-y-2 rotate-45' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-gray-600 transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-gray-600 transition-transform duration-300 ${
          isOpen ? '-translate-y-2 -rotate-45' : ''
        }`}
      />
    </button>
  )
}
