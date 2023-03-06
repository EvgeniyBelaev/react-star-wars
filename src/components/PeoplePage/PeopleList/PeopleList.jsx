import style from './PeopleList.module.css';

const PeopleList = ({people}) => {
    return (
        <ul className={style.list__container}>
            {people.map(({id, name, img}) =>
                <li className={style.list__item} key={id}>
                    <a href="#">
                        <img className={style.person__photo} src={img} alt={name} />
                        <p>{name}</p>
                    </a>
                    
                </li>
            )}
        </ul>
    );
}

export default PeopleList;