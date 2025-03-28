import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import {classNames} from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
  const {t}=useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>{t('Главная страница')}</AppLink>
        <AppLink  to={'/about'}>{t('О сайте')}</AppLink>
      </div>
        
    </div>
  )
}

{/*
import {classNames} from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { chownSync } from "fs";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
return (
  <div className={classNames(cls.Navbar, {}, [className])}>
  </div>
)
}
*/}