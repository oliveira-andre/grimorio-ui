import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

import FormControl from './form-control';
import FormLabel from './form-label';

// styles
import styles from './form-control-label.styl';

class FormControlLabel extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: false,
    };

    this.handleLabel = this.handleLabel.bind(this);
  }

  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static contextTypes = {
    $formGroup: PropTypes.object,
  };

  componentDidMount() {
    if (this.props.value !== undefined && this.props.value !== null && this.props.value !== '') {
      this.setState({ active: true });
    }
  }

  handleLabel(event) {
    if (event && event.target.value === '') {
      this.setState({ active: !this.state.active });
    }
  }

  render() {
    const { label, placeholder, ...rest } = this.props;

    // context
    const formGroup = this.context.$formGroup;
    const validationState = (formGroup && formGroup.validationState) || undefined;

    const labelClasses = classNames(styles.label, {
      [styles.isActive]: this.state.active,
      [styles[`has-${validationState}`]]: validationState,
    });

    const inputClasses = classNames(styles.formControl, {
      [styles[`has-${validationState}`]]: validationState,
    });

    return (
      <div className={styles.labelWrapper}>
        <FormLabel className={labelClasses} onClick={this.handleLabel}>{label}</FormLabel>
        <FormControl
          placeholder={this.state.active ? placeholder : ''}
          inputClassName={inputClasses}
          onBlur={this.handleLabel}
          onFocus={this.handleLabel}
          {...rest}
        />
      </div>
    );
  }
}

export default CSSModules(FormControlLabel, styles);
