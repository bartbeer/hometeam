// screens/InvitationScreen.jsx
import * as Clipboard from 'expo-clipboard';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Icon from '../components/Icon';
import InputField from '../components/InputField';
import TabBar from '../components/TabBar';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

const INVITE_LINK = 'https://chores.app/invite/aB1c2D3e';
const QR_SRC = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh3nvK7FM5DZfSjrZS278_AuqeWL9P3zxn-aqwD6zT5QeZicSmamY1PBLwfpMaamDbZq6mQu2ABK8w6rNcAnj1k3ABQS82GYgTZeT9Za83TRcAeMKg_MfGURXL9h1VYe9PdtLQmIvijlmvBwSPWjsWlgyKup8V_XSp27VPOFkbh23rggcqf5tBU9OwANbFb-xoE_BhVNOk6tL9zu8m_tNXW9ZngwmIAscpW4NGaUMyv7tY4RWFIWsZDN2wYqXp8oRk91woIPAsglR1';

export default function InvitationScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const copyLink = async () => {
    await Clipboard.setStringAsync(INVITE_LINK);
    Alert.alert('Copied', 'Invite link copied to clipboard.');
  };

  const sendInvite = () => {
    if (!email.trim()) return Alert.alert('Email required', 'Please enter an email address.');
    // TODO: send invite via API
    Alert.alert('Invite sent', `We sent an invite to ${email}.`);
    setEmail('');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()} activeOpacity={0.85}>
            <Icon name="arrow_back" size={22} color={colors.secondary[700]} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Invite Members</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {/* Share Link */}
          <View style={{ gap: spacing.xs }}>
            <Text style={styles.h2}>Share Link</Text>
            <Text style={styles.help}>Copy a link and send it to your friends.</Text>
            <View style={styles.copyRow}>
              <View style={styles.linkBox}>
                <Text style={styles.linkText} numberOfLines={1}>{INVITE_LINK}</Text>
              </View>
              <TouchableOpacity style={styles.copyBtn} onPress={copyLink} activeOpacity={0.9}>
                <Icon name="content_copy" size={18} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>

          {/* QR Code */}
          <View style={{ gap: spacing.xs }}>
            <Text style={styles.h2}>QR Code</Text>
            <Text style={styles.help}>Let them scan the QR code to join.</Text>
            <View style={styles.qrCard}>
              <Image source={{ uri: QR_SRC }} style={styles.qrImg} resizeMode="cover" />
            </View>
          </View>

          {/* Invite by Email */}
          <View style={{ gap: spacing.xs }}>
            <Text style={styles.h2}>Invite by Email</Text>
            <Text style={styles.help}>Enter an email address to send an invitation.</Text>
            <View style={{ gap: spacing.md }}>
              <InputField label="Email Address" placeholder="name@example.com" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
              <Button title="Send Invite" variant="primary" onPress={sendInvite} />
            </View>
          </View>
        </ScrollView>

        {/* Bottom Tabs (Profile active like your HTML) */}
        <TabBar active="profile" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f9fafb' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.lg, paddingTop: spacing.lg, paddingBottom: spacing.sm, backgroundColor: '#f9fafb' },
  iconBtn: { width: 40, height: 40, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },

  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl, gap: spacing.xl, paddingTop: spacing.lg },

  h2: { fontSize: 18, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold },
  help: { color: colors.secondary[500], fontSize: 14 },

  copyRow: { flexDirection: 'row', alignItems: 'stretch', gap: 0, marginTop: spacing.sm },
  linkBox: {
    flex: 1, height: 48, borderTopLeftRadius: 12, borderBottomLeftRadius: 12,
    borderWidth: 1, borderColor: colors.secondary[300], backgroundColor: colors.white,
    justifyContent: 'center', paddingHorizontal: spacing.md,
  },
  linkText: { color: colors.secondary[900], fontSize: 14 },

  copyBtn: {
    height: 48, width: 52, alignItems: 'center', justifyContent: 'center',
    borderTopRightRadius: 12, borderBottomRightRadius: 12, backgroundColor: colors.primary[600],
  },

  qrCard: {
    marginTop: spacing.sm, borderRadius: 12, backgroundColor: colors.white,
    borderWidth: 1, borderColor: colors.secondary[200], padding: spacing.lg, alignItems: 'center',
  },
  qrImg: { width: 260, height: 260, borderRadius: 8 },

  // Email block spacing handled inline
});
