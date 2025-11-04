'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

const getRelationships = commandFactory.schemaCommandFactory(schemas.Command.GET_RELATIONSHIPS);

exports.getRelationships = getRelationships;
