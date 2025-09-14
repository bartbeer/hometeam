// screens/RoleManagementScreen.jsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

const ROLES = [
  { icon: 'admin_panel_settings', title: 'Admin', desc: 'Can manage roles, create tasks, and approve completed tasks.' },
  { icon: 'add_task', title: 'Task Creator', desc: 'Can create tasks.' },
  { icon: 'approval', title: 'Approver', desc: 'Can approve completed tasks.' },
  { icon: 'person', title: 'User', desc: 'Can complete tasks.' },
];

const MEMBERS = [
  {
    name: 'Ethan',
    role: 'Admin',
    roleColor: colors.primary[600],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqs3e-I0PL45hnz0PeGg_DloDENFw9-I-nULrxRLdCFiMwkt_It_ucuY8O5zeBfeoJqpySdhv1UYkPxeLfsUVQYZdqjA6vRhLbP00kw37oI0VjzRHO4exz5Stfd6mC44-pCrcFMgMsFBM63xSnhmpo_9RfbiAU9cPFemf2viBrHAMJKqtBEbfi7ftwik0ggLBf7XanmsS1_T_I8t9TFH3DTW-AIDKf1gIanrArgqOdRstw_qIJumrH215XpVnaPOKmXSWIE9LC33oW',
  },
  {
    name: 'Sophia',
    role: 'User',
    roleColor: colors.secondary[500],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmyK_KCp-d-x5RZAND0QgH7qemQZa9z8z3KGV8qpA9UbH_F7jYxzVlsIZMTRmSB0No_apXgd_MFcqs85LOgC6zXEiAfz1v6U8sLa3CoV967KxfvF8A1wnVlHzbIvbZbkgHTgd163PGulJPNzvL5XcEcuZP54-1yOEY_HfJR54zWpgn_QxC2OkaLaRpcrtrnERS4L84VvEGkJhpwQAGFENxt-rka43OIa5bTNdA-G6g2YAtLZmdReGXNPWJOYg8icXKS3Ld44UYZndo',
  },
  {
    name: 'Liam',
    role: 'Approver',
    roleColor: colors.secondary[500],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBgziS2-LwXKFC86-7MmW-irFpMCPg2FAy678Ulkv30FrEwZQPluTr6Bexgj36adkNRUMNXn9JbsZAAssB2Gq-H3A3wUzCF_rbOR6eirF4szDrm2z1F7NQruIx_vxgcAnsTY6JNAQRUandigNoKhlUqMHvX75QGLbVWfrhAgSk0fIGaKjXNTjJ3PoluHpEzqJOLl9t1vA1A3lh5rB0cLjZTyuWIwwBZGRMBwzWLjaFCss2c0hCu_0dsx_x3_6yFbq5BoW4IItGAs04',
  },
  {
    name: 'Olivia',
    role: 'Task Creator',
    roleColor: colors.secondary[500],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7eMlRyAtFc5aBkhVlyKSpKcgG3jz7euti9QJ28ATU1f3g9-_N1deFz-QHtttVYAbJoDofN4swInM7c_4aJyFl-L4fijqwf6dwhEYNEoeR5cGbIEXZc8avvkbOIjr0NQEydiDeUNBNaSijLSA6MNurgnUbcmQpRSJLU_YvRkUnOVj-CkIGYDrnVq5bBYfFz_-KLH9uvBZ2z8pMTwQyysnFU3XUjA4lQzi4w2leTy7f_1wn6pVgJ2PFV2fFAhXZcLvIGjveuCCvQnE2',
  },
];

export default function RoleManagementScreen() {
  const router = useRouter();

  const onSave = () => {
    // TODO: persist changes
    router.back();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()} activeOpacity={0.85}>
          <Icon name="arrow_back_ios_new" size={18} color={colors.secondary[700]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Roles</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Roles */}
        <Text style={styles.sectionTitle}>Roles</Text>
        <View style={{ gap: spacing.sm }}>
          {ROLES.map((r) => (
            <View key={r.title} style={styles.roleCard}>
              <View style={styles.roleIcon}>
                <Icon name={r.icon} size={26} color={colors.primary[600]} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.roleTitle}>{r.title}</Text>
                <Text style={styles.roleDesc}>{r.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Members */}
        <Text style={[styles.sectionTitle, { marginTop: spacing.lg }]}>Members</Text>
        <View style={{ gap: spacing.sm }}>
          {MEMBERS.map((m) => (
            <TouchableOpacity key={m.name} style={styles.memberRow} activeOpacity={0.85} onPress={() => { /* router.push(`/member/${id}`) */ }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
                <Image source={{ uri: m.avatar }} style={styles.avatar} />
                <View>
                  <Text style={styles.memberName}>{m.name}</Text>
                  <Text style={[styles.memberRole, { color: m.roleColor }]}>{m.role}</Text>
                </View>
              </View>
              <Icon name="chevron_right" size={20} color={colors.secondary[400]} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer actions (sticky) */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelBtn} activeOpacity={0.9} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} activeOpacity={0.9} onPress={onSave}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl, gap: spacing.md, paddingTop: spacing.md },

  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },

  roleCard: {
    flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start',
    backgroundColor: colors.white, borderRadius: 12, padding: spacing.md,
    borderWidth: 1, borderColor: colors.secondary[200], shadowColor: '#000',
    shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 },
  },
  roleIcon: { width: 48, height: 48, borderRadius: 999, backgroundColor: colors.primary[50], alignItems: 'center', justifyContent: 'center' },
  roleTitle: { fontSize: 16, fontWeight: '600', color: colors.secondary[900], fontFamily: typography.family.medium },
  roleDesc: { fontSize: 13, color: colors.secondary[600], marginTop: 2 },

  memberRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: colors.white, padding: spacing.md, borderRadius: 12,
    borderWidth: 1, borderColor: colors.secondary[200], shadowColor: '#000',
    shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 },
  },
  avatar: { width: 48, height: 48, borderRadius: 999 },
  memberName: { fontSize: 16, fontWeight: '600', color: colors.secondary[900], fontFamily: typography.family.medium },
  memberRole: { fontSize: 13, fontWeight: '600' },

  footer: {
    flexDirection: 'row', gap: spacing.md, padding: spacing.lg,
    backgroundColor: colors.white, borderTopWidth: 1, borderTopColor: colors.secondary[200],
  },
  cancelBtn: {
    flex: 1, height: 48, borderRadius: 12, backgroundColor: colors.secondary[100],
    alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.secondary[300],
  },
  cancelText: { color: colors.secondary[900], fontFamily: typography.family.bold, fontSize: 16 },
  saveBtn: { flex: 1, height: 48, borderRadius: 12, backgroundColor: colors.primary[600], alignItems: 'center', justifyContent: 'center' },
  saveText: { color: colors.white, fontFamily: typography.family.bold, fontSize: 16 },
});
