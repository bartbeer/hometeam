// screens/TasksScreen.jsx
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FilterChip from '../components/FilterChip';
import Icon from '../components/Icon';
import SegmentedControl from '../components/SegmentedControl';
import TabBar from '../components/TabBar';
import TaskItem from '../components/TaskItem';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';


export default function TasksScreen() {
const [segment, setSegment] = useState('Assigned');
const router = useRouter();

return (
<SafeAreaView style={styles.safe}>
<StatusBar style="dark" />
<View style={styles.wrap}>
{/* Header */}
<View style={styles.header}>
<View style={{ width: 40 }} />
<Text style={styles.headerTitle}>Tasks</Text>
<TouchableOpacity style={styles.addBtn} activeOpacity={0.85} onPress={() => router.push('/create-task')}>
    <Icon name="add" size={22} color={colors.secondary[900]} />
</TouchableOpacity>
</View>


<ScrollView contentContainerStyle={styles.content}>
{/* Segmented control */}
<SegmentedControl
options={[
{ label: 'Assigned', value: 'Assigned' },
{ label: 'Open', value: 'Open' },
{ label: 'Review', value: 'Review' },
]}
value={segment}
onChange={setSegment}
/>


{/* Filters */}
<View style={styles.filters}>
<FilterChip label="Category" />
<FilterChip label="Due Date" />
<FilterChip label="Priority" />
</View>


{/* Tasks */}
<View style={styles.list}>
<TaskItem icon="local_dining" title="Clean the dishes" subtitle="Kitchen" />
<TaskItem icon="cleaning_services" title="Vacuum the floor" subtitle="Living Room" initialDone />
<TaskItem icon="shower" title="Clean the toilet" subtitle="Bathroom" />
</View>
</ScrollView>


{/* Footer */}
<TabBar active="tasks" />
</View>
</SafeAreaView>
);
}


const styles = StyleSheet.create({
safe: { flex: 1, backgroundColor: '#f9fafb' }, // gray-50
wrap: { flex: 1 },
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
paddingHorizontal: spacing.lg,
paddingTop: spacing.lg,
paddingBottom: spacing.sm,
},
headerTitle: {
fontSize: 20,
fontWeight: '700',
color: colors.secondary[900],
fontFamily: typography.family.bold,
},
addBtn: {
width: 40,
height: 40,
}
});