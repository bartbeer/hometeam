// screens/ProfileScreen.jsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import TabBar from '../components/TabBar';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

const AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwEWcBDzd3wWmvqGzQbU5auaKGJqvUhNchFRFoLkakblL3moVCQYW2uuFVZGayp-u1uCGfx81vtuYMuAgxQwkkd6fzDiFPglBI52FSwBXnJAWt5xNNQFEUS9sS6-hKoGTY4a5bax8z5a5aoff9Ng9jZ7w_0exYUlRiIl_PVhfgsoiugz2rvlmANN82kWOJxVKoVD9mMn8NhLTGGZKXXJuPj5SbR4aj2aLVtzYefIy0zt3DGRNTobvqGeQDEgGFjTmym5PLL0JUroex';

const BADGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDmFnREDpdmuIzopkUfoTw6Ed3acm9kmFLgq30XFjLbHmLI9jWmuEgWt_oPSFPUnekmrOxheoBelXAcUJlbX4lEJkEH0DMDNo6moUsC8IzPz8zhGBt4oRzP9hVkUCT2yQRRx9YDv1zdULLLxs1_as1C95xezb3CG4oED_iPbn4jkHiJgY2uPl7OK5O4_nJKMrocGgpTCV7PQ4utVYEUuwFVM3prUI7f8VQ8eEinKROECJOng3-dzsBn7y3SkpDW3WZiiDhudFVcIVvu',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCec1VhYsRicdq8X09ZbdUy620uBPhZJdY3WgzIZkRiZYaPkxyo5yI5Ymjnzn7zKDTlDYLtu7QNUafV6s1E_w8DApx8HKNnNGIIuRisRWiyju1iCHMRoiCudUz_-YvE8KMJLL3gWhKgXE_ED-jUK3BrtmtQ_FCkVLwqgjHnMZsOVoBZZbYBx3zaZQCk3na-TjGAsLET2aoJbd15G84AkrsmiGJDyR7-boQCoheJq_Yku_CVc884pCW2BbHbaYrm5YXurLfcrg70K8wW',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDyUNHotYNIM7SofiA4oZqsudT4Tuk6pDz9zqY3l12rHCLyTbU1gvzFUSY08fv5ybCUizvM_9WW3cOQu2bFkOECubBQyujcOJkqt1Vl1YxkOQXak9dc5U8mFLYhZmwIELCylwdmyedoSCLMrOA6eRi5Q3yGd8d_OZU-5cthElIn604wKb0gK18RsOJZZTtJlgFXePKbPCUwpMgpwHsPoMtYXHB64rOZlbmKpXHEmzqVd4YiXJwZGhkBByaC906E297wtIWOs-_L8ukV',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDr8M4vYyYOgo-BwXzk0nmOgUOsfFbZ7IwT4QCNHDu0RgdHNPcaPbBxbV8kNKTw07m0jtaS3RD70RE3Snw6jFug32zy_4mxmpejsdEj5TQKqlOoZ9D8sKQZHzY_MNAUeyD2yW2QW8L7Qu7o1ul9BgXVUlDR6JYK0lbWoDUChiVygPEcyCn061VrZQd6XdPuS2BHV2xE2qU6coIi_H8OsB5DJ3wTm3nMWRFz5UMekTvQDGLt90nl5IVZy9qKdJAgzjt7urQDP3FPMBna',
];

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => {  router.push('/settings'); }} style={styles.iconBtn}>
          <Icon name="settings" size={22} color={colors.secondary[700]} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Avatar & identity */}
        <View style={{ alignItems: 'center', gap: spacing.md }}>
          <Image source={{ uri: AVATAR }} style={styles.avatar} />
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.name}>Sophia Chen</Text>
            <Text style={styles.subtle}>Household: The Chen Family</Text>
            <Text style={styles.muted}>Member since 2023</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>1200</Text>
            <Text style={styles.statLabel}>Total Points</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>35</Text>
            <Text style={styles.statLabel}>Tasks Completed</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>15</Text>
            <Text style={styles.statLabel}>Rewards Redeemed</Text>
          </View>
        </View>

        {/* Badges */}
        <Text style={styles.sectionTitle}>Badges</Text>
        <View style={styles.badgesGrid}>
          {BADGES.map((uri) => (
            <Image key={uri} source={{ uri }} style={styles.badge} />
          ))}
        </View>

        {/* Streak */}
        <Text style={styles.sectionTitle}>Streak</Text>
        <View style={styles.rowCard}>
          <View style={[styles.iconBubble, { backgroundColor: '#fee2e2' }]}>
            <Icon name="local_fire_department" size={22} color={colors.primary[600]} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>7 Days</Text>
            <Text style={styles.rowSubtitle}>Current Streak</Text>
          </View>
        </View>

        {/* Recent Approvals */}
        <Text style={styles.sectionTitle}>Recent Approvals</Text>
        <View style={{ gap: spacing.sm }}>
          {[{ t: 'Cleaned the Kitchen', s: 'Approved by Dad' }, { t: 'Took out the Trash', s: 'Approved by Mom' }].map((it) => (
            <View key={it.t} style={styles.rowCard}>
              <View style={[styles.iconBubble, { backgroundColor: '#dcfce7' }]}>
                <Icon name="check" size={20} color={'#16a34a'} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{it.t}</Text>
                <Text style={styles.rowSubtitle}>{it.s}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Rewards Redeemed */}
        <Text style={styles.sectionTitle}>Rewards Redeemed</Text>
        <View style={{ gap: spacing.sm }}>
          {[{ t: 'Movie Night', s: 'Redeemed on 2024-01-15', c: '#fef3c7', icon: 'confirmation_number', tint: '#ca8a04' }, { t: 'Ice Cream Treat', s: 'Redeemed on 2023-12-20', c: '#fce7f3', icon: 'icecream', tint: '#db2777' }].map((it) => (
            <View key={it.t} style={styles.rowCard}>
              <View style={[styles.iconBubble, { backgroundColor: it.c }]}>
                <Icon name={it.icon} size={20} color={it.tint} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{it.t}</Text>
                <Text style={styles.rowSubtitle}>{it.s}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TabBar active="profile" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f9fafb' }, // gray-50
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.secondary[900],
    fontFamily: typography.family.bold,
  },
  iconBtn: {
    position: 'absolute',
    right: spacing.lg,
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl, gap: spacing.lg },

  avatar: { width: 128, height: 128, borderRadius: 999, backgroundColor: colors.secondary[200] },
  name: { fontSize: 22, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },
  subtle: { fontSize: 16, color: colors.secondary[600] },
  muted: { fontSize: 12, color: colors.secondary[500] },

  statsRow: { flexDirection: 'row', gap: spacing.sm },
  statCard: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary[200],
    borderRadius: 12,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  statValue: { fontSize: 22, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },
  statLabel: { fontSize: 12, color: colors.secondary[600] },

  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.secondary[900], marginTop: spacing.md, marginBottom: spacing.sm, fontFamily: typography.family.bold },
  badgesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  badge: { width: 64, height: 64, borderRadius: 999, backgroundColor: colors.secondary[200] },

  rowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.secondary[200],
  },
  iconBubble: { width: 48, height: 48, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  rowTitle: { fontSize: 16, fontWeight: '600', color: colors.secondary[900], fontFamily: typography.family.medium },
  rowSubtitle: { fontSize: 13, color: colors.secondary[600] },
});
