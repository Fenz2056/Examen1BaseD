import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MercaditoExamen',
  connector: 'mssql',
  url: 'mssql://Fenz2056_SQLLogin_1:ldmthocnkv@BaseDTExa1.mssql.somee.com/BaseDTExa1',
  host: 'BaseDTExa1.mssql.somee.com',
  port: 1433,
  user: 'Fenz2056_SQLLogin_1',
  password: 'jx9f5rx95g',
  database: 'BaseDTExa1'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MercaditoExamenDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MercaditoExamen';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MercaditoExamen', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
