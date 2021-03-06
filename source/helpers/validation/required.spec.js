import '../../../internals/test/helper';

import requiredValidation from './required';

/** @test {Validation#Required} */
describe('Validation Required', () => {
  it('should have parameters VALUE as String and MESSAGE as String', () => {
    expect(requiredValidation('test', 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameters VALUE as Number', () => {
    expect(requiredValidation(1234, 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameters VALUE as Object', () => {
    expect(requiredValidation({ name: 'test'}, 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameters VALUE as ARRAY', () => {
    expect(requiredValidation(['test'], 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameter VALUE different of empty', () => {
    expect(requiredValidation('', 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });

  it('should have parameter VALUE different of empty if OBJECT type', () => {
    expect(requiredValidation({}, 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });

  it('should have parameter VALUE with length bigger than 0 if ARRAY type', () => {
    expect(requiredValidation([], 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });

  it('should have parameter MESSAGE', () => {
    expect(requiredValidation('')).toEqual({
      validationState: 'error',
      errorMessage: undefined
    });
  });

  it('should have parameters', () => {
    expect(requiredValidation()).toEqual({
      validationState: 'error',
      errorMessage: undefined
    });
  });
});
