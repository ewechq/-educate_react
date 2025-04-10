import { Button } from 'shared/ui/Button/Button';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}
// компонент для тестирования ошибок error boundary
const BugButton = ({ className }: BugButtonProps) => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const throwError = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button className={className} onClick={throwError}>
            {t('Throw error')}
        </Button>
    );
};

export default BugButton;
