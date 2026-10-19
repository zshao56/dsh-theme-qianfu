/**
 * 潜伏 QIANFU — host half.
 *
 * This is a pure-visual theme: every colour lives in the browser half
 * (`./client`, discovered through package.json's `dsh.client` declaration).
 * The empty `apply` exists so the row mounts in the host Loader and the
 * client-modules scan recognises this package as a web client plugin.
 */
export function apply() {}
