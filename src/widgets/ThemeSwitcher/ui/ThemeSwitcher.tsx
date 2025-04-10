import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/sun.svg';
import DarkIcon from 'shared/assets/icons/moon.svg';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme} className={className}>
            {theme === Theme.DARK ? (
                <DarkIcon />
            ) : (
                <LightIcon />
            )}
        </Button>
    );
};
