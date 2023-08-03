import { BlogEntity } from 'src/entities/blog.entity';
import { Blog } from 'src/entities/postBlog.entity';
import { Admin } from 'src/entities/register-admin.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';


const config: PostgresConnectionOptions = {

    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [Admin, BlogEntity, Blog],
    synchronize: true,

}

export default config;