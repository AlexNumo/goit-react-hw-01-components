import {Item} from './Statistics.styled';
import { AiOutlinePercentage } from "react-icons/ai";
import PropTypes from "prop-types";

function Statistics (label, percentage) {
    return(
        <Item>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}<AiOutlinePercentage /></span>
        </Item>)};

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(
        {   id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            stats: PropTypes.number.isRequired,
        }
    )),
};
export default Statistics;