'use client'

import { useEffect, useRef, useState } from 'react'
import s from './Dropdown.module.scss'
import { FilePen, LogIn, LogOut, Settings, Star, TrendingUp } from 'lucide-react'
import { ROUTES } from '@/common/routes/routes'
import Link from 'next/link'
import { authAndGithubApi, authApi, useLogoutMutation } from '@/common/api/authApi'
import { useAppDispatch } from '@/common/store/hooks'

type Props = {
  isAuth?: boolean
}

export const Dropdown = ({ isAuth = false }: Props) => {
  const dispatch = useAppDispatch()

  const menu = dropdownListItems(isAuth)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const [logout] = useLogoutMutation()

  const logoutHandler = () => {
    logout().then(() => {
      localStorage.removeItem('accessToken')
      dispatch(authAndGithubApi.util.resetApiState())
      dispatch(authApi.util.resetApiState())
    })
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <div className={s.wrapper} ref={menuRef}>
      <span className={s.ellipsis} onClick={toggleMenu}>
        ...
      </span>
      {isMenuOpen && (
        <ul className={s.drop}>
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.path} onClick={item.path === '/' ? logoutHandler : () => {}}>
                {item.icon}
                <span>{item.value}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

//
//
//
//
//
//
const dropdownListItems = (isAuth: boolean) => {
  if (isAuth) {
    return [
      { value: 'Profile Settings', icon: <Settings size={24} />, path: ROUTES.PROFILE_SETTINGS },
      { value: 'Statistics', icon: <TrendingUp size={24} />, path: '' },
      { value: 'Favorites', icon: <Star size={24} />, path: '' },
      { value: 'Log Out', icon: <LogOut size={24} />, path: '/' },
    ]
  } else {
    return [
      { value: 'Log in', icon: <LogIn size={24} />, path: ROUTES.SIGN_IN },
      { value: 'Sign up', icon: <FilePen size={24} />, path: ROUTES.SIGN_UP },
    ]
  }
}
