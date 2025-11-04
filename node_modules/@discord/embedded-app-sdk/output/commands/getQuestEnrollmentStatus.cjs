'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

const getQuestEnrollmentStatus = commandFactory.schemaCommandFactory(schemas.Command.GET_QUEST_ENROLLMENT_STATUS);

exports.getQuestEnrollmentStatus = getQuestEnrollmentStatus;
