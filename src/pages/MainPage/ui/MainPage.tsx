import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div>{t('Главная страница')}</div>
            <BugButton />
        </div>

    );
};

export default MainPage;
