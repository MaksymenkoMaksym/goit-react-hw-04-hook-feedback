import PropTypes from 'prop-types';

import {
  SectionStyled,
  SectionTitleOne,
  SectionTitleTwo,
} from './Section.styled';

export const Section = ({ priority, title, children }) => (
  <SectionStyled>
    {priority === 1 ? (
      <SectionTitleOne>{title}</SectionTitleOne>
    ) : (
      <SectionTitleTwo>{title}</SectionTitleTwo>
    )}
    {children}
  </SectionStyled>
);

Section.propTypes = {
  priority: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
