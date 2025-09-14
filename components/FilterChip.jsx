// components/FilterChip.jsx
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import Icon from './Icon';


export default function FilterChip({ label, onPress }) {
return (
<TouchableOpacity style={styles.chip} onPress={onPress} activeOpacity={0.85}>
<Text style={styles.text}>{label}</Text>
<Icon name="expand_more" size={18} color={colors.secondary[500]} />
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
chip: {
height: 36,
flexDirection: 'row',
alignItems: 'center',
gap: spacing.xs,
paddingLeft: spacing.lg,
paddingRight: spacing.md,
borderRadius: 999,
borderWidth: 1,
borderColor: colors.secondary[200],
backgroundColor: colors.white,
},
text: {
fontSize: 14,
color: colors.secondary[700],
fontFamily: typography.family.medium,
},
});