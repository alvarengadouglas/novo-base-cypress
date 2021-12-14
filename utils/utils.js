export function encriptar(senha){
    return Buffer.from(senha).toString('base64')
}

export function decriptar(senha){
    return Buffer.from(senha, 'base64').toString()
}

