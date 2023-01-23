import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e3",
    description: "New Book",
    amount: 5.99,
    date: new Date("2022-01-01"),
  },
  {
    id: "e4",
    description: "Another Book",
    amount: 10.99,
    date: new Date("2022-03-05"),
  },
  {
    id: "e5",
    description: "Gym equipment",
    amount: 20.99,
    date: new Date("2022-02-01"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e8",
    description: "New Book",
    amount: 5.99,
    date: new Date("2022-01-01"),
  },
  {
    id: "e9",
    description: "Another Book",
    amount: 10.99,
    date: new Date("2022-03-05"),
  },
  {
    id: "e10",
    description: "Gym equipment",
    amount: 20.99,
    date: new Date("2022-02-01"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
