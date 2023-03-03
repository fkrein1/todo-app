import { StyleSheet, Text, View } from 'react-native';
import Clipboard from '../assets/clipboard.svg';
import { theme } from '../styles';

export function NoTask() {
  return (
    <View style={styles.container}>
      <Clipboard />
      <Text style={styles.boldText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    alignItems: 'center',
  },
  boldText: {
    marginTop: 16,
    fontFamily: theme.inter_700,
    fontSize: 14,
    textAlign: 'center',
    color: theme.gray_300,
    lineHeight: 20,
  },
  text: {
    fontFamily: theme.inter_400,
    fontSize: 14,
    textAlign: 'center',
    color: theme.gray_300,
  },
});
