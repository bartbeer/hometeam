// screens/LeaderboardScreen.jsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import SegmentedControl from '../components/SegmentedControl';
import TabBar from '../components/TabBar';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export default function LeaderboardScreen() {
const router = useRouter();
const [period, setPeriod] = useState('Weekly');


const top3 = [
    { name: 'Sophia', pts: 1150, place: 2, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZfmPV8cARwaQkyK9VTjTrsEw0kzkjUsU2-Dqv_jrIfZMps997KviYfKMmVptKFFxgMYk59M_wV5LUJ04fjHdcb_XvBYdtQQcKS99GBzH3qjwPEnzyWL24tTo-PoLjIEHcBdqA6h8CpK7lIWfp1hqotaidHSBuOtIw4MEtaG3pBu_tNgFalFxdAmT7LrnOQzBa5dK0kKwhi9fDc0Gwm8AIuWEBZ8j5RKTuVkev7m4AIoh77GXH32DB0wMAVNxLLnzFq2rqUgT0uHjh' },
    { name: 'Ethan', pts: 1200, place: 1, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeXtndmZfYVcHtK7tN39TWuHPDmsfxccoBBB1eWoY5xdCu2cLkKUj8tcal_aYwSKsXMHzImXcbx2tDsHIDqESTDmhKNnUzpqIrPCp8a5MOk4XEDsJIK-LJJ0XicZ5Fh8PU_PJeXJLCb3xeofPNzlFLLY0VOCctKrESk7FA9W9l5QQTjhxTGlgvhPcFwjj5GdsZ6PQikl8QtnYNiVd-QfCHyPVDEwjG7uLBUVUq1jD_yC1_1wIsf3b0CiMatfWiV50Eqdt1hGFpRqKr' },
    { name: 'Liam', pts: 1000, place: 3, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHLLYd6PrMLRgbrwspaKNO7JZfHL81-S6vOfzhGoeuNaQRrl7JJNE9e6a8uUU5ks9m14A_LofezxX1ZAN_CfbdgXNEVAwx2PEJHLoaa1SSF7LgUtre3_K_kEIt7BhwVddgnhm4ZVVrjGNwozBLFFfcWvQHRQ9jDRMgzDT3eNpFsx1oNIMCgrKFGVan1ca704Te25qvOlCt7t5EnCBhWjFunaOOvHk1mtG2RO1G-iO0dtGcOnOb5C_zWHRuvYVAmZ2jr2-sKTw_0WJL' },
];


const rest = [
    { place: 4, name: 'Olivia', pts: 950, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4fj1X8pAVpeD-Q9peBy-dYXWcEc8mpXF70FQroaTkLB4q80pcHG9l2TDF0qg16ExkTten0I_aH4NOWpfJhmSHXyoJsIYbm-oLj-FaptcfQXnfYRr1yIFk9zba4Ohe3E53dTigSaWxRQ2tO0Qrdhp4uGlFPZZ-l_AMyxfQTnUwmli7jqS2RvPkuWyR_XGUqYO6GWi96x29OjB31cLbePNjAuDaelFIZz_Va2sEobNisH5-e8UC1yZKSqTXqJNCymWg2Hrb5CncMCp7' },
    { place: 5, name: 'Noah', pts: 800, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOBmsx0EHu-ZB9Ndfntw-mGGgDaqCBP0zdB2JV4Za57OY5NdTKn3fOo3m7sS0IaL0G3QuVlT-3AZABn0TyHLf_17_HV-OT6GwJEFNGAdZ_Ft009zrDRqfUAUTkSxGSTlTbR7BMf-D8cOfRbBmM1Byo1IcQ-wxAuOodQGyzmMCORzE9R7FUKYtzBoBPnFE4_70RIL683my5Egsvz89nt1scPXd3cpjrzblxD2qGn0ZaQQ6WGdBs00ErSvIJKlc-8aGunB5D5zF0LyzA' },
];

return (
    <SafeAreaView style={styles.safe}>
    <StatusBar style="dark" />


    {/* Header */}
    <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
            <Icon name="arrow_back" size={22} color={colors.secondary[700]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <View style={{ width: 40 }} />
    </View>


    <ScrollView contentContainerStyle={styles.content}>
    {/* Period segmented control */}
        <SegmentedControl
            options={[
                { label: 'Weekly', value: 'Weekly' },
                { label: 'Seasonal', value: 'Seasonal' },
                { label: 'All-Time', value: 'All-Time' },
            ]}
            value={period}
            onChange={setPeriod}
        />

    {/* Podium */}
    <View style={styles.podiumRow}>
        {top3.map((p, idx) => (
        <View key={p.name} style={styles.podiumItem}>
            <View style={{ position: 'relative', alignItems: 'center' }}>
                <Image source={{ uri: p.avatar }} style={[styles.avatar, idx === 1 && styles.avatarGold]} />
                <View style={[styles.placeBadge, idx === 1 && styles.placeGold, idx === 0 && styles.placeSilver, idx === 2 && styles.placeBronze]}>
                    <Text style={[styles.placeText, idx === 1 && { color: 'white' }]}>{p.place}</Text>
                </View>
            </View>
            <Text style={styles.name}>{p.name}</Text>
            <Text style={styles.points}>{p.pts} pts</Text>
        </View>
        ))}
    </View>

    {/* Rest of list */}
    <View style={{ gap: spacing.sm }}>
        {rest.map((r) => (
        <View key={r.place} style={styles.rowCard}>
            <Text style={styles.rank}>{r.place}</Text>
            <Image source={{ uri: r.avatar }} style={styles.rowAvatar} />
            <View style={{ flex: 1 }}>
                <Text style={styles.rowName}>{r.name}</Text>
                <Text style={styles.rowPts}>{r.pts} points</Text>
            </View>
            <Icon name="chevron_right" size={20} color={colors.secondary[400]} />
        </View>
        ))}
    </View>

    {/* Streaks & Badges */}
        <View style={{ paddingTop: spacing.xl }}>
            <Text style={styles.sectionTitle}>Streaks & Badges</Text>
            <View style={{ gap: spacing.sm }}>
                <View style={styles.rowCard}>
                    <View style={[styles.badgeIcon, { backgroundColor: '#fee2e2' }]}>
                        <Icon name="local_fire_department" size={28} color={colors.primary[500]} />
                    </View>
                    <Text style={[styles.rowName, { flex: 1 }]}>3-Day Streak</Text>
                    <Icon name="chevron_right" size={20} color={colors.secondary[400]} />
                </View>
                <View style={styles.rowCard}>
                    <View style={[styles.badgeIcon, { backgroundColor: '#fef3c7' }]}>
                        <Icon name="military_tech" size={28} color={'#f59e0b'} />
                    </View>
                    <Text style={[styles.rowName, { flex: 1 }]}>Cleanliness Champion</Text>
                    <Icon name="chevron_right" size={20} color={colors.secondary[400]} />
                </View>
            </View>
        </View>
    </ScrollView>

        <TabBar active="leaderboard" />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
safe: { 
    flex: 1, 
    backgroundColor: '#f9fafb' 
},
header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg, 
    paddingTop: spacing.lg, 
    paddingBottom: spacing.sm,
    backgroundColor: '#f9fafb',
},
iconBtn: {
    width: 40, 
    height: 40, 
    borderRadius: 999, 
    alignItems: 'center', 
    justifyContent: 'center',
},
headerTitle: {
    fontSize: 18, 
    fontWeight: '700', 
    color: colors.secondary[900], 
    fontFamily: typography.family.bold,
},
content: { 
    paddingHorizontal: spacing.lg, 
    paddingBottom: spacing.lg, 
    gap: spacing.lg 
},
podiumRow: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    gap: spacing.lg, 
    paddingVertical: spacing.lg 
},
podiumItem: { 
    alignItems: 'center', 
    gap: 6 
},
avatar: { 
    width: 80, 
    height: 80, 
    borderRadius: 999, 
    borderWidth: 4, 
    borderColor: '#cbd5e1' 
},
avatarGold: { 
    width: 96, 
    height: 96, 
    borderColor: '#facc15' 
},
placeBadge: { 
    position: 'absolute', 
    bottom: -10, 
    left: '50%', 
    transform: [{ translateX: -16 }], 
    width: 32, 
    height: 32, 
    borderRadius: 999, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#e5e7eb' 
},
placeGold: { 
    width: 40, 
    height: 40, 
    bottom: -14, 
    backgroundColor: '#facc15' 
},
placeSilver: { 
    backgroundColor: '#cbd5e1' 
},
placeBronze: { 
    backgroundColor: '#fb923c' 
},
placeText: { 
    fontWeight: '700', 
    color: '#334155' 
},
name: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: colors.secondary[800], 
    fontFamily: typography.family.medium 
},
points: { 
    fontSize: 13, 
    color: colors.secondary[500], 
    fontFamily: typography.family.regular 
},
rowCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: spacing.md, 
    backgroundColor: colors.white, 
    padding: spacing.md, 
    borderRadius: 12, 
    borderWidth: StyleSheet.hairlineWidth, 
    borderColor: colors.secondary[200], 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 8, 
    shadowOffset: { width: 0, height: 2 } 
},
rank: { 
    width: 24, 
    textAlign: 'center', 
    fontSize: 16, 
    fontWeight: '700', 
    color: colors.secondary[500] 
},
rowAvatar: { 
    width: 48, 
    height: 48, 
    borderRadius: 999 
},
rowName: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: colors.secondary[900], 
    fontFamily: typography.family.medium 
},
rowPts: { 
    fontSize: 13, 
    color: colors.secondary[400] 
},
sectionTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: colors.secondary[900], 
    marginBottom: spacing.md, 
    fontFamily: typography.family.bold 
},
});