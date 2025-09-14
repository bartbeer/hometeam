// screens/LoginScreen.jsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Icon from '../components/Icon';
import InputField from '../components/InputField';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const onLogin = () => {
    // TODO: auth
    router.push('/tasks');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {/* Logo & heading */}
          <View style={{ alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xxl }}>
            <Icon name="groups" size={64} color={colors.primary[600]} />
            <Text style={styles.h1}>Welcome to HomeTeam</Text>
            <Text style={styles.sub}>Let’s get you logged in.</Text>
          </View>

          {/* Form */}
          <View style={styles.card}>
            <View style={{ gap: spacing.md }}>
              <InputField label="Email" placeholder="you@example.com" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
              <InputField label="Password" placeholder="Your password" secureTextEntry value={pw} onChangeText={setPw} />
              <Button title="Log In" variant="primary" onPress={onLogin} />
            </View>
          </View>

          {/* Divider */}
          <View style={styles.dividerWrap}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social */}
          <View style={{ gap: spacing.md, width: '100%', maxWidth: 360 }}>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.9}>
              <Icon name="apple" size={20} color={colors.secondary[900]} />
              <Text style={styles.socialText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.9}>
              <Icon name="google" size={20} color={colors.secondary[900]} />
              <Text style={styles.socialText}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer actions */}
        <View style={styles.footer}>
          <Text style={styles.footerHint}>Don’t have an account?</Text>
          <View style={{ flexDirection: 'row', gap: spacing.md }}>
            <TouchableOpacity style={styles.outlineBtn} activeOpacity={0.9} onPress={() => {router.push('/onboarding') }}>
              <Text style={styles.outlineText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.softBtn} activeOpacity={0.9} onPress={() => router.push('/createHousehold')}>
              <Text style={styles.softText}>Join a Household</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f9fafb' },
  content: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    gap: spacing.lg,
  },
  h1: { fontSize: 24, fontWeight: '700', color: colors.secondary[900], fontFamily: typography.family.bold, textAlign: 'center' },
  sub: { fontSize: 14, color: colors.secondary[500], textAlign: 'center' },

  card: {
    width: '100%', maxWidth: 360,
    backgroundColor: colors.white, borderRadius: 16, padding: spacing.lg,
    borderWidth: 1, borderColor: colors.secondary[200],
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 },
  },

  dividerWrap: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginTop: spacing.lg, marginBottom: spacing.md, width: '100%', maxWidth: 360 },
  dividerLine: { flex: 1, height: 1, backgroundColor: colors.secondary[200] },
  dividerText: { color: colors.secondary[500], fontWeight: '600' },

  socialBtn: {
    height: 48, borderRadius: 999, borderWidth: 1, borderColor: colors.secondary[200],
    backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row', gap: spacing.sm, alignSelf: 'center', width: '100%', maxWidth: 360,
  },
  socialText: { color: colors.secondary[800] || colors.secondary[700], fontFamily: typography.family.medium },

  footer: {
    borderTopWidth: 1, borderTopColor: colors.secondary[200], backgroundColor: colors.white,
    padding: spacing.lg, alignItems: 'center', gap: spacing.md,
  },
  footerHint: { fontSize: 12, color: colors.secondary[600] },

  outlineBtn: {
    height: 48, flex: 1, borderRadius: 999, borderWidth: 1, borderColor: colors.secondary[300],
    backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center',
  },
  outlineText: { color: colors.secondary[900], fontSize: 14, fontFamily: typography.family.bold },

  softBtn: {
    height: 48, flex: 1, borderRadius: 999, backgroundColor: '#f3f4f6', // gray-100
    alignItems: 'center', justifyContent: 'center',
  },
  softText: { color: colors.secondary[900], fontSize: 14, fontFamily: typography.family.bold },
});
