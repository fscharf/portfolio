import { Button } from 'components/core'
import { HiOutlineXMark } from 'react-icons/hi2'
import { useEventListener } from 'usehooks-ts'
import { Wrapper, WrapperOverlay } from './styles'

type Props = {
  isOpen?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const Sidebar = ({ isOpen, onClose, children }: Props) => {
  const handleClose = () => {
    if (isOpen && onClose) onClose()
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Esc') handleClose()
  }

  useEventListener('keyup', handleKeyUp)

  return (
    <Wrapper open={isOpen}>
      <WrapperOverlay open={isOpen} onClick={handleClose} />
      <Button
        onClick={handleClose}
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: 'transparent'
        }}
      >
        <HiOutlineXMark />
      </Button>
      {children}
    </Wrapper>
  )
}

export default Sidebar
