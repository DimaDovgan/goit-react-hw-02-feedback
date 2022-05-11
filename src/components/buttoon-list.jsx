
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return <ul>{options.state.map(({ name, step }) => {
            return <li key={nanoid()}><button type="button" name={name} onClick={onLeaveFeedback}>{name}</button></li>
        })}</ul>

}
FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback:PropTypes.func
}