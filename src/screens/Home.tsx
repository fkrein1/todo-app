import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../../assets/logo.svg';
import { theme } from '../styles';

export function Home() {
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
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Feather name="plus-circle" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 130,
  },
  logo: {
    marginTop: 24,
    alignSelf: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: theme.gray_600,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 24,
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
