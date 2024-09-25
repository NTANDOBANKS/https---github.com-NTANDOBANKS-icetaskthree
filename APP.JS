import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Picker } from 'react-native';

export default function App() {
  const [workoutName, setWorkoutName] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [workoutType, setWorkoutType] = useState('cardio');
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = () => {
    if (workoutName === '' || duration === '' || caloriesBurned === '' || workoutType === '') {
      alert('fill data');
      return;
    }
    
    const newWorkout = {
      workoutName,
      duration,
      caloriesBurned,
      workoutType
    };
    
    setWorkouts([...workouts, newWorkout]);
    setWorkoutName('');
    setDuration('');
    setCaloriesBurned('');
    setWorkoutType('cardio');
  };

  const renderWorkout = ({ item }) => (
    <View style={styles.workoutContainer}>
      <Text style={styles.workoutText}>Workout: {item.workoutName}</Text>
      <Text style={styles.workoutText}>Duration: {item.duration} mins</Text>
      <Text style={styles.workoutText}>Calories Burned: {item.caloriesBurned}</Text>
      <Text style={styles.workoutText}>Type: {item.workoutType}</Text>
    </View>
  );
async (params) => {
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Fitness Tracker</Text>
    
          <TextInput
            style={styles.input}
            placeholder="Workout Name"
            value={workoutName}
            onChangeText={setWorkoutName}
          />
}

      <TextInput
        style={styles.input}
        placeholder="Duration (in minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Calories Burned"
        value={caloriesBurned}
        onChangeText={setCaloriesBurned}
        keyboardType="numeric"
      />

      <Picker
        selectedValue={workoutType}
        style={styles.picker}
        onValueChange={(itemValue) => setWorkoutType(itemValue)}
      >
        <Picker.Item label="Cardio" value="cardio" />
        <Picker.Item label="Strength" value="strength" />
        <Picker.Item label="Flexibility" value="flexibility" />
      </Picker>

      <TouchableOpacity style={styles.addButton} onPress={addWorkout}>
        <Text style={styles.addButtonText}>Add Workout</Text>
      </TouchableOpacity>

      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderWorkout}
        ListEmptyComponent={<Text style={styles.noWorkoutsText}>No workouts added yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  workoutContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    elevation: 2,
  },
  workoutText: {
    fontSize: 16,
  },
  noWorkoutsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});


//Referencing
//GeeksforGeeks (2021). ReactJS Advanced Guides Complete Reference. [online] GeeksforGeeks. Available at: https://www.geeksforgeeks.org/reactjs-advanced-guides-complete-reference/?ref=shm [Accessed 25 Sep. 2024