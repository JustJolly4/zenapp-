import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const THEME_OPTIONS = [
  { key: 'forest', label: 'Forest' },
  { key: 'ocean', label: 'Ocean' },
  { key: 'night', label: 'Night' },
];

const SettingsScreen: React.FC = () => {
  const { colors, current, setTheme } = useTheme();
  const [soundOn, setSoundOn] = React.useState(true);
  const [notificationsOn, setNotificationsOn] = React.useState(false);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.text }]}>Sound</Text>
        <Switch
          value={soundOn}
          onValueChange={setSoundOn}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={soundOn ? "#2196F3" : "#f4f3f4"}
        />
      </View>
      
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.text }]}>Notifications</Text>
        <Switch
          value={notificationsOn}
          onValueChange={setNotificationsOn}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsOn ? "#2196F3" : "#f4f3f4"}
        />
      </View>
      
      <View style={styles.themeSection}>
        <Text style={[styles.label, { color: colors.text, marginBottom: 8 }]}>Theme</Text>
        <View style={styles.themeRow}>
          {THEME_OPTIONS.map(option => (
            <TouchableOpacity
              key={option.key}
              style={[
                styles.themeButton,
                current === option.key && styles.themeButtonActive,
              ]}
              onPress={() => setTheme(option.key as any)}
            >
              <Text
                style={[
                  styles.themeButtonText,
                  current === option.key && styles.themeButtonTextActive,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#f8f8fa',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 32,
  },
  row: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
  },
  themeSection: {
    width: '80%',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
  },
  themeButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#f0f0f7',
    marginRight: 8,
  },
  themeButtonActive: {
    backgroundColor: '#81b0ff',
    borderColor: '#2196F3',
  },
  themeButtonText: {
    color: '#222',
    fontWeight: '600',
  },
  themeButtonTextActive: {
    color: '#fff',
  },
});

export default SettingsScreen;
