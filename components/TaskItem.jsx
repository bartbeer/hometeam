// components/TaskItem.jsx
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import Icon from './Icon';


export default function TaskItem({ icon, title, subtitle, initialDone = false }) {
const [done, setDone] = useState(initialDone);


return (
<View style={styles.card}>
<View style={styles.avatar}>
<Icon name={icon} size={24} color={colors.primary[600]} />
</View>
<View style={{ flex: 1 }}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.subtitle}>{subtitle}</Text>
</View>
<TouchableOpacity
style={[styles.check, done ? styles.checkOn : styles.checkOff]}
onPress={() => setDone(!done)}
activeOpacity={0.9}
>
{done ? <Icon name="check" size={20} color={colors.primary[600]} /> : null}
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
card: {
flexDirection: 'row',
alignItems: 'center',
gap: spacing.lg,
borderWidth: 1,
borderColor: colors.secondary[200],
backgroundColor: colors.white,
padding: spacing.lg,
borderRadius: 16,
},
avatar: {
width: 48,
height: 48,
borderRadius: 999,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: colors.primary[50],
},
title: {
fontSize: 16,
fontWeight: '700',
color: colors.secondary[900],
fontFamily: typography.family.bold,
},
subtitle: {
fontSize: 13,
color: colors.secondary[500],
marginTop: 2,
fontFamily: typography.family.regular,
},
check: {
width: 40,
height: 40,
borderRadius: 999,
alignItems: 'center',
justifyContent: 'center',
borderWidth: 2,
},
checkOff: {
borderColor: colors.secondary[200],
},
checkOn: {
borderColor: colors.primary[500],
backgroundColor: colors.primary[50],
},
});