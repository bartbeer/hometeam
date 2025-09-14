import { usePathname, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import Icon from './Icon';

const ITEMS = [
  { key: 'tasks',       label: 'Tasks',       icon: 'list_alt' },
  { key: 'add',         label: 'Add',         icon: 'add_circle' },
  { key: 'leaderboard', label: 'Leaderboard', icon: 'leaderboard' },
  { key: 'rewards',     label: 'Rewards',     icon: 'redeem' },
  { key: 'profile',     label: 'profile',     icon: 'account_circle' },
];

function activeKeyFromPath(path) {
  if (!path) return 'tasks';
  if (path.startsWith('/tasks')) return 'tasks';
  if (path.startsWith('/create-task')) return 'add';
  if (path.startsWith('/leaderboard')) return 'leaderboard';
  if (path.startsWith('/rewards')) return 'rewards';
  if (path.startsWith('/profile')) return 'profile';
  return 'tasks';
}

export default function TabBar({ active, items = ITEMS, onTabPress }) {
  const router = useRouter();
  const pathname = usePathname();
  const current = active || activeKeyFromPath(pathname);

  const handlePress = (key) => {
    if (onTabPress) return onTabPress(key); // let the screen override

    // built-in routing by key (no hrefs)
    if (key === 'tasks') return router.push('/tasks');
    if (key === 'add') return router.push('/create-task');
    if (key === 'leaderboard') return router.push('/leaderboard');
    if (key === 'rewards') return router.push('/rewards');
    if (key === 'profile') return router.push('/profile');
  };

  return (
    <View style={styles.container}>
      {items.map((it) => {
        const isActive = it.key === current;
        const tint = isActive ? colors.primary[600] : colors.secondary[500];
        return (
          <TouchableOpacity
            key={it.key}
            style={styles.item}
            activeOpacity={0.8}
            onPress={() => handlePress(it.key)}
          >
            <Icon name={it.icon} size={24} color={tint} />
            <Text style={[styles.label, { color: tint }]}>{it.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderTopWidth: 1,
    borderTopColor: colors.secondary[200],
    paddingVertical: spacing.sm,
  },
  item: {
    alignItems: 'center',
    gap: 2,
    flexGrow: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: typography.family.medium,
  },
});
