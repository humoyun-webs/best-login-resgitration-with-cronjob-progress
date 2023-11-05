const {fetch,fetchOne} = require("../../utils/pg")

const uregister = "Insert into users(name, l_name,  age , iso, country_name, nicename, iso3, numcode, phonecode)values($1, $2, $3, $4, $5, $6, $7, $8, $9)";

const registerU = (name, l_name,  age , iso, country_name, nicename, iso3, numcode, phonecode) => fetchOne(uregister,name, l_name,  age , iso, country_name, nicename, iso3, numcode, phonecode)

module.export = {
    registerU
}