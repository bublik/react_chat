import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import {messages} from './messagesReducer';

const root = combineReducers(merge({}, {messages}));

export default root;
