import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://mahmoud55048:Ma7moud235@cluster0.jlhut.mongodb.net/',
      ),
  },
];
