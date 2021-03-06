import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilterListIcon from 'material-ui-icons/FilterList';
import IconButton from 'material-ui/IconButton';
import { MenuItem } from 'material-ui/Menu';

import EnhancedMenu from '../shared/EnhancedMenu';

import categories from '../../constants/categories';
import { setCategory } from '../../actions/home';

const FilterMenuButton = (props) => {
  const {
    category,
    onSetCategory,
  } = props;

  const categoryItemElements = categories.map(c => (
    <MenuItem
      key={c.value}
      onClick={() => onSetCategory(c.value)}
      selected={category === c.value}
    >
      {c.label}
    </MenuItem>
  ));

  return (
    <EnhancedMenu
      buttonElement={(
        <IconButton
          aria-label="More"
          color="contrast"
        >
          <FilterListIcon />
        </IconButton>
      )}
    >
      {categoryItemElements}
    </EnhancedMenu>
  );
};

FilterMenuButton.defaultProps = {
  category: null,
};

FilterMenuButton.propTypes = {
  category: PropTypes.string.isRequired,
  onSetCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.home.category,
});

const mapDispatchToProps = dispatch => ({
  onSetCategory: category => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenuButton);
