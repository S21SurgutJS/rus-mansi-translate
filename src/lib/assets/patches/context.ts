import type { SettingsDto } from "@ddsgt_mono/lib"
import { getContext, setContext } from "svelte"
import { writable, type Writable } from "svelte/store"

const keys = {
  settings: 'settings'
}
function setSettingsContext(data: SettingsDto) {
  setContext(keys.settings, writable(data))
}
function getSettingsContext() {
  return getContext(keys.settings) as Writable<SettingsDto>
}

export function useSettingsContext() {
  return { setSettingsContext, getSettingsContext }
}