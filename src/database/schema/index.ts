import { appSchema } from '@nozbe/watermelondb';
import { carSchema } from './carSchema';
import { userSchema } from './userSchema';

const schemas = appSchema({
  version: 2.1,
  tables: [userSchema, carSchema],
});

export { schemas };
