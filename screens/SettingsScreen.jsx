// screens/SettingsScreen.jsx
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export default function SettingsScreen() {
  const router = useRouter();

  const [theme, setTheme] = useState('system');
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailDigest, setEmailDigest] = useState('weekly');
  const [autoAssignOpen, setAutoAssignOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()} activeOpacity={0.85}>
          <Icon name="arrow_back" size={22} color={colors.secondary[700]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Account */}
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.card}>
          <RowItem
            icon="person"
            label="Profile"
            detail="Edit name & avatar"
            onPress={() => router.push('/profile')}
          />
          <Separator />
          <RowItem
            icon="leaderboard"
            label="Household"
            detail="Switch household"
            onPress={() => {}}
          />
        </View>

        {/* Preferences */}
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.card}>
          <FieldLabel label="App Theme" />
          <FieldBox>
            <Picker selectedValue={theme} onValueChange={setTheme} style={{ width: '100%' }}>
              <Picker.Item label="System" value="system" />
              <Picker.Item label="Light" value="light" />
              <Picker.Item label="Dark" value="dark" />
            </Picker>
          </FieldBox>

          <View style={{ height: spacing.md }} />

          <FieldLabel label="Email Digest" />
          <FieldBox>
            <Picker selectedValue={emailDigest} onValueChange={setEmailDigest} style={{ width: '100%' }}>
              <Picker.Item label="Never" value="never" />
              <Picker.Item label="Daily" value="daily" />
              <Picker.Item label="Weekly" value="weekly" />
            </Picker>
          </FieldBox>
        </View>

        {/* Notifications */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.card}>
          <ToggleRow label="Push notifications" value={pushEnabled} onValueChange={setPushEnabled} />
          <View style={{ height: spacing.sm }} />
          <ToggleRow label="Auto-assign open tasks to me" value={autoAssignOpen} onValueChange={setAutoAssignOpen} />
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.card}>
          <RowItem icon="info" label="Version" detail="1.0.0" onPress={() => {}} />
          <Separator />
          <RowItem icon="privacy_tip" label="Privacy Policy" onPress={() => {}} />
          <Separator />
          <RowItem icon="help" label="Help & Support" onPress={() => {}} />
        </View>

        {/* Danger Zone */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.dangerBtn}
            onPress={() =>
              Alert.alert('Sign out', 'Are you sure you want to sign out?', [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Sign out', style: 'destructive', onPress: () => {} },
              ])
            }
            activeOpacity={0.9}
          >
            <Icon name="logout" size={20} color={colors.white} />
            <Text style={styles.dangerText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function FieldLabel({ label }) {
  return (
    <Text style={{ fontSize: 14, color: colors.secondary[700], marginBottom: 6, fontFamily: typography.family.medium }}>
      {label}
    </Text>
  );
}

function FieldBox({ children }) {
  return (
    <View
      style={{
        height: 56,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.secondary[300],
        backgroundColor: colors.white,
        justifyContent: 'center',
        paddingHorizontal: spacing.lg,
      }}
    >
      {children}
    </View>
  );
}

function ToggleRow({ label, value, onValueChange }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 16, color: colors.secondary[900], fontFamily: typography.family.medium }}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.secondary[200], true: colors.primary[600] }}
        thumbColor={colors.white}
      />
    </View>
  );
}

function RowItem({ icon, label, detail, onPress }) {
  return (
    <TouchableOpacity style={rowStyles.row} onPress={onPress} activeOpacity={0.85}>
      <View style={rowStyles.left}>
        <View style={rowStyles.iconBubble}>
          <Icon name={icon} size={20} color={colors.secondary[700]} />
        </View>
        <Text style={rowStyles.label}>{label}</Text>
      </View>
      <View style={rowStyles.right}>
        {detail ? <Text style={rowStyles.detail}>{detail}</Text> : null}
        <Icon name="chevron_right" size={20} color={colors.secondary[400]} />
      </View>
    </TouchableOpacity>
  );
}

function Separator() {
  return <View style={{ height: 1, backgroundColor: colors.secondary[200], marginVertical: spacing.sm }} />;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f9fafb' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: spacing.lg, paddingTop: spacing.lg, paddingBottom: spacing.sm,
  },
  iconBtn: { width: 40, height: 40, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl, gap: spacing.lg },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: colors.secondary[600], marginTop: spacing.md },
  card: {
    backgroundColor: colors.white, borderRadius: 12, padding: spacing.md,
    borderWidth: 1, borderColor: colors.secondary[200], gap: spacing.md,
  },
  dangerBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: spacing.sm, height: 48, borderRadius: 999, backgroundColor: colors.primary[600],
  },
  dangerText: { color: colors.white, fontSize: 16, fontFamily: typography.family.bold },
});

const rowStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  left: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  right: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  iconBubble: { width: 40, height: 40, borderRadius: 999, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.secondary[100] },
  label: { fontSize: 16, color: colors.secondary[900], fontFamily: typography.family.medium },
  detail: { fontSize: 12, color: colors.secondary[500] },
});
