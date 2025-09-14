import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import InputField from '../components/InputField';
import ReviewerPill from '../components/ReviewerPill';
import SelectField from '../components/SelectField';
import ToggleRow from '../components/ToggleRow';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

const FOOTER_H = 72; // used to pad scroll area so footer doesn't overlap

export default function CreateTaskScreen() {
const router = useRouter();
const insets = useSafeAreaInsets();
const { width } = useWindowDimensions();
const isSmall = width < 380;

const [title, setTitle] = useState('');
const [desc, setDesc] = useState('');
const [category, setCategory] = useState('kitchen');
const [points, setPoints] = useState('');
const [openTask, setOpenTask] = useState(false);
const [assignTask, setAssignTask] = useState(true);
const [reviewer, setReviewer] = useState('Sophia');


const [dt, setDt] = useState(new Date());
// iOS: single picker; Android: 2-step (date then time)
const [showIOSPicker, setShowIOSPicker] = useState(false);
const [showDate, setShowDate] = useState(false);
const [showTime, setShowTime] = useState(false);


const [recurrence, setRecurrence] = useState('never');


const formatDT = (d) => {
return d.toLocaleString(undefined, {
year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
});
};


const createTask = () => {
// For now, just navigate back; you can wire this to state/server later
router.back();
};

// --- Android: 2-step handlers ---
const onChangeDate = (event, selectedDate) => {
    if (event?.type === 'dismissed') {
        setShowDate(false);
        return;
    }
    setShowDate(false);
    const picked = selectedDate || dt;
    // preserve current time when date changes
    const merged = new Date(
        picked.getFullYear(), picked.getMonth(), picked.getDate(), dt.getHours(), dt.getMinutes()
    );
    setDt(merged);
    // then open time picker
    setShowTime(true);
};

const onChangeTime = (event, selectedTime) => {
    if (event?.type === 'dismissed') {
        setShowTime(false);
        return;
    }
    setShowTime(false);
    const picked = selectedTime || dt;
    const merged = new Date(
        dt.getFullYear(), dt.getMonth(), dt.getDate(), picked.getHours(), picked.getMinutes()
    );
    setDt(merged);
};

return (
<SafeAreaView style={styles.safe}>
    <StatusBar style="dark" />
    {/* Header */}
    <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
            <Icon name="close" size={22} color={colors.secondary[900]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Task</Text>
        <View style={{ width: 40 }} />
    </View>   

    <ScrollView 
        showsVerticalScrollIndicator
        style ={{ flex: 1 }}
        contentContainerStyle={[styles.content, { paddingBottom: FOOTER_H + insets.bottom + spacing.lg }]}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
        >
        <InputField label="Task Title" placeholder="e.g., Clean the kitchen" value={title} onChangeText={setTitle} />
        <InputField
            label="Description"
            placeholder="e.g., Wipe counters, sweep floor, take out trash."
            value={desc}
            onChangeText={setDesc}
            multiline
        />

        <View style={styles.twoCol}>
            <SelectField
                label="Category"
                selectedValue={category}
                onValueChange={setCategory}
                items={[
                    { label: 'Kitchen', value: 'kitchen' },
                    { label: 'Bathroom', value: 'bathroom' },
                    { label: 'Living Room', value: 'living' },
                    { label: 'Yard', value: 'yard' },
                ]}
            />
            <InputField
                label="Points"
                placeholder="e.g., 50"
                value={points}
                onChangeText={setPoints}
                keyboardType="number-pad"
            />
        </View>   

        {/* Due Date/Time */}
        <View style={{ gap: 6 }}>
            <Text style={styles.fieldLabel}>Due Date/Time</Text>
            <TouchableOpacity
                style={styles.dateBtn}
                onPress={() => {
                    if (Platform.OS === 'android') setShowDate(true);
                    else setShowIOSPicker(true);
                }}
                activeOpacity={0.9}
            >
                <Text style={styles.dateText}>{formatDT(dt)}</Text>
            </TouchableOpacity>


            {/* iOS unified picker */}
            {Platform.OS === 'ios' && showIOSPicker && (
                <DateTimePicker
                    value={dt}
                    mode="datetime"
                    display="spinner"
                    onChange={(event, date) => {
                        if (event?.type === 'dismissed') return setShowIOSPicker(false);
                        if (date) setDt(date);
                    }}
                    onTouchCancel={() => setShowIOSPicker(false)}
                />
            )}


            {/* Android: date then time */}
            {Platform.OS === 'android' && showDate && (
                <DateTimePicker value={dt} mode="date" onChange={onChangeDate} />
            )}
            {Platform.OS === 'android' && showTime && (
                <DateTimePicker value={dt} mode="time" onChange={onChangeTime} />
            )}
        </View>  

        {/* Recurrence */}
        <SelectField
            label="Recurrence"
            selectedValue={recurrence}
            onValueChange={setRecurrence}
            items={[
                { label: 'Never', value: 'never' },
                { label: 'Daily', value: 'daily' },
                { label: 'Weekly', value: 'weekly' },
                { label: 'Monthly', value: 'monthly' },
            ]}
        />

        {/* Toggles */}
        <ToggleRow label="Open Task" value={openTask} onValueChange={setOpenTask} />
        <ToggleRow label="Assign Task" value={assignTask} onValueChange={setAssignTask} />

        {/* Reviewer */}
        <View style={{ gap: spacing.sm, paddingTop: spacing.xs }}>
            <Text style={styles.sectionTitle}>Reviewer</Text>
            <View style={styles.pillsWrap}>
                {['Ethan', 'Sophia', 'Liam', 'Olivia'].map((name) => (
                    <ReviewerPill key={name} label={name} selected={reviewer === name} onPress={() => setReviewer(name)} />
            ))}
            </View>
        </View>
    </ScrollView>

    {/* Footer */}
    <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn} onPress={createTask} activeOpacity={0.9}>
            <Text style={styles.primaryText}>Create Task</Text>
        </TouchableOpacity>
    </View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
safe: { flex: 1, backgroundColor: '#f9fafb' }, // gray-50
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
paddingHorizontal: spacing.lg,
paddingTop: spacing.lg,
paddingBottom: spacing.sm,
},
iconBtn: {
width: 40,
height: 40,
borderRadius: 999,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#e5e7eb', // gray-200
},
headerTitle: {
fontSize: 20,
fontWeight: '700',
color: colors.secondary[900],
fontFamily: typography.family.bold,
flex: 1,
textAlign: 'center',
paddingRight: 10,
},
content: {
padding: spacing.lg,
gap: spacing.lg,
paddingBottom: spacing.xxl + 24,
},
twoCol: {
flexDirection: 'row',
gap: spacing.lg,
},
fieldLabel: {
fontSize: 14,
color: colors.secondary[700],
fontFamily: typography.family.medium,
},
dateBtn: {
height: 56,
borderRadius: 12,
borderWidth: 1,
borderColor: colors.secondary[300],
backgroundColor: colors.white,
justifyContent: 'center',
paddingHorizontal: spacing.lg,
},
dateText: {
fontSize: 16,
color: colors.secondary[900],
fontFamily: typography.family.regular,
},
sectionTitle: {
fontSize: 18,
fontWeight: '700',
color: colors.secondary[900],
fontFamily: typography.family.bold,
},
pillsWrap: {
flexDirection: 'row',
flexWrap: 'wrap',
gap: spacing.sm,
},
footer: {
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
backgroundColor: 'rgba(255,255,255,0.7)',
padding: spacing.lg,
},
primaryBtn: {
height: FOOTER_H - spacing.md,
borderRadius: 999,
backgroundColor: colors.primary[600],
alignItems: 'center',
justifyContent: 'center',
shadowColor: '#ef4444',
shadowOpacity: 0.3,
shadowRadius: 12,
shadowOffset: { width: 0, height: 6 },
},
primaryText: {
color: colors.white,
fontSize: 18,
fontFamily: typography.family.bold,
},
});       