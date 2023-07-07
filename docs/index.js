const basicInfo = require('./basicInfo');
const users = require('./users')
const components = require('./components');
module.exports = {

    ...basicInfo,
    ...users,
    ...components
    

}