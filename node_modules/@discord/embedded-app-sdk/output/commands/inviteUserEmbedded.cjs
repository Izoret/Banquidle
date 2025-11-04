'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

const inviteUserEmbedded = commandFactory.schemaCommandFactory(schemas.Command.INVITE_USER_EMBEDDED);

exports.inviteUserEmbedded = inviteUserEmbedded;
