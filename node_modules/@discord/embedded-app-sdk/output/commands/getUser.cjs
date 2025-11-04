'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

const getUser = commandFactory.schemaCommandFactory(schemas.Command.GET_USER);

exports.getUser = getUser;
