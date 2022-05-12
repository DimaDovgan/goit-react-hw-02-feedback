
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const arrOfKeyOptions = Object.keys(options);
        return <ul>{arrOfKeyOptions.map((elem) => {
            return <li key={nanoid()}><button type="button" name={elem} onClick={onLeaveFeedback}>{elem}</button></li>
        })}</ul>

}
FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired
}