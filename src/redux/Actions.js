export const REMOVE_RECEIP = 'REMOVE_RECEIP';
export const ADD_RECEIP = 'ADD_RECEIP';

export const removeReceip = id => ({
  type: REMOVE_RECEIP,
  id
});

export const addReceip = (id, name) => ({
  type: ADD_RECEIP,
  id: 'asdaTODO',
  name: name
});