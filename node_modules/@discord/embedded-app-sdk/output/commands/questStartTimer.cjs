'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

const questStartTimer = commandFactory.schemaCommandFactory(schemas.Command.QUEST_START_TIMER);

exports.questStartTimer = questStartTimer;
