import { useTranslation } from 'react-i18next'
import { Suspense } from 'react';
import MyHOC from './MyHOC';

function MyContainer() {
    const { t, i18n } = useTranslation();
    const Component =  ({ name }) => {
        return <div> Hello {name}!</div>;
    }
    return (
        <div>
            <h3>{ MyHOC( Component, { name: "Kalle"})} </h3>
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
