import React from 'react'
import styles from './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export const IconPresenter = ({
  icon,
  className,
  ...props
}) => (
  <FontAwesomeIcon
    icon={ icon }
    className={ [styles.icon, className].join(' ') }
    { ...props }
  />
)

export const IconContainer = ({
  presenter,
  onClick,
  className = '',
  ...props
}) => {
  if(onClick) className += ` ${ styles.clickable }`
  return presenter({ onClick, className, ...props })
}

export const IconFactory = icon => props => (
  <IconContainer
    presenter={ presenterProps => <IconPresenter { ...presenterProps } /> }
    { ...{icon, ...props}}
  />
)

export const TrashIcon = IconFactory(faTrashAlt)
export const PenIcon = IconFactory(faPen)
