import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Что-то пошло не так')}</p>
            <Button
                onClick={reloadPage}
                theme={ThemeButton.CLEAR}
                className={cls.reloadBtn}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

export default PageError;
