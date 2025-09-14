// components/ToggleRow.jsx
import { StyleSheet, Switch, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';


export default function ToggleRow({ label, value, onValueChange }) {
return (
<View style={styles.row}>
    <Text style={styles.text}>{label}</Text>
    <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.secondary[200], true: colors.primary[600] }}
        thumbColor={colors.white}
    />
</View>
);
}


const styles = StyleSheet.create({
row: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
backgroundColor: colors.white,
padding: spacing.lg,
borderRadius: 12,
borderWidth: 1,
borderColor: colors.secondary[200],
},
text: {
fontSize: 16,
color: colors.secondary[900],
fontFamily: typography.family.medium,
},
});