// components/SegmentedControl.jsx
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';


export default function SegmentedControl({ options, value, onChange }) {
return (
<View style={styles.wrap}>
{options.map((opt) => {
const active = value === opt.value;
return (
<TouchableOpacity
key={opt.value}
style={[styles.segment, active && styles.segmentActive]}
onPress={() => onChange(opt.value)}
activeOpacity={0.9}
>
<Text style={[styles.label, active && styles.labelActive]}>{opt.label}</Text>
</TouchableOpacity>
);
})}
</View>
);
}


const styles = StyleSheet.create({
wrap: {
height: 48,
backgroundColor: colors.secondary[100],
borderRadius: 999,
padding: 4,
flexDirection: 'row',
},
segment: {
flex: 1,
borderRadius: 999,
justifyContent: 'center',
alignItems: 'center',
},
segmentActive: {
backgroundColor: colors.white,
shadowColor: '#000',
shadowOpacity: 0.08,
shadowRadius: 8,
shadowOffset: { width: 0, height: 2 },
},
label: {
fontFamily: typography.family.medium,
fontSize: 14,
color: colors.secondary[500],
fontWeight: '700',
},
labelActive: {
color: colors.primary[600],
},
});