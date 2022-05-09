
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
export const StatisyicList = (props) => { 
    let elems = Object.entries(props)
    return <ul>{elems.map(elem=><li key={nanoid()}>{elem[0]}:{elem[1]}</li>) }</ul>

}
StatisyicList.propTypes = {
    props: PropTypes.object
}