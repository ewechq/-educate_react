import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import {classNames} from "shared/lib/classNames/classNames"
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/moon.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const {theme, toggleTheme}=useTheme();
  return (
    <Button onClick={toggleTheme} theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])}>
        {theme === Theme.DARK ? <DarkIcon fill="red"/> : <LightIcon />}
    </Button>
  )
}
