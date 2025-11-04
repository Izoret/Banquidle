'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var native = require('./native.cjs');
var rng = require('./rng.cjs');
var stringify = require('./stringify.cjs');

function v4(options, buf, offset) {
    if (native.default.randomUUID && !buf && !options) {
        return native.default.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng.default();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    return stringify.unsafeStringify(rnds);
}

exports.default = v4;
