
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
// мені не потрібна деструкторизація пропса мені потрібний цілий обєкт який я преробляю в двовимірний масив.
export const Statistics = (props) => { 
    console.log(props)
    let elems = Object.entries(props)
    return <ul>{elems.map(elem=><li key={nanoid()}>{elem[0]}:{elem[1]}</li>) }</ul>

}
Statistics.propTypes = PropTypes.object.isRequired;
