import ChooseSide from '@components/HomePage/ChooseSide'

import style from './HomePage.module.css';


const HomePage = () => {
    return (
        <>
            <h1 className='header__text'>Home Page</h1>
            <ChooseSide />
        </>
    );
}


export default HomePage;