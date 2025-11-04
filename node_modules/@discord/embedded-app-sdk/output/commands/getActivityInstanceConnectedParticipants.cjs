'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

const getActivityInstanceConnectedParticipants = commandFactory.schemaCommandFactory(schemas.Command.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);

exports.getActivityInstanceConnectedParticipants = getActivityInstanceConnectedParticipants;
