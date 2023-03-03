import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../assets/logo.svg';
import { Counter } from '../components/Counter';
import { NoTask } from '../components/NoTask';
import { Task } from '../components/Task';
import { theme } from '../styles';

interface TaskList {
  text: string;
  done: boolean;
  timestamp: Date;
}

export function Home() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<TaskList[]>([]);

  function handleAddTask() {
    setTaskList((prev) => [
      ...prev,
      { text: task, done: false, timestamp: new Date() },
    ]);
    setTask('');
  }

  function handleToggleTask(timestamp: Date) {
    const toggledTasks = taskList.map((task) => {
      if (task.timestamp === timestamp) {
        return { ...task, done: !task.done };
      } else {
        return task;
      }
    });
    setTaskList(toggledTasks);
  }

  function handleDeleteTask(timestamp: Date) {
    const filteredTasks = taskList.filter(
      (task) => task.timestamp != timestamp,
    );
    setTaskList(filteredTasks);
  }

  const doneTasks = taskList.filter((task) => task.done === true).length;
  const createdTasks = taskList.length;

  return (
    <>
      <View style={styles.header}>
        <Logo style={styles.logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.gray_300}
            onChangeText={(text) => setTask(text)}
            value={task}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleAddTask}
          >
            <Feather name="plus-circle" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Counter createdTasks={createdTasks} doneTasks={doneTasks} />
        {!createdTasks && <NoTask />}
        <FlatList
          data={taskList}
          keyExtractor={(item) => JSON.stringify(item.timestamp)}
          renderItem={({ item }) => (
            <Task
              text={item.text}
              done={item.done}
              timestamp={item.timestamp}
              toggleTask={handleToggleTask}
              deleteTask={handleDeleteTask}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // HEADER
  header: {
    height: 130,
  },
  logo: {
    marginTop: 24,
    alignSelf: 'center',
  },
  // INPUT
  body: {
    flex: 1,
    backgroundColor: theme.gray_600,
    paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'row',
    position: 'relative',
    bottom: 27,
    height: 54,
  },
  textInput: {
    backgroundColor: theme.gray_500,
    padding: 16,
    flex: 1,
    borderWidth: 1,
    borderColor: theme.gray_700,
    borderRadius: 6,
    fontSize: 16,
    color: theme.gray_100,
  },
  button: {
    backgroundColor: theme.blue_dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    marginLeft: 4,
    borderRadius: 6,
  },
});
