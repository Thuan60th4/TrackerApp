import { useState } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import Button from "../UI/Button";
import Input from "./Input";

function ExpressForm({
  expenseId,
  cancelHandle,
  handleData,
  currentValueUpdate,
}) {
  // const listExpenses = useSelector((state) => state.expenses.expenseState);
  const [textInput, setTextInput] = useState({
    description: currentValueUpdate ? currentValueUpdate.description : "",
    amount: currentValueUpdate ? currentValueUpdate.amount.toString() : "",
    date: currentValueUpdate
      ? currentValueUpdate.date.toISOString().slice(0, 10)
      : "",
  });

  const [isValid, setIsvalid] = useState({
    description: true,
    amount: true,
    date: true,
  });

  // 2 cách để set giá trị update
  // useEffect(() => {
  //   if (expenseId) {
  //     let currentValueUpdate = listExpenses.find(
  //       (expense) => expense.id == expenseId
  //     );

  //     const inputValue = {
  //       date: currentValueUpdate.date.toISOString(),
  //       amount: currentValueUpdate.amount.toString(),
  //       description: currentValueUpdate.description,
  //     };
  //     setTextInput(inputValue);
  //   }
  // }, [expenseId]);

  const handleTextInput = (name, value) => {
    setTextInput((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = () => {
    const amountIsvalid = !isNaN(textInput.amount) && textInput.amount > 0;
    const dateIsvalid = new Date(textInput.date).toString() != "Invalid Date";
    const descriptionIsvalid = textInput.description.trim().length > 0;

    if (!amountIsvalid || !dateIsvalid || !descriptionIsvalid) {
      setIsvalid({
        description: descriptionIsvalid,
        amount: amountIsvalid,
        date: dateIsvalid,
      });
      // Alert.alert("Invalid value", "Please enter a valid value", [
      //   { text: "sorry!" },
      // ]);
      return;
    }

    textInput.date = new Date(textInput.date);
    textInput.amount = Number(textInput.amount);

    handleData(textInput);
  };
  return (
    <View>
      <View style={styles.inputRow}>
        <Input
          style={{ flex: 1 }}
          isValid={isValid.amount}
          label="Amount"
          keyboardType="number-pad"
          onChangeText={(e) => handleTextInput("amount", e)}
          value={textInput.amount}
        />
        <Input
          style={{ flex: 1 }}
          isValid={isValid.date}
          label="Date"
          keyboardType={
            Platform.OS == "ios" ? "numbers-and-punctuation" : "number-pad"
          }
          placeholder="YYYY-MM-DD"
          maxLength={10}
          minLength={10}
          onChangeText={(e) => handleTextInput("date", e)}
          value={textInput.date}
        />
      </View>
      <Input
        label="Description"
        isValid={isValid.description}
        keyboardType="default"
        multiline={true}
        onChangeText={(e) => handleTextInput("description", e)}
        value={textInput.description}

        // autoCorrect={false} tự động sửa
        // autoCapitalize="none" tự động viết hoa chữ cái đầu
      />
      {(!isValid.amount || !isValid.date || !isValid.description) && (
        <Text style={styles.notifyInvaild}>Please enter a valid value</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button transparent style={styles.button} onPress={cancelHandle}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit}>
          {expenseId ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  button: {
    minWidth: 120,
    marginHorizontal: 10,
  },
  notifyInvaild: {
    color: "red",
    fontSize: 18,
    alignSelf: "center",
  },
});

export default ExpressForm;
