import style from './PeopleList.module.css';

const PeopleList = () => {
    return (
        <ul>
            {people.map(({id, name, img}) =>
                <li key={id}>
                    <img src={img} alt={name} />
                    <p>{name}</p>
                </li>
            )}
        </ul>
    );
}

export default PeopleList;