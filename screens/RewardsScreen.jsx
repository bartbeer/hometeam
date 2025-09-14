// screens/RewardsScreen.jsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import TabBar from '../components/TabBar';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

const AVAILABLE = [
  {
    title: 'Family Game Night',
    desc: 'Enjoy a fun-filled evening.',
    pts: 1500,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqWiSID7QfCpIZP9QM0kfF02df6ngS5tlDUkY7OWcDv0sCdv176j0-8WU01F-1gjJTmRYXPgzwOEJCueYIkMql5ocGRvu8UC94U5vPSP8M3QZdMt4ETc0Z-aEocnXPm2hMQ6Y2t_MBqL28dxBxKOcqwg0BBdAzi8gpxoQGGfJsUTXGEVBU3P6ds3h6kuKSeEyJOXDykzRLyNPfq3De3yYaZYROzUF1LURWM4OYpEZVfEXR1gGXF2AbICnOn83pYOZRzjlsHfxrWPNE',
  },
  {
    title: 'Movie Night',
    desc: 'Cozy up with popcorn & snacks.',
    pts: 1200,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoWveOxs0LL5vL6Fd0-TAa2h6VBTNW6riMMWvzCLyi0SlcHA5gy_dKuASfsQf-8_i3Dqnr2DsYDcaVjta_4UhbV7UzLX2PiKqMQw_s-S1AN9DskWflpX6Pv9hze35GN86SqIvMCTlAOGhB9DpzzItedpsfgvUieCc7TdAycQADCOuXfYBj8dmNKGmzT-14RrOM2vtfV09npUcNU4bTAdW4S4tiPc7nYjy3SYZeLCfQ73V-5M5f6Nr3o8CJ4PF8NWDYpo8fsJsaQJId',
  },
  {
    title: 'Pizza Night',
    desc: 'A delicious treat for the family.',
    pts: 1000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWRVGsMe1Bx2m1bj_Epp1c0leeEcq0O0gM8aKXM9CAX38AnuiNhwZdAnQ4WW8LFtF5o3vChNXGIeq2MJCAPJ99WqTOsJblAo3FFEf8XLHM0Ob_Y5M9LY_tQzzpyyMdsCdXDCXxSx0jNVrvosMy93CBNElD0Wljy3kvn-lLh2Bx3x9rsXkhNhj349prRAX5gVSKPrYNw17aHZCeGOY8DFcUM-qQhzp_gYmsqyRG3JFX6SKsQH0BzrjCQZ6bUN6Ng8zHqQ9NCcnt97m7',
  },
];

const MINE = [
  {
    title: 'Movie Night',
    date: 'Redeemed on 03/15/2024',
    thumb:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2nhdYrxdtaCIYvvkodAaJZAgT_SwSpbvShZ7micd4JaIuE2KhSxaX-OMCMFqvnuY8KNZEmdw17Ve5aA1QWKRNBD68g-qkcLgd6cJAqlj_RpCLGc3bzPnMLBGQu2RHBWC_LYVr_p3cbBRl2LGMVmzn7y3L60br6Wn7Z8qjvLJ_eJL5DDKKR55GUc445t0t-WAlGDg-ftDyup6uF8X7v1_qJkK8NsxbBjEV-wQfJnwp1GnzG_lxDrIY0XV-xp5zefgaQ6q5O30FBagV',
  },
  {
    title: 'Pizza Night',
    date: 'Redeemed on 02/20/2024',
    thumb:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNuzSCqGs8rdS-BRX182CZrxL7sEeDrXmr1zs-ixtCD920IXefwUlOqySGgKhkEv-ao8uE6YUO1gcMl95sEmfLfMCtub5zmUOTM2CPZ2gPLxcfy5gNWFVo2QQRhgcha2SU-x4OJ2SlQodtdkGzcL_A-kx4VRbHZJGbuFTmAv084zlOCAew2wVIN_sR0pbOm0p_BOE4kOh16X5ENYhA85zkpO4YUGME1aKEHqorgxJiBTP70_FOvVk67jHh_wpkyU2HviunFWJaek-B',
  },
];

export default function RewardsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn} activeOpacity={0.85}>
          <Icon name="arrow_back" size={24} color={colors.secondary[700]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rewards</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Available Rewards */}
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Available Rewards</Text>
          <TouchableOpacity style={styles.addBtn} onPress={() => { /* router.push('/create-reward') */ }} activeOpacity={0.9}>
            <Icon name="add" size={18} color={colors.white} />
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: spacing.md, paddingRight: spacing.lg }}
          style={{ marginHorizontal: -spacing.lg, paddingHorizontal: spacing.lg }}
        >
          {AVAILABLE.map((r) => (
            <RewardCard key={r.title} reward={r} />
          ))}
        </ScrollView>

        {/* My Rewards */}
        <Text style={[styles.title, { marginTop: spacing.xl }]}>My Rewards</Text>
        <View style={{ gap: spacing.sm }}>
          {MINE.map((r) => (
            <TouchableOpacity key={r.title} style={styles.mineRow} activeOpacity={0.9}>
              <Image source={{ uri: r.thumb }} style={styles.mineThumb} />
              <View style={{ flex: 1 }}>
                <Text style={styles.mineTitle}>{r.title}</Text>
                <Text style={styles.mineDate}>{r.date}</Text>
              </View>
              <Icon name="chevron_right" size={20} color={colors.secondary[400]} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Tabs */}
      <TabBar active="rewards" />
    </SafeAreaView>
  );
}

function RewardCard({ reward }) {
  return (
    <View style={cardStyles.card}>
      <Image source={{ uri: reward.image }} style={cardStyles.hero} />
      <View style={cardStyles.body}>
        <Text style={cardStyles.cardTitle}>{reward.title}</Text>
        <Text style={cardStyles.cardDesc}>{reward.desc}</Text>
        <View style={cardStyles.footer}>
          <Text style={cardStyles.points}>{reward.pts} pts</Text>
          <TouchableOpacity style={cardStyles.redeemBtn} activeOpacity={0.9}>
            <Text style={cardStyles.redeemText}>Redeem</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f9fafb' }, // gray-50
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: spacing.lg, paddingTop: spacing.lg, paddingBottom: spacing.sm,
    backgroundColor: colors.white, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.secondary[200],
  },
  iconBtn: { width: 40, height: 40, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 20, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },

  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg, gap: spacing.lg },

  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 20, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },
  addBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingHorizontal: spacing.md, height: 36, borderRadius: 8, backgroundColor: colors.primary[600],
  },
  addText: { color: colors.white, fontSize: 14, fontFamily: typography.family.medium },

  mineRow: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
    backgroundColor: colors.white, padding: spacing.md, borderRadius: 12,
    borderWidth: 1, borderColor: colors.secondary[200], shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 },
  },
  mineThumb: { width: 64, height: 64, borderRadius: 8 },
  mineTitle: { fontSize: 16, fontWeight: '600', color: colors.secondary[900], fontFamily: typography.family.medium },
  mineDate: { fontSize: 13, color: colors.secondary[500] },
});

const cardStyles = StyleSheet.create({
  card: {
    width: 256, backgroundColor: colors.white, borderRadius: 12, overflow: 'hidden',
    borderWidth: 1, borderColor: colors.secondary[200], shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 3 },
  },
  hero: { width: '100%', height: 160 },
  body: { padding: spacing.md, gap: 4 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },
  cardDesc: { fontSize: 13, color: colors.secondary[500] },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing.sm },
  points: { fontSize: 14, fontWeight: '700', color: colors.primary[600], fontFamily: typography.family.bold },
  redeemBtn: { backgroundColor: colors.secondary[100], paddingHorizontal: spacing.md, height: 32, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  redeemText: { color: colors.secondary[800] || colors.secondary[700], fontSize: 13, fontFamily: typography.family.medium },
});
