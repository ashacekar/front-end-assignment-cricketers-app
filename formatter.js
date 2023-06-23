/**
 * This file is used to convert the react-intl formated json to distributable key value json
 */

exports.compile = function (msgs) {
    const results = {}
    for (const [id, msg] of Object.entries(msgs)) {
      results[id] = msg.defaultMessage
    }
    return results
}