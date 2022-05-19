import ReactModal from 'react-modal'
import classnames from 'classnames'

import { CloseIcon } from 'assets/icons'

import './styles.scss'

export const Modal = ({ className, children, isOpen, isClosable, onClose }) => (
  <ReactModal
    className={classnames('modal', className)}
    overlayClassName={'overlay'}
    isOpen={isOpen}
    bodyOpenClassName={'disable-body-scroll'}
    ariaHideApp={false}
  >
    {isClosable && (
      <button aria-label="close modal" onClick={onClose} className={'close-button'}>
        <CloseIcon className={'icon'} />
      </button>
    )}
    {children}
  </ReactModal>
)
