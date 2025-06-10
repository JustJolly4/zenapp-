import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MODES: { key: string; label: string; colors: [string, string] }[] = [
    { key: 'focus', label: 'Focus', colors: ['#A1FFCE', '#FAFFD1'] },
    { key: 'relax', label: 'Relax', colors: ['#fbc2eb', '#a6c1ee'] },
    { key: 'breathe', label: 'Breathe', colors: ['#fdc830', '#f37335'] },
    { key: 'sleep', label: 'Sleep', colors: ['#83a4d4', '#b6fbff'] },
    { key: 'mindful', label: 'Mindful', colors: ['#f7971e', '#ffd200'] },
  ];
  
const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose Your Mode</Text>
      <View style={styles.grid}>
        {MODES.map(mode => (
          <TouchableOpacity key={mode.key} style={styles.card} activeOpacity={0.85}>
            <LinearGradient
              colors={mode.colors}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.cardLabel}>{mode.label}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#f8f8fa',
    minHeight: '100%',
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 18,
    letterSpacing: 1,
    color: '#222',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    letterSpacing: 0.5,
  },
});

export default HomeScreen;


