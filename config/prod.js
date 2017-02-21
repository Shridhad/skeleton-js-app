import webpackMerge from 'webpack-merge';
import config from './common';

export default webpackMerge(config, {
  key: 'Prod Value'
});