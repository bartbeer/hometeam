// screens/OnboardingScreen.jsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Icon from '../components/Icon';
import TabBar from '../components/TabBar';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';


export default function OnboardingScreen() {

const router = useRouter();
    
return (
<SafeAreaView style={styles.safe}>
<StatusBar style="dark" />
<View style={styles.container}>
<View style={styles.main}>
<View style={styles.logoWrap}>
<Icon name="home_work" size={80} color={colors.primary[600]} />
</View>


<Text style={styles.title}>Welcome!</Text>


<Text style={styles.subtitle}>
Organize your household chores effortlessly. Create a new home or join an existing one to get started.
</Text>


<View style={styles.buttons}>
<Button title="Create Household" icon="add_home" variant="primary" onPress={() => router.push('/createHousehold')} />
<Button title="Join Household" icon="login" variant="secondary" onPress={() => router.push('/createHousehold')} />
</View>
</View>


<TabBar active="tasks"/>
</View>
</SafeAreaView>
);
}


const MIN_HEIGHT = Math.max(884, Dimensions.get('window').height);


const styles = StyleSheet.create({
safe: { flex: 1, backgroundColor: colors.secondary[50] },
container: {
flex: 1,
justifyContent: 'space-between',
minHeight: MIN_HEIGHT,
},
main: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
paddingHorizontal: spacing.xl,
},
logoWrap: { marginBottom: spacing.xxl },
title: {
fontSize: typography.size.xxl,
fontWeight: '700',
color: colors.secondary[900],
marginBottom: spacing.sm,
fontFamily: typography.family.bold,
textAlign: 'center',
},
subtitle: {
color: colors.secondary[500],
textAlign: 'center',
maxWidth: 480,
marginBottom: spacing.xxl,
fontSize: typography.size.base,
lineHeight: 22,
fontFamily: typography.family.regular,
},
buttons: { width: '100%', maxWidth: 360, gap: spacing.md },
});