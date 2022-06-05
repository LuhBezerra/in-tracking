import ReactModal from 'react-modal'
import classnames from 'classnames'
import type { ReactNode } from 'react'

import { CloseIcon } from 'assets/icons'

import './styles.scss'
import Button from '../button'

type ModalProps = {
  className?: string
  title?: string
  children: ReactNode
  isOpen: boolean
  isClosable?: boolean
  onClose?: () => void
  onConfirm?: () => void
}

export const Modal = ({
  className,
  title,
  children,
  isOpen,
  isClosable,
  onClose,
  onConfirm,
}: ModalProps) => (
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
    {title && <h1 className="title">{title}</h1>}
    {children}
    <footer className="footer">
      <Button className="button" type="button" theme="secondary" onClick={onClose}>
        Cancelar
      </Button>
      <Button className="button" type="button" onClick={onConfirm}>
        Adicionar
      </Button>
    </footer>
  </ReactModal>
)
