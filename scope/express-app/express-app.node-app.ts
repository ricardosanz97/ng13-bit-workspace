import { NodeAppOptions } from '@teambit/node';

export const expressApp: NodeAppOptions = {
  name: 'express-app',
  entry: require.resolve('./express-app.app-root'),
  portRange: [3000, 4000]
};

export default expressApp;
