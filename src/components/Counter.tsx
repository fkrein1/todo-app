import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../styles';

interface CounterProps {
  createdTasks: number;
  doneTasks: number;
}
export function Counter({ createdTasks, doneTasks }: CounterProps) {
  return (
    <View style={styles.counter}>
      <View style={styles.counterContainer}>
        <Text style={styles.created}>Criadas</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.countervalue}>{createdTasks}</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.done}>Concluídas</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.countervalue}>{doneTasks}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomColor: theme.gray_400,
    borderBottomWidth: 1,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  created: {
    fontSize: 14,
    fontFamily: theme.inter_700,
    color: theme.blue,
    lineHeight: 17,
  },
  done: {
    fontSize: 14,
    fontFamily: theme.inter_700,
    color: theme.purple,
    lineHeight: 17,
  },
  valueContainer: {
    borderRadius: 999,
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: theme.gray_400,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  countervalue: {
    color: theme.gray_200,
    lineHeight: 15,
    fontSize: 12,
    fontFamily: theme.inter_700,
    paddingHorizontal: 8,
  },
});
