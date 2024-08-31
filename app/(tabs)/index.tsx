import { StyleSheet, ScrollView, View, Text } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";
import { TextField } from "react-native-ui-lib";
const colorScheme = useColorScheme();
const Color = colorScheme === "dark" ? Colors.dark : Colors.light;
interface IInvoice {
  invoiceNumber: number;
  invoiceDate: Date;
  invoiceTitle: string;
  billTo: {
    name: string;
    address: string;
    cityStateZip: string;
    phone: string;
  };
  from: {
    name: string;
    address: string;
    cityStateZip: string;
    phone: string;
  };
  items: (
    | {
        description: string;
        hours: number;
        rate: number;
        amount: number;
      }
    | {
        description: string;
        amount: number;
      }
  )[];
  currency: string;
  total: number;
  invoiceType: 1 | 2 | 3 | 4;
}

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <TextField
        placeholder="Invoice Number"
        floatOnFocus
        floatingPlaceholder
        fieldStyle={styles.textInput}
        floatingPlaceholderStyle={styles.placeholder}
        showClearButton
      />
      <TextField
        placeholder="Invoice Date"
        floatOnFocus
        floatingPlaceholder
        fieldStyle={styles.textInput}
        floatingPlaceholderStyle={styles.placeholder}
        showClearButton
      />
      <TextField
        placeholder="Invoice Title"
        floatOnFocus
        floatingPlaceholder
        fieldStyle={styles.textInput}
        floatingPlaceholderStyle={styles.placeholder}
        showClearButton
      />
      <View style={styles.addressContainer}>
        <View style={styles.address}>
          <Text style={styles.heading}>Bill To</Text>
          <TextField
            placeholder="Name"
            floatOnFocus
            floatingPlaceholder
            fieldStyle={styles.textInput}
            floatingPlaceholderStyle={styles.placeholder}
            showClearButton
          />
          <TextField
            placeholder="Address Line 1"
            floatOnFocus
            floatingPlaceholder
            fieldStyle={styles.textInput}
            floatingPlaceholderStyle={styles.placeholder}
            showClearButton
          />
          <TextField
            placeholder="Address Line 2"
            floatOnFocus
            floatingPlaceholder
            fieldStyle={styles.textInput}
            floatingPlaceholderStyle={styles.placeholder}
            showClearButton
          />
          <TextField
            placeholder="Phone"
            floatOnFocus
            floatingPlaceholder
            fieldStyle={styles.textInput}
            floatingPlaceholderStyle={styles.placeholder}
            showClearButton
          />
        </View>
        <View style={styles.address}>
          <Text style={styles.heading}>From</Text>
          <TextField
            placeholder="Name"
            floatOnFocus
            floatingPlaceholder
            fieldStyle={styles.textInput}
            floatingPlaceholderStyle={styles.placeholder}
            showClearButton
          />
          <TextField
            placeholder="Address Line 1"
            floatOnFocus
            floatingPlaceholder
            fieldStyle={styles.textInput}
            floatingPlaceholderStyle={styles.placeholder}
            showClearButton
          />
          <TextField
            placeholder="Address Line 2"
            floatOnFocus
            floatingPlaceholder
            fieldStyle={styles.textInput}
            floatingPlaceholderStyle={styles.placeholder}
            showClearButton
          />
          <TextField
            placeholder="Phone"
            floatOnFocus
            floatingPlaceholder
            fieldStyle={styles.textInput}
            floatingPlaceholderStyle={styles.placeholder}
            showClearButton
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  textInput: {
    borderColor: Color.text,
    borderWidth: 1,
    padding: 5,
    fontSize: 10,
    borderRadius: 3,
  },
  placeholder: {
    paddingHorizontal: 5,
  },
  addressContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 50,
    paddingTop: 20,
  },
  address: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
  },
});
