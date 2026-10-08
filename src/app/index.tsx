import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

export default function ProfileScreen() {
  const [imageError, setImageError] = useState(false);

  // Handler for floating action button (+ button)
  const handleAddPoints = () => {
    Alert.alert('Add Points');
  };

  // Avatar source: Try local asset first, with fallback URI if asset isn't indexed by Metro yet
  const avatarSource = imageError
    ? { uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' }
    : require('../../assets/profile.png');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Black Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.container}>
        {/* Profile Avatar Section */}
        <View style={styles.profileSection}>
          <View style={styles.outerCircle}>
            {/* Red Outline Avatar Container */}
            <View style={styles.avatarBorder}>
              <Image
                source={avatarSource}
                onError={() => setImageError(true)}
                style={styles.avatarImage}
                resizeMode="cover"
              />
            </View>
            {/* Green Check Mark Badge */}
            <View style={styles.checkBadge}>
              <Text style={styles.checkMarkIcon}>✓</Text>
            </View>
          </View>
        </View>

        {/* Horizontal Divider Line */}
        <View style={styles.divider} />

        {/* Vertical Profile Details Section */}
        <View style={styles.infoSection}>
          {/* Name Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Name</Text>
            <Text style={styles.fieldValue}>Diluka</Text>
          </View>

          {/* Email Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Email</Text>
            <View style={styles.iconRow}>
              <Text style={styles.emailIcon}>✉</Text>
              <Text style={styles.fieldValue}>diluka.w@nsbm.ac.lk</Text>
            </View>
          </View>

          {/* Points Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Points</Text>
            <View style={styles.iconRow}>
              <Text style={styles.starIcon}>★</Text>
              <Text style={styles.fieldValue}>0</Text>
            </View>
          </View>
        </View>

        {/* Floating '+' Button */}
        <TouchableOpacity
          style={styles.fabButton}
          onPress={handleAddPoints}
          activeOpacity={0.8}
        >
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
  },
  header: {
    backgroundColor: '#000000',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F4F6',
    paddingHorizontal: 24,
  },
  profileSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 28,
  },
  outerCircle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarBorder: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    borderWidth: 1.5,
    borderColor: '#FF7F7F',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  checkBadge: {
    position: 'absolute',
    bottom: 22,
    right: 22,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMarkIcon: {
    fontSize: 34,
    color: '#00E600',
    fontWeight: 'bold',
  },
  divider: {
    height: 1.5,
    backgroundColor: '#000000',
    width: '100%',
    marginBottom: 28,
  },
  infoSection: {
    width: '100%',
  },
  fieldGroup: {
    marginBottom: 24,
  },
  fieldLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  fieldValue: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailIcon: {
    fontSize: 16,
    color: '#000000',
    marginRight: 10,
  },
  starIcon: {
    fontSize: 16,
    color: '#000000',
    marginRight: 10,
  },
  fabButton: {
    position: 'absolute',
    bottom: 36,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  fabIcon: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: -2,
  },
});

