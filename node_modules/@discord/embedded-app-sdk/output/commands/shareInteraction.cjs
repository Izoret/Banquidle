'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

const shareInteraction = commandFactory.schemaCommandFactory(schemas.Command.SHARE_INTERACTION);

exports.shareInteraction = shareInteraction;
