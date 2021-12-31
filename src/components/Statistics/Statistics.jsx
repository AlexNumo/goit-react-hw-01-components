import {Title, StatList, Item, Statistic} from './Statistics.styled';
import { AiOutlinePercentage } from "react-icons/ai";
import PropTypes from "prop-types";

function Statistics ({data}) {
    return(
    <Statistic>
<Title>Upload stats</Title>

<StatList>
      {data.map(function (dataElem) {
              return (
                  <Item key={dataElem.id}>
                      <span className="label">{dataElem.title}</span>
                      <span className="percentage">{dataElem.stats}<AiOutlinePercentage /></span>
                  </Item>
              );
          })}
</StatList>
</Statistic>)};

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(
        {   id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            stats: PropTypes.number.isRequired,
        }
    )),
};
export default Statistics;