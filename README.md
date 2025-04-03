hello

from develop

migrations: npx sequelize-cli db:migrate --config config.cjs

seeders: npx sequelize-cli db:seed:all --config=config.cjs