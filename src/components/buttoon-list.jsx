
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
export const ButtonList = ({ options, onLeaveFeedback }) => {
        return <ul>{options.state.map(({ name, step }) => {
            return <li key={nanoid()}><button type="button" name={name} onClick={onLeaveFeedback}>{name}</button></li>
        })}</ul>

}
ButtonList.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback:PropTypes.func
}