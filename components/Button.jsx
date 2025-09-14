// components/Button.jsx
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import Icon from './Icon';


export default function Button({ title, onPress, icon, variant = 'primary' }) {
const isPrimary = variant === 'primary';
return (
<TouchableOpacity onPress={onPress} activeOpacity={0.85} style={[styles.base, isPrimary ? styles.primary : styles.secondary]}>
<View style={styles.inner}>
{icon ? (
<Icon
name={icon}
size={22}
color={isPrimary ? colors.white : colors.secondary[700]}
/>
) : null}
<Text style={[styles.text, { color: isPrimary ? colors.white : colors.secondary[700], fontFamily: typography.family.bold }]}>
{title}
</Text>
</View>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
base: {
width: '100%',
paddingVertical: spacing.xl,
paddingHorizontal: spacing.lg,
borderRadius: 999,
shadowColor: '#000',
shadowOpacity: 0.15,
shadowRadius: 8,
shadowOffset: { width: 0, height: 4 },
elevation: 3,
},
inner: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
gap: spacing.sm,
},
primary: {
backgroundColor: colors.primary[600],
},
secondary: {
backgroundColor: colors.secondary[200],
},
text: {
fontSize: typography.size.base,
fontWeight: '700',
},
});