import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import { BaseSyntheticEvent, Fragment, useEffect, useState } from "react";
import { IInvoice, Items } from "@/utils/types";
import { Input } from "@/components/inputs/Input";
import { Button, Divider, IconButton, Text, TextInput, useTheme } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { DatePickerInput } from "react-native-paper-dates";
import { defaultInvoice, saveInvoiceLocally, loadInvoiceFromLocalStorage } from "@/utils/firestoreUtils";
import { useInvoice } from "@/contexts/InvoiceContext";

function isDecimal(value: string) {
  return /^\d*(\.\d*)?$/.test(value);
}

export default function EditScreen() {
  const invoiceType = parseInt(useLocalSearchParams().invoiceType as string) as 0 | 1 | 2 | 3;
  const { width, height } = Dimensions.get("window");
  const mobile = width <= 768;
  const theme = useTheme();
  const isInvoiceHour = invoiceType === 1 || invoiceType === 3;
  const isInvoiceTax = invoiceType === 2 || invoiceType === 3;
  const newItem = isInvoiceHour ? { description: "", hours: undefined, rate: undefined, amount: "" } : { description: "", amount: "" };
  const [items, setItems] = useState<Items>([{ ...newItem }]);
  // const [invoice, setInvoice] = useState<IInvoice>(defaultInvoice);
  const { invoice, setInvoice } = useInvoice();
  useEffect(() => {
    const loadData = async () => {
      const savedInvoice = await loadInvoiceFromLocalStorage();
      if (savedInvoice) {
        setInvoice(savedInvoice);
        setItems(savedInvoice.items);
        console.log("Invoice loaded from local storage");
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      if (invoice) {
        invoice.items = items;
        await saveInvoiceLocally(invoice);
        console.log("Invoice saved locally");
      }
    };
    saveData();
  }, [invoice, items]);

  useEffect(() => {
    setInvoice({ ...invoice, invoiceType: invoiceType });
  }, [invoiceType]);

  useEffect(() => {
    if (isInvoiceHour) {
      let tempItems: Items = [];
      items.map((item, index, itemsArray) => {
        console.log(parseFloat(item?.hours) * parseFloat(item?.rate));
        const amount = (parseFloat(item?.hours) * parseFloat(item?.rate)).toString();
        tempItems.push({
          ...item,
          amount: amount === "NaN" ? "" : amount,
        });
      });
      setItems(tempItems);
    }
  }, [...items.map((item, index) => (item?.hour, item?.rate)), items.length]);
  console.log(invoice);
  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total = total + parseFloat(item.amount ?? "0");
    });
    setInvoice({ ...invoice, total: total });
  }, [...items.map((item, index) => item?.amount), items.length]);

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
  return (
    <ScrollView>
      <View style={styles.container}>
        <Input label="Invoice Number" invoice={invoice} setInvoice={setInvoice} dataKey="invoiceNumber" />

        <DatePickerInput
          locale="en"
          label="Invoice Date"
          inputMode="start"
          value={invoice ? (invoice.invoiceDate?.toLocaleDateString ? invoice.invoiceDate : new Date("2000-01-01T00:00:00Z")) : new Date("2000-01-01T00:00:00Z")}
          onChange={(value) => setInvoice({ ...invoice, invoiceDate: value ?? "2000-01-01T00:00:00Z" } as IInvoice)}
          mode="flat"
        // dateFormat="MM-dd-yyyy"
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
            <Input label="Name" invoice={invoice} setInvoice={setInvoice} dataKey="fromName" />
            <Input label="Address Line 1" invoice={invoice} setInvoice={setInvoice} dataKey="fromAddressLine1" />
            <Input label="Address Line 2" invoice={invoice} setInvoice={setInvoice} dataKey="fromAddressLine2" />
            <Input label="Phone" invoice={invoice} setInvoice={setInvoice} dataKey="fromPhone" />
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
                      return itemsArrayIndex === index
                        ? {
                          ...itemsArrayItem,
                          description: value,
                        }
                        : itemsArrayItem;
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
                          return itemsArrayIndex === index
                            ? {
                              ...itemsArrayItem,
                              hours: value ?? "",
                            }
                            : itemsArrayItem;
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
                          return itemsArrayIndex === index
                            ? {
                              ...itemsArrayItem,
                              rate: value ?? "",
                            }
                            : itemsArrayItem;
                        })
                      )
                    }
                    value={items[index].rate ?? ""}
                  />
                </>
              )}
              {!isInvoiceHour && (
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
                        return itemsArrayIndex === index
                          ? {
                            ...itemsArrayItem,
                            amount: value ?? "",
                          }
                          : itemsArrayItem;
                      })
                    )
                  }
                  value={items[index].amount ?? ""}
                />
              )}
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
            onChangeText={(value) => isDecimal(value) && setInvoice({ ...invoice, tax: value ?? "" } as IInvoice)}
            value={invoice?.tax}
          />
        )}
      </View>
    </ScrollView>
  );
}
