import { useTranslation } from 'react-i18next'
import { Suspense } from 'react';

function MyContainer() {
    const { t, i18n } = useTranslation();
    return (
        
        <div>
            <h3>{t('This is the front page')}</h3>
        </div>
    )
}

export default function App() {
    return(
        <Suspense fallback="perkele">
            <MyContainer />
        </Suspense>
    )
}
