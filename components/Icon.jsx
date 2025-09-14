// components/Icon.jsx
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


/**
* Unified Icon component. Maps the web Material Symbols to Expo icon sets.
* Accepts: name (semantic), size, color
*/
const map = {
// Header glyph
home_work: { set: 'MaterialIcons', name: 'home-work' },
// Buttons
add_home: { set: 'MaterialCommunityIcons', name: 'home-plus' },
login: { set: 'MaterialIcons', name: 'login' },
// Tab bar
checklist: { set: 'MaterialCommunityIcons', name: 'checklist' },
add_circle: { set: 'MaterialIcons', name: 'add-circle' },
leaderboard: { set: 'MaterialIcons', name: 'leaderboard' },
redeem: { set: 'MaterialIcons', name: 'redeem' },
account_circle: { set: 'MaterialIcons', name: 'account-circle' },
add: { set: 'MaterialIcons', name: 'add' },
expand_more: { set: 'MaterialIcons', name: 'expand-more' },
local_dining: { set: 'MaterialIcons', name: 'local-dining' },
cleaning_services: { set: 'MaterialIcons', name: 'cleaning-services' },
shower: { set: 'MaterialIcons', name: 'shower' },
check: { set: 'MaterialIcons', name: 'check' },
list_alt: { set: 'MaterialIcons', name: 'list-alt' },
leaderboard: { set: 'MaterialIcons', name: 'leaderboard' },
redeem: { set: 'MaterialIcons', name: 'redeem' },
account_circle: { set: 'MaterialIcons', name: 'account-circle' },
close: { set: 'MaterialIcons', name: 'close' },
expand_more: { set: 'MaterialIcons', name: 'expand-more' },
arrow_back: { set: 'MaterialIcons', name: 'arrow-back' },
local_fire_department: { set: 'MaterialIcons', name: 'local-fire-department' },
military_tech: { set: 'MaterialIcons', name: 'military-tech' },
chevron_right: { set: 'MaterialIcons', name: 'chevron-right' },
emoji_events: { set: 'MaterialIcons', name: 'emoji-events' },
person: { set: 'MaterialIcons', name: 'person' },
settings: { set: 'MaterialIcons', name: 'settings' },
local_fire_department: { set: 'MaterialIcons', name: 'local-fire-department' },
check: { set: 'MaterialIcons', name: 'check' },
confirmation_number: { set: 'MaterialIcons', name: 'confirmation-number' },
icecream: { set: 'MaterialIcons', name: 'icecream' },
arrow_back: { set: 'MaterialIcons', name: 'arrow-back' },
info: { set: 'MaterialIcons', name: 'info' },
privacy_tip: { set: 'MaterialIcons', name: 'privacy-tip' },
help: { set: 'MaterialIcons', name: 'help' },
logout: { set: 'MaterialIcons', name: 'logout' },
card_giftcard: { set: 'MaterialIcons', name: 'card-giftcard' },
add: { set: 'MaterialIcons', name: 'add' },
arrow_back_ios_new: { set: 'MaterialIcons', name: 'arrow-back-ios' },
groups: { set: 'MaterialIcons', name: 'groups' },
email: { set: 'MaterialIcons', name: 'email' },
lock: { set: 'MaterialIcons', name: 'lock' },
apple: { set: 'MaterialCommunityIcons', name: 'apple' },
google: { set: 'MaterialCommunityIcons', name: 'google' },
content_copy: { set: 'MaterialIcons', name: 'content-copy' },
admin_panel_settings: { set: 'MaterialIcons', name: 'admin-panel-settings' },
add_task: { set: 'MaterialIcons', name: 'add-task' },
approval: { set: 'MaterialIcons', name: 'approval' },
};


export default function Icon({ name, size = 24, color = '#000' }) {
const entry = map[name] || { set: 'MaterialIcons', name };
if (entry.set === 'MaterialCommunityIcons') {
return <MaterialCommunityIcons name={entry.name} size={size} color={color} />;
}
return <MaterialIcons name={entry.name} size={size} color={color} />;
}