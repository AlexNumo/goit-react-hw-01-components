import PropTypes from "prop-types";
import { TransactionHistory, NamePosition, RandomColor } from "./TransactionHistory.styled";

function TransactionHistoryRender({ items }) { 
    return (
    <TransactionHistory>
    <NamePosition>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </NamePosition>
    <RandomColor>
        {items.map((item) => {
            return (
                // string = string[0].toUpperCase() + string.substring(1)
                <tr key={item.id}>
                    <td>{item.type[0].toUpperCase()+item.type.substring(1)}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            )
        })}
    </RandomColor>
    </TransactionHistory>
    )

}

export default TransactionHistoryRender;

TransactionHistoryRender.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};