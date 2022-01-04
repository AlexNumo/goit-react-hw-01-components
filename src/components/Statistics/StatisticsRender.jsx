import { AiOutlinePercentage } from "react-icons/ai";
import { Statistic, Title, StatList, Item } from "./Statistics.styled";
import PropTypes from "prop-types";
 
function StatisticsRender({data}) { 
    return (
     <Statistic>
        <Title>Upload stats</Title>
        <StatList>
            {data.map(function (dataElem) {
                return (
                    <Item key={dataElem.id}>
                        <span className="label">{dataElem.label}</span>
                        <span className="percentage">{dataElem.percentage}<AiOutlinePercentage /></span>
                    </Item>)})
            }
        </StatList>
    </Statistic>
    )
}

export default StatisticsRender;

StatisticsRender.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(
        {   id: PropTypes.string.isRequired,
        }
    )),
};