import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  body: {
    flex: 1
  },
  container: {
    marginHorizontal: '5%',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 20
  },
  button: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#232323',
    alignItems: 'center'
  },
  content: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  formContainer: {
    marginHorizontal: '1%'
  },
  form: {
    width: '70%',
    marginTop: '10%',
    marginBottom: '7%'
  },
  formInput: {
    fontSize: 16,
  },
  productContainer: {
    marginHorizontal: '5%',
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  add: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  tableContent: {
    fontSize: 15,
    paddingVertical: 4
  },
  closeButton: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#232323',
    alignItems: 'center'
  },
  total: {
    marginVertical: 30,
    fontSize: 20,
    fontWeight: 'bold'
  }
})