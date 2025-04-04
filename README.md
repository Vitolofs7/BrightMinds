hello

from develop

On backend:

    For migrations and seeders to work, first you need to delete ("type": "module",) from package.json

    migrations: npx sequelize-cli db:migrate --config config.cjs

    seeders: npx sequelize-cli db:seed:all --config=config.cjs