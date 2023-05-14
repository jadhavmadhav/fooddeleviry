 
import PropTypes from 'prop-types';
import './button.css'

const BottomButton = ({ name, ClickFunction }) => {


    return (
        <div>
            <button className='home-button' onClick={() => ClickFunction()}>{name}</button>

        </div>
    );
}

BottomButton.PropTypes = {
    ClickFunction: PropTypes.func,
    name: PropTypes.string,

}
export default BottomButton;
