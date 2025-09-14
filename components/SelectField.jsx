// components/SelectField.jsx
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';


export default function SelectField({ label, selectedValue, onValueChange, items = [] }) {
return (
<View style={styles.wrap}>
{label ? <Text style={styles.label}>{label}</Text> : null}
<View style={styles.box}>
<Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker}>
{items.map((it) => (
<Picker.Item key={it.value} label={it.label} value={it.value} />
))}
</Picker>
</View>
</View>
);
}


const styles = StyleSheet.create({
wrap: { gap: 6, flex: 1 },
label: {
fontSize: 14,
color: colors.secondary[700],
fontFamily: typography.family.medium,
},
box: {
height: 56,
borderRadius: 12,
borderWidth: 1,
borderColor: colors.secondary[300],
backgroundColor: colors.white,
justifyContent: 'center',
},
picker: { width: '100%' },
});