import { AntDesign, Feather } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../styles';

interface TaskProps {
  text: string;
  done: boolean;
  timestamp: Date;
  toggleTask: (timestamp: Date) => void;
  deleteTask: (timestamp: Date) => void;
}
export function Task({
  text,
  done,
  timestamp,
  toggleTask,
  deleteTask,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTask(timestamp)}>
        {!done && <Feather name="circle" size={18} color={theme.blue} />}
        {done && (
          <AntDesign name="checkcircle" size={18} color={theme.purple_dark} />
        )}
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.doneText]}>{text}</Text>
      <TouchableOpacity onPress={() => deleteTask(timestamp)}>
        <Feather name="trash-2" size={18} color={theme.gray_300} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.gray_400,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 8,
    minHeight: 50,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: theme.gray_100,
    fontFamily: theme.inter_400,
    marginHorizontal: 18,
  },
  doneText: {
    color: theme.gray_300,
    textDecorationLine: 'line-through',
  },
});
