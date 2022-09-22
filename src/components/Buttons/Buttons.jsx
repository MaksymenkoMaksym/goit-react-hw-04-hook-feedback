import PropTypes from 'prop-types';

import { ButtonStyled, ButtonListStyled } from './Buttons.styled';

export const ButtonList = ({ options, onLeaveFeedback }) => {
  let buttonList = options.map(el => (
    <ButtonStyled
      key={el}
      type="button"
      onClick={e => onLeaveFeedback(e.target.textContent)}
    >
      {el}
    </ButtonStyled>
  ));

  return <ButtonListStyled>{buttonList}</ButtonListStyled>;
};

ButtonList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
