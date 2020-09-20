import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import {Form, Input, Item} from 'native-base'
import styles from './styles'


const App = () => {
  const [state, setState] = useState({})
  const [isVisible, setVisible] = useState(false)
  const [list, setList] = useState({})
  const [data, setData] = useState([])


  const toggleVisible = () => {
    setVisible(!isVisible)
  }

  const addNew = () => {
    if(!list.amt || !list.qty || !list.desc) {
      Alert.alert('Missing data')
      return
    }
    setData([...data, {...list, index: data.length++}])
  }

  let totalPrice = 0
  data.map(val =>  totalPrice += Number(val.amt) * Number(val.qty))


  return (
    <SafeAreaView style={styles.body}>
      {!isVisible ? (
        <View style={styles.container}>
          <Text style={styles.title}>Hi there! {'\n'}Welcome to Invoice Creator</Text>
          <TouchableOpacity style={styles.button} onPress={toggleVisible}>
            <Text style={styles.content}>Create Invoice</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.formContainer}>
            <Form style={styles.form}>
              <Item>
                <Input
                  style={styles.formInput}
                  placeholderTextColor="grey"
                  placeholder="client address"
                  onChangeText={text => setState({...state, address: text})}
                  value={state.address}
                />
              </Item>
              <Item>
                <Input
                  style={styles.formInput}
                  placeholderTextColor="grey"
                  placeholder="customer email"
                  keyboardType={'email-address'}
                  onChangeText={text => setState({...state, email: text})}
                  value={state.email}
                />
              </Item>
              <Item>
                <Input
                  style={styles.formInput}
                  placeholderTextColor="grey"
                  placeholder="bill number"
                  keyboardType={'number-pad'}
                  onChangeText={text => setState({...state, bill: text})}
                  value={state.bill}
                />
              </Item>
            </Form>
            <View style={styles.productContainer}>
              <View style={styles.table}>
                <Text style={styles.tableTitle}>Description</Text>
                <Text style={styles.tableTitle}>Quantity</Text>
                <Text style={styles.tableTitle}>Amount</Text>
              </View>
              {data.map(item => (
                <View key={item.index} style={styles.table}>
                  <Text style={styles.tableContent}>{item.desc}</Text>
                  <Text style={styles.tableContent}>{item.qty}</Text>
                  <Text style={styles.tableContent}>{Number(item.amt) * Number(item.qty)}</Text>
                </View>
              ))}
              <View style={styles.add}>
                <Input
                  style={styles.formInput}
                  placeholder="description"
                  onChangeText={text => setList({...list, desc: text})}/>
                <Input
                  style={styles.formInput}
                  placeholder="qty"
                  keyboardType={'number-pad'}
                  onChangeText={text => setList({...list, qty: text})}/>
                <Input
                  style={styles.formInput}
                  placeholder="amt"
                  keyboardType={'number-pad'}
                  onChangeText={text => setList({...list, amt: text})}/>
              <TouchableOpacity onPress={addNew}><Text>Add</Text></TouchableOpacity>
              </View>
            <Text style={styles.total}>Total Price {totalPrice}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleVisible}>
              <Text style={styles.content}>Close</Text>
            </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      </SafeAreaView>
  );
};


export default App;
