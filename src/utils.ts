import * as jsdiff from 'diff';

export const diff = function (oldStr, newStr) {
    const parts = jsdiff.diffChars(oldStr, newStr)
    let index = 0
    const infosMap = new Map()

    for (const p of parts) {
        let infos = infosMap.get(index)

        if (p.added === true || p.removed === true) {
            switch (true) {
                case p.added:
                    if (!infos) {
                        infos = []
                        infosMap.set(index, infos)
                    }
                    infos.push({ operat: 'ADD', chars: p.value })
                    break
                case p.removed:
                    if (!infos) {
                        infos = []
                        infosMap.set(index + 1, infos)
                    }
                    infos.push({ operat: 'DELETE', chars: p.value })
                    break
                default:
            }
        }

        if (p.removed !== true) {
            index = index + p.count
        }
    }
    var actions = []
    for (let [position, infos] of infosMap.entries()) {
        actions.push({ position, infos })
    }
    actions = getActions(actions)
    return actions
}

const getActions = (oldActions)=>{
    const actions = []
    for (let oldAction of oldActions) {
        for (let info of oldAction.infos) {
            let i = 0
            const chars = info.chars.split('')
            if (info.operat === 'DELETE') {
                i = chars.length - 1
                chars.reverse()
            }
            for (let char of chars) {
                const realPosition = oldAction.position + i
                if (info.operat === 'DELETE') {
                    i--
                } else {
                    i++
                }
                // TODO call wasm
                actions.push({position: realPosition, action: info.operat, char})
            }
        }
    }
    return actions
}