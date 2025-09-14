// components/InputField.jsx
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';


export default function InputField({ label, multiline = false, ...props }) {
return (
<View style={styles.wrap}>
{label ? <Text style={styles.label}>{label}</Text> : null}
<TextInput
style={[styles.input, multiline && styles.textarea]}
placeholderTextColor={colors.secondary[400]}
multiline={multiline}
{...props}
/>
</View>
);
}


const styles = StyleSheet.create({
wrap: { gap: 6 },
label: {
fontSize: 14,
color: colors.secondary[700],
fontFamily: typography.family.medium,
},
input: {
minHeight: 56,
borderRadius: 12,
borderWidth: 1,
borderColor: colors.secondary[300],
backgroundColor: colors.white,
paddingHorizontal: spacing.lg,
paddingVertical: spacing.sm,
fontSize: 16,
color: colors.secondary[900],
fontFamily: typography.family.regular,
},
textarea: {
minHeight: 140,
textAlignVertical: 'top',
},
});