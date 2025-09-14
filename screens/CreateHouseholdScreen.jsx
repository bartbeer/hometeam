// screens/HouseholdScreen.jsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Icon from '../components/Icon';
import InputField from '../components/InputField';
import TabBar from '../components/TabBar';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export default function HouseholdScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [invite, setInvite] = useState('');

  const createHousehold = () => {
    // TODO: call API
    router.push('/tasks');
  };
  const joinHousehold = () => {
    // TODO: call API
    router.push('/tasks');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()} activeOpacity={0.85}>
          <Icon name="arrow_back_ios_new" size={20} color={colors.secondary[700]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Household</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Intro */}
        <View style={{ gap: spacing.xs }}>
          <Text style={styles.h1}>Set up your Household</Text>
          <Text style={styles.lead}>
            Create a new household to start managing chores, or join one using an invite code.
          </Text>
        </View>

        {/* Create */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Create a new Household</Text>
          <View style={{ marginTop: spacing.md, gap: spacing.md }}>
            <InputField
              label="Household Name"
              placeholder="Enter household name"
              value={name}
              onChangeText={setName}
            />
            <Button title="Create Household" variant="primary" onPress={createHousehold} />
          </View>
        </View>

        {/* Divider */}
        <View style={styles.dividerWrap}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Join */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Join an existing Household</Text>
          <View style={{ marginTop: spacing.md, gap: spacing.md }}>
            <InputField
              label="Invite Code"
              placeholder="Enter invite code"
              value={invite}
              onChangeText={setInvite}
              autoCapitalize="characters"
            />
            {/* soft/secondary look that matches app theme */}
            <TouchableOpacity style={styles.softBtn} activeOpacity={0.9} onPress={joinHousehold}>
              <Text style={styles.softBtnText}>Join Household</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom tabs (matches your HTML with Profile active) */}
      <TabBar active="profile" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f9fafb' }, // gray-50
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: spacing.lg, paddingTop: spacing.lg, paddingBottom: spacing.sm,
  },
  iconBtn: { width: 40, height: 40, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  headerTitle: {
    fontSize: 18, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold,
  },

  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg, gap: spacing.xl, paddingTop: spacing.xl },

  h1: { fontSize: 22, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },
  lead: { fontSize: 14, color: colors.secondary[600], lineHeight: 20 },

  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.secondary[200],
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: { fontSize: 16, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },

  dividerWrap: { flexDirection: 'row', alignItems: 'center' },
  dividerLine: { flex: 1, height: 1, backgroundColor: colors.secondary[300] },
  dividerText: { marginHorizontal: spacing.md, color: colors.secondary[500], fontWeight: '600' },

  softBtn: {
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary[50],
    borderWidth: 1,
    borderColor: colors.primary[100],
  },
  softBtnText: { color: colors.primary[700], fontFamily: typography.family.bold, fontSize: 16 },
});
