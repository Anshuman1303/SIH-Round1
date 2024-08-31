import { StyleSheet, ScrollView, View } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";
import { DateTimePicker, TextField } from "react-native-ui-lib";
import { BaseSyntheticEvent, useState } from "react";
import { IInvoice, Items } from "@/utils/types";
import { Input } from "@/components/inputs/Input";
import { Button, IconButton, Text, TextInput } from "react-native-paper";

const colorScheme = useColorScheme();
const Color = colorScheme === "dark" ? Colors.dark : Colors.light;

const dataChange = (e: BaseSyntheticEvent) => {
  console.log(e);
};

export default function HomeScreen() {
  const [items, setItems] = useState<Items>([{ description: "", amount: 0 }]);
  const [invoice, setInvoice] = useState<IInvoice>({
    invoiceNumber: "",
    invoiceDate: "",
    invoiceTitle: "",
    billToName: "",
    billToAddressLine1: "",
    billToAddressLine2: "",
    billToPhone: "",
    fromName: "",
    fromAddressLine1: "",
    fromAddressLine2: "",
    fromPhone: "",
    items: items,
    currency: "",
    total: 0,
  });
  const styles = StyleSheet.create({
    container: {
      gap: 15,
      padding: 40,
    },
    addressContainer: {
      flexDirection: "row",
      gap: 15,
      width: "100%",
    },
    address: {
      gap: 15,
      flex: 1,
    },
    itemContainer: {
      flexDirection: "row",
      width: "100%",
      gap: 15,
    },
  });
  console.log(invoice);
  console.log(items);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Input label="Invoice Number" invoice={invoice} setInvoice={setInvoice} dataKey="invoiceNumber" />
        <Input label="Invoice Date" invoice={invoice} setInvoice={setInvoice} dataKey="invoiceDate" />
        <Input label="Invoice Title" invoice={invoice} setInvoice={setInvoice} dataKey="invoiceTitle" />
        <View style={styles.addressContainer}>
          <View style={styles.address}>
            <Text variant="headlineMedium">Bill To</Text>
            <Input label="Name" invoice={invoice} setInvoice={setInvoice} dataKey="billToName" />
            <Input label="Address Line 1" invoice={invoice} setInvoice={setInvoice} dataKey="billToAddressLine1" />
            <Input label="Address Line 2" invoice={invoice} setInvoice={setInvoice} dataKey="billToAddressLine2" />
            <Input label="Phone" invoice={invoice} setInvoice={setInvoice} dataKey="billToPhone" />
          </View>
          <View style={styles.address}>
            <Text variant="headlineMedium">From</Text>
            <Input label="Name" invoice={invoice} setInvoice={setInvoice} dataKey="billToName" />
            <Input label="Address Line 1" invoice={invoice} setInvoice={setInvoice} dataKey="billToAddressLine1" />
            <Input label="Address Line 2" invoice={invoice} setInvoice={setInvoice} dataKey="billToAddressLine2" />
            <Input label="Phone" invoice={invoice} setInvoice={setInvoice} dataKey="billToPhone" />
          </View>
        </View>

        <Text variant="headlineMedium">Items</Text>
        {items.map((item, index, itemsArray) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <TextInput
                mode="flat"
                label="Description"
                dense={true}
                onChangeText={(value) =>
                  setItems(
                    itemsArray.map((itemsArrayItem, itemsArrayIndex) => {
                      return itemsArrayIndex === index ? { ...itemsArrayItem, description: value } : itemsArrayItem;
                    })
                  )
                }
                value={items[index].description}></TextInput>
              <TextInput
                mode="flat"
                label="Amount"
                dense={true}
                inputMode="numeric"
                onChangeText={(value) =>
                  /^\d*$/.test(value) &&
                  setItems(
                    itemsArray.map((itemsArrayItem, itemsArrayIndex) => {
                      return itemsArrayIndex === index ? { ...itemsArrayItem, amount: value ? parseInt(value) : 0 } : itemsArrayItem;
                    })
                  )
                }
                value={items[index].amount?.toString()}></TextInput>
              <IconButton
                onPress={(e) =>
                  setItems(
                    itemsArray.filter((itemsArrayItem, itemsArrayIndex) => {
                      return itemsArrayIndex !== index;
                    })
                  )
                }
                icon="minus"
              />
            </View>
          );
        })}
        <IconButton onPress={(e) => setItems([...items, { description: "", amount: 0 }])} icon="plus" />
      </View>
      {/* <TextField placeholder="Invoice Number" {...inputProps} value={invoice.invoiceNumber} />
      <DateTimePicker placeholder="Invoice Date" {...inputProps} value={invoice.invoiceDate} />
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
      <Text style={styles.heading}>Items</Text> */}
    </ScrollView>
  );
}
