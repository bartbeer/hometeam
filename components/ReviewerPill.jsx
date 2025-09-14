// components/ReviewerPill.jsx
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';


export default function ReviewerPill({ label, selected, onPress }) {
return (
<TouchableOpacity
onPress={onPress}
activeOpacity={0.9}
style={[styles.pill, selected && styles.selected]}
>
<Text style={[styles.text, selected && styles.textSelected]}>{label}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
pill: {
height: 44,
paddingHorizontal: spacing.lg,
borderRadius: 999,
borderWidth: 1,
borderColor: colors.secondary[300],
alignItems: 'center',
justifyContent: 'center',
backgroundColor: colors.white,
},
selected: {
borderWidth: 2,
borderColor: colors.primary[600],
backgroundColor: '#fef2f2', // primary-50
},
text: {
color: colors.secondary[800] || colors.secondary[700],
fontFamily: typography.family.medium,
fontSize: 14,
},
textSelected: {
color: colors.primary[600],
fontFamily: typography.family.bold,
},
});