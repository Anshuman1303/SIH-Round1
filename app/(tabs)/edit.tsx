import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import { BaseSyntheticEvent, Fragment, useEffect, useState } from "react";
import { IInvoice, Items } from "@/utils/types";
import { Input } from "@/components/inputs/Input";
import { Button, Divider, IconButton, Text, TextInput, useTheme } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { DatePickerInput } from "react-native-paper-dates";

function isDecimal(value: string) {
  return /^\d*(\.\d*)?$/.test(value);
}

export default function EditScreen() {
  const invoiceType = parseInt(useLocalSearchParams().invoiceType as string);
  const { width, height } = Dimensions.get("window");
  const mobile = width <= 768;
  const theme = useTheme();
  const isInvoiceHour = invoiceType === 1 || invoiceType === 3;
  const isInvoiceTax = invoiceType === 2 || invoiceType === 3;
  const newItem = isInvoiceHour ? { description: "", hours: undefined, rate: undefined, amount: "" } : { description: "", amount: "" };
  const [items, setItems] = useState<Items>([{ ...newItem }]);
  const [invoice, setInvoice] = useState<IInvoice>({
    invoiceNumber: "",
    invoiceDate: undefined,
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
    tax: 0,
    invoiceType: invoiceType as 0 | 1 | 2 | 3,
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
      flexDirection: mobile ? "column" : "row",
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

        <DatePickerInput
          locale="en"
          label="Invoice Date"
          inputMode="start"
          value={invoice.invoiceDate}
          onChange={(value) => setInvoice({ ...invoice, invoiceDate: value })}
          mode="flat"
        />
        {/* <Input label="Invoice Date" invoice={invoice} setInvoice={setInvoice} dataKey="invoiceDate" /> */}
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
                style={{ flex: 1 }}
                onChangeText={(value) =>
                  setItems(
                    itemsArray.map((itemsArrayItem, itemsArrayIndex) => {
                      return itemsArrayIndex === index ? { ...itemsArrayItem, description: value } : itemsArrayItem;
                    })
                  )
                }
                value={items[index].description}
              />
              {isInvoiceHour && (
                <>
                  <TextInput
                    mode="flat"
                    label="Hours"
                    dense={true}
                    style={{ flex: 1 }}
                    inputMode="numeric"
                    onChangeText={(value) =>
                      isDecimal(value) &&
                      setItems(
                        itemsArray.map((itemsArrayItem, itemsArrayIndex) => {
                          return itemsArrayIndex === index ? { ...itemsArrayItem, hours: value ?? "" } : itemsArrayItem;
                        })
                      )
                    }
                    value={items[index].hours ?? ""}
                  />
                  <TextInput
                    mode="flat"
                    label="Rate"
                    dense={true}
                    style={{ flex: 1 }}
                    inputMode="numeric"
                    onChangeText={(value) =>
                      isDecimal(value) &&
                      setItems(
                        itemsArray.map((itemsArrayItem, itemsArrayIndex) => {
                          return itemsArrayIndex === index ? { ...itemsArrayItem, rate: value ?? "" } : itemsArrayItem;
                        })
                      )
                    }
                    value={items[index].rate ?? ""}
                  />
                </>
              )}
              <TextInput
                mode="flat"
                label="Amount"
                dense={true}
                style={{ flex: 1 }}
                inputMode="numeric"
                onChangeText={(value) =>
                  isDecimal(value) &&
                  setItems(
                    itemsArray.map((itemsArrayItem, itemsArrayIndex) => {
                      return itemsArrayIndex === index ? { ...itemsArrayItem, amount: value ?? "" } : itemsArrayItem;
                    })
                  )
                }
                value={items[index].amount ?? ""}
              />
              <IconButton
                onPress={(e) =>
                  setItems(
                    itemsArray.filter((itemsArrayItem, itemsArrayIndex) => {
                      return itemsArrayIndex !== index;
                    })
                  )
                }
                icon="minus"
                mode="contained-tonal"
                iconColor={theme.colors.error}
              />
            </View>
          );
        })}
        <Button
          onPress={(e) => setItems([...items, { ...newItem }])}
          mode="contained-tonal"
          icon="plus"
          buttonColor={theme.colors.surfaceVariant}
          textColor={theme.colors.onSurfaceVariant}>
          Add Item
        </Button>
        {isInvoiceTax && (
          <TextInput
            mode="flat"
            label="Tax"
            dense={true}
            style={{ flex: 1 }}
            inputMode="numeric"
            onChangeText={(value) => isDecimal(value) && setInvoice({ ...invoice, tax: value ?? 0 })}
            value={invoice.tax}
          />
        )}
      </View>
    </ScrollView>
  );
}
