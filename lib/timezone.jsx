// lib/timezone.js
import * as Localization from 'expo-localization';

export function getClientTZ() {
  // Returns IANA TZ like 'Europe/Brussels'
  return Localization.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
}
